import Image from "next/image";
import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";
import { globe } from "@/data/about";

/**
 * "Located around the globe" — a world map of GoSky's hubs beside a panel of
 * headline presence stats (offices, countries).
 */
export default function GlobePresence() {
  const { title, description, image, stats } = globe;

  return (
    <section className="bg-brand-bg pb-16 lg:pb-24">
      <Container>
        <h2 className="text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">
          {title}
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Map */}
          <div className="relative overflow-hidden rounded-2xl border border-brand-border bg-brand-hero p-4 sm:p-6">
            <p className="absolute right-6 top-6 z-10 max-w-[15rem] rounded-lg bg-brand-purple/90 px-4 py-3 text-xs leading-relaxed text-white sm:max-w-xs">
              {description}
            </p>
            <div className="relative aspect-[2672/1262] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Stats panel */}
          <div className="flex flex-col justify-center gap-8 rounded-2xl bg-brand-lavender p-8 sm:p-10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(i > 0 && "border-t border-brand-purple/10 pt-8")}
              >
                <p
                  className={cn(
                    "text-5xl font-semibold",
                    stat.accent === "blue" ? "text-brand-blue" : "text-brand-ink"
                  )}
                >
                  {stat.value}
                </p>
                <p className="mt-3 flex items-center gap-2 text-lg font-medium text-brand-ink">
                  <span
                    className={cn(
                      "inline-block h-2.5 w-2.5 rounded-full",
                      stat.accent === "blue" ? "bg-brand-blue" : "bg-brand-ink"
                    )}
                    aria-hidden="true"
                  />
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
