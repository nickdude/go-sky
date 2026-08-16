import Container from "@/components/common/Container";
import WorldMap from "@/components/ui/WorldMap";
import { cn } from "@/lib/utils";
import { globe } from "@/data/about";

/**
 * "Located around the globe" — an interactive world map of GoSky's cities beside
 * a panel of headline presence stats (offices, countries).
 */
export default function GlobePresence() {
  const { title, description, stats } = globe;

  return (
    <section className="bg-brand-bg pb-16 lg:pb-24">
      <Container>
        <h2 className="text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">
          {title}
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Map */}
          <WorldMap showChips={false} />

          {/* Stats panel */}
          <div className="flex flex-col justify-center gap-8 rounded-2xl bg-brand-lavender p-8 sm:p-10">
            <p className="text-sm leading-relaxed text-brand-muted">
              {description}
            </p>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-brand-purple/10 pt-8"
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
