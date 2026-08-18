import { buildMetadata } from "@/lib/seo";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import OfficeCard from "@/components/ui/OfficeCard";
import { airports, networkTagline } from "@/data/airports";

export const metadata = buildMetadata({
  title: "Our Airport Network",
  description:
    "GoSky Logistics operates across 32 airports in India — view every city, airport and address in our air cargo network.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <section className="bg-brand-bg py-16 lg:py-24">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Our Network"
          title={`Serving ${airports.length} airports across India & the world`}
          subtitle={networkTagline}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {airports.map((airport) => (
            <li key={airport.slug}>
              <OfficeCard
                tone="light"
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
