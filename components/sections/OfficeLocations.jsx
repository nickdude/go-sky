import Container from "@/components/common/Container";
import OfficeCard from "@/components/ui/OfficeCard";
import { offices } from "@/data/contact";

/**
 * Dark purple band of office-location cards. Shared by the Contact and Why Us
 * pages. Data-driven from data/contact.js.
 */
export default function OfficeLocations() {
  return (
    <section className="bg-brand-purple py-16 lg:py-20" aria-label="Our offices">
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => (
            <li key={office.id}>
              <OfficeCard
                city={office.city}
                address={office.address}
                href={office.href}
                image={office.image}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
