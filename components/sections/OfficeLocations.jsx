import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import OfficeCard from "@/components/ui/OfficeCard";
import { airports } from "@/data/airports";

/**
 * Dark purple band previewing GoSky's airport network. Shows the first four
 * airports with a link to the full locations page. Shared by the Contact and
 * Why Us pages; the full list lives at /locations.
 */
export default function OfficeLocations() {
  const preview = airports.slice(0, 4);

  return (
    <section className="bg-brand-purple py-16 text-white lg:py-20" aria-label="Our airport network">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Our Network
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Serving {airports.length} airports across India &amp; the world
            </h2>
          </div>
          <Button href="/locations" variant="light" withArrow className="shrink-0">
            View all airports
          </Button>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((airport) => (
            <li key={airport.slug}>
              <OfficeCard
                city={airport.city}
                iata={airport.iata}
                name={airport.name}
                address={airport.address}
                image={airport.image}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
