"use client";

import { useRef, useState } from "react";
import { viewBox, worldSize, countryPaths, cities, focusBox } from "@/data/worldMap";

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
  const svgRef = useRef(null);
  const drag = useRef(null);

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
