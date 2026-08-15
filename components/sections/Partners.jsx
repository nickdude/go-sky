import Container from "@/components/common/Container";
import PartnerLogo from "@/components/ui/PartnerLogo";
import { partners } from "@/data/home";

/**
 * "Our Partners" logo strip. Logos wrap and stay centred across breakpoints.
 */
export default function Partners() {
  return (
    <section className="bg-white py-12" aria-labelledby="partners-heading">
      <Container>
        <h2
          id="partners-heading"
          className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted"
        >
          Our Partners
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 sm:gap-x-10">
          {partners.map((partner) => (
            <li key={partner.name}>
              <PartnerLogo name={partner.name} logo={partner.logo} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
