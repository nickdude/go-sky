"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  viewBox,
  worldSize,
  countryPaths,
  cities,
  focusBox,
  routes,
} from "@/data/worldMap";

// A paper-plane glyph pointing along +x (so `rotate="auto"` banks it along the
// flight path). Drawn around the origin; counter-scaled to stay a constant size.
const PLANE = "M12 0 L-8 -7 L-3 0 L-8 7 Z";

// Build a curved arc between two points, bowing "upward" like a flight path.
// Returns the SVG path plus the midpoint + tangent angle (for the static,
// reduced-motion fallback).
function buildArc(a, b) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  let px = -dy / len;
  let py = dx / len;
  if (py > 0) {
    px = -px;
    py = -py;
  } // ensure the bow curves toward the top of the map
  const bow = 0.22;
  const cx = mx + px * len * bow;
  const cy = my + py * len * bow;
  const qx = 0.25 * a.x + 0.5 * cx + 0.25 * b.x;
  const qy = 0.25 * a.y + 0.5 * cy + 0.25 * b.y;
  // Tangent of a quadratic Bézier at its midpoint is parallel to the chord.
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  return { d: `M${a.x},${a.y} Q${cx},${cy} ${b.x},${b.y}`, qx, qy, angle, len };
}

// Zoom anchors on GoSky's cities (India) since that's where every pin is, so
// zooming in focuses the network rather than the middle of the ocean.
const ANCHOR = {
  x: (focusBox.x0 + focusBox.x1) / 2,
  y: (focusBox.y0 + focusBox.y1) / 2,
};
const MIN_SCALE = 1;
const MAX_SCALE = 12;
const ZOOM_STEP = 1.6;

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// Keep the map covering the viewport (no empty gutters) at any zoom level.
function clampView(x, y, scale) {
  return {
    scale,
    x: clamp(x, worldSize.width * (1 - scale), 0),
    y: clamp(y, worldSize.height * (1 - scale), 0),
  };
}

/**
 * Interactive world map for the network section. Shows the whole world by
 * default and highlights every GoSky city with a pin. The +/- buttons zoom
 * (toward India, where the pins are) and the map can be dragged to pan; pins
 * keep a constant on-screen size at any zoom. Hovering a pin reveals its name.
 *
 * @param {Object} props
 * @param {boolean} [props.showChips=true] - Render the readable city list below
 *   the map. Hidden where the map sits beside other content (e.g. About page).
 */
export default function WorldMap({ showChips = true }) {
  const [view, setView] = useState({ scale: 1, x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const svgRef = useRef(null);
  const drag = useRef(null);

  // Disable the moving planes for users who prefer reduced motion. The initial
  // read is deferred a frame so it isn't a synchronous setState in the effect
  // (and stays hydration-safe: server/first client render match).
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    const raf = requestAnimationFrame(() => setReducedMotion(mq.matches));
    return () => {
      cancelAnimationFrame(raf);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  // Resolve each route to its arc geometry once (coordinates are static).
  const arcs = useMemo(() => {
    const byName = new Map(cities.map((c) => [c.name, c]));
    return routes
      .map((r) => {
        const a = byName.get(r.from);
        const b = byName.get(r.to);
        if (!a || !b) return null;
        const arc = buildArc(a, b);
        return { ...arc, dur: Math.min(11, Math.max(5, arc.len / 55)) };
      })
      .filter(Boolean);
  }, []);

  const zoomTo = (nextScale) => {
    setView((v) => {
      const s = clamp(nextScale, MIN_SCALE, MAX_SCALE);
      const ratio = s / v.scale;
      return clampView(
        ANCHOR.x - ratio * (ANCHOR.x - v.x),
        ANCHOR.y - ratio * (ANCHOR.y - v.y),
        s
      );
    });
  };

  const reset = () => setView({ scale: 1, x: 0, y: 0 });

  const onPointerDown = (e) => {
    if (view.scale <= 1) return; // nothing to pan when fully zoomed out
    drag.current = { px: e.clientX, py: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const ratio = worldSize.width / rect.width; // screen px -> viewBox units
    const dx = (e.clientX - drag.current.px) * ratio;
    const dy = (e.clientY - drag.current.py) * ratio;
    drag.current = { px: e.clientX, py: e.clientY };
    setView((v) => clampView(v.x + dx, v.y + dy, v.scale));
  };

  const endDrag = (e) => {
    drag.current = null;
    if (e.currentTarget.hasPointerCapture?.(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  // Counter-scale so pins/labels stay the same on-screen size at any zoom.
  const k = 1 / view.scale;
  const zoomed = view.scale > 1;

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm">
        {/* Zoom controls */}
        <div className="absolute left-4 top-4 z-10 flex flex-col overflow-hidden rounded-md border border-brand-border bg-white shadow-sm">
          <button
            type="button"
            aria-label="Zoom in"
            onClick={() => zoomTo(view.scale * ZOOM_STEP)}
            className="flex h-8 w-8 items-center justify-center border-b border-brand-border text-lg leading-none text-brand-ink transition-colors hover:bg-brand-lavender"
          >
            +
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            onClick={() => zoomTo(view.scale / ZOOM_STEP)}
            className="flex h-8 w-8 items-center justify-center text-lg leading-none text-brand-ink transition-colors hover:bg-brand-lavender"
          >
            −
          </button>
        </div>
        {zoomed && (
          <button
            type="button"
            onClick={reset}
            className="absolute right-4 top-4 z-10 rounded-md border border-brand-border bg-white px-3 py-1.5 text-xs font-medium text-brand-ink shadow-sm transition-colors hover:bg-brand-lavender"
          >
            Reset
          </button>
        )}

        <svg
          ref={svgRef}
          viewBox={viewBox}
          role="img"
          aria-label="World map showing GoSky's operational cities across India"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className={`block h-auto w-full touch-none select-none bg-brand-hero/40 ${
            zoomed ? "cursor-grab active:cursor-grabbing" : ""
          }`}
        >
          <g transform={`translate(${view.x} ${view.y}) scale(${view.scale})`}>
            {/* Landmasses */}
            <g>
              {countryPaths.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="#ece9f6"
                  stroke="#d8d3ec"
                  strokeWidth={0.6 * k}
                  strokeLinejoin="round"
                />
              ))}
            </g>

            {/* Flight routes: dashed arcs with a plane travelling along each. */}
            <g className="pointer-events-none">
              {arcs.map((arc, i) => (
                <g key={i}>
                  <path
                    d={arc.d}
                    fill="none"
                    className="stroke-brand-blue/40"
                    strokeWidth={1.3 * k}
                    strokeLinecap="round"
                    strokeDasharray={`${5 * k} ${6 * k}`}
                  />
                  {reducedMotion ? (
                    <g
                      transform={`translate(${arc.qx} ${arc.qy}) rotate(${arc.angle}) scale(${k})`}
                    >
                      <path d={PLANE} className="fill-brand-purple" />
                    </g>
                  ) : (
                    <g>
                      <g transform={`scale(${k})`}>
                        <path d={PLANE} className="fill-brand-purple" />
                      </g>
                      <animateMotion
                        path={arc.d}
                        rotate="auto"
                        dur={`${arc.dur}s`}
                        begin={`-${(i * 1.3).toFixed(1)}s`}
                        repeatCount="indefinite"
                      />
                    </g>
                  )}
                </g>
              ))}
            </g>

            {/* City pins */}
            <g>
              {cities.map((c) => (
                <g key={c.name} className="group/pin cursor-pointer">
                  <circle cx={c.x} cy={c.y} r={9 * k} className="fill-brand-blue/15" />
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={4.5 * k}
                    className="fill-brand-blue stroke-white"
                    strokeWidth={1.5 * k}
                  />
                  <text
                    x={c.x}
                    y={c.y - 11 * k}
                    textAnchor="middle"
                    className="pointer-events-none select-none fill-brand-ink opacity-0 [paint-order:stroke] group-hover/pin:opacity-100"
                    style={{ fontSize: `${13 * k}px`, fontWeight: 600 }}
                    stroke="#ffffff"
                    strokeWidth={3.5 * k}
                  >
                    {c.name}
                  </text>
                </g>
              ))}
            </g>
          </g>
        </svg>
      </div>

      {/* Readable, always-visible city list. */}
      {showChips && (
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {cities.map((c) => (
            <li
              key={c.name}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-lavender px-3.5 py-1.5 text-sm font-medium text-brand-purple"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
              {c.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
