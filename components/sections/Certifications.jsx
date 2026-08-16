import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import CertificateCard from "@/components/ui/CertificateCard";
import { certifications } from "@/data/about";

/**
 * "Awards & Recognition" — GoSky's registrations and certifications. Each card
 * opens the full certificate PDF in a new tab.
 */
export default function Certifications() {
  const { eyebrow, title, subtitle, items } = certifications;

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align="center"
        />
        <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title}>
              <CertificateCard
                title={item.title}
                issuer={item.issuer}
                file={item.file}
                image={item.image}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
