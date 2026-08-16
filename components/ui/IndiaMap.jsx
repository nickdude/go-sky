import { viewBox, statePaths, cities } from "@/data/indiaMap";

/**
 * A ShipBob-style India network map: light state silhouettes with a location pin
 * for each operational city. Hovering a pin lifts it and reveals the city name
 * (pure CSS — no client JS). The full city list is also rendered as chips below
 * the map so the names stay readable on touch devices.
 */
export default function IndiaMap() {
  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-brand-border bg-white p-4 shadow-sm sm:p-8">
        {/* Decorative zoom control, matching the reference UI. */}
        <div className="pointer-events-none absolute left-6 top-6 z-10 flex flex-col overflow-hidden rounded-md border border-brand-border bg-white text-brand-muted shadow-sm">
          <span className="flex h-7 w-7 items-center justify-center border-b border-brand-border text-base leading-none">
            +
          </span>
          <span className="flex h-7 w-7 items-center justify-center text-base leading-none">
            −
          </span>
        </div>

        <svg
          viewBox={viewBox}
          role="img"
          aria-label="Map of India showing GoSky's operational cities"
          className="mx-auto h-auto w-full max-w-2xl"
        >
          {/* Landmass */}
          <g>
            {statePaths.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="#ece9f6"
                stroke="#d8d3ec"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            ))}
          </g>

          {/* City pins */}
          <g>
            {cities.map((c) => (
              <g key={c.name} className="group/pin cursor-pointer">
                {/* Soft halo */}
                <circle cx={c.x} cy={c.y} r="12" className="fill-brand-blue/15" />
                {/* Pin */}
                <circle
                  cx={c.x}
                  cy={c.y}
                  r="6"
                  className="fill-brand-blue stroke-white transition-[r] duration-150 group-hover/pin:[r:8px]"
                  strokeWidth="2"
                />
                {/* Label (revealed on hover) */}
                <text
                  x={c.x}
                  y={c.y - 14}
                  textAnchor="middle"
                  className="pointer-events-none select-none fill-brand-ink text-[15px] font-semibold opacity-0 transition-opacity duration-150 [paint-order:stroke] group-hover/pin:opacity-100"
                  stroke="#ffffff"
                  strokeWidth="4"
                >
                  {c.name}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Readable, always-visible city list. */}
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {cities.map((c) => (
          <li
            key={c.name}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-lavender px-3.5 py-1.5 text-sm font-medium text-brand-purple"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-brand-blue"
              aria-hidden="true"
            />
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
