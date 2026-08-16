import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/common/icons";
import { cn } from "@/lib/utils";

/**
 * Airport location card: a photo of the airport, the city (with IATA code), the
 * airport name, its address and a "Contact us" link.
 *
 * @param {Object} props
 * @param {string} props.city
 * @param {string} props.iata
 * @param {string} props.name      - Full airport name.
 * @param {string[]} props.address - Address split into display lines.
 * @param {{src:string,alt:string}} props.image
 * @param {string} [props.href="/contact"]
 * @param {"dark"|"light"} [props.tone="dark"] - "dark" for the purple band,
 *   "light" for the locations page.
 */
export default function OfficeCard({
  city,
  iata,
  name,
  address,
  image,
  href = "/contact",
  tone = "dark",
}) {
  const light = tone === "light";

  return (
    <div
      className={cn(
        "flex h-full flex-col",
        light
          ? "overflow-hidden rounded-2xl border border-brand-border bg-white"
          : "text-white"
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden",
          light ? "" : "rounded-xl bg-white/10"
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
          className="object-cover"
        />
        {iata && (
          <span className="absolute left-3 top-3 rounded-md bg-black/45 px-2 py-0.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
            {iata}
          </span>
        )}
      </div>

      <div className={cn("flex flex-1 flex-col", light && "p-5")}>
        <h3
          className={cn(
            "mt-4 text-lg font-semibold",
            light ? "mt-0 text-brand-ink" : "text-white"
          )}
        >
          {city}
        </h3>
        {name && (
          <p className={cn("mt-0.5 text-sm", light ? "text-brand-muted" : "text-white/80")}>
            {name}
          </p>
        )}
        <address
          className={cn(
            "mt-2 flex-1 text-sm not-italic leading-relaxed",
            light ? "text-brand-muted" : "text-white/70"
          )}
        >
          {address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <Link
          href={href}
          className={cn(
            "mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80",
            light ? "text-brand-purple" : "text-white"
          )}
        >
          Contact us
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
