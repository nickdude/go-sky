import Container from "@/components/common/Container";
import PartnerLogo from "@/components/ui/PartnerLogo";
import { partners } from "@/data/home";

/**
 * "Our Partners" — the partner/airline logos scroll continuously as a horizontal
 * marquee. The track duplicates the logo set so the loop is seamless; it pauses
 * on hover and is disabled for users who prefer reduced motion (see globals.css).
 */
export default function Partners() {
  return (
    <section className="bg-white py-8" aria-labelledby="partners-heading">
      <Container>
        <h2
          id="partners-heading"
          className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted"
        >
          Our Partners
        </h2>
      </Container>

      {/* Full-bleed marquee so logos scroll edge to edge. */}
      <div className="marquee group relative overflow-hidden">
        {/* Soft fades at each edge. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

        <ul className="animate-marquee flex w-max items-center">
          {[...partners, ...partners].map((partner, i) => (
            <li
              key={`${partner.name}-${i}`}
              className="mx-5 flex shrink-0 items-center sm:mx-7"
              aria-hidden={i >= partners.length}
            >
              <PartnerLogo
                name={partner.name}
                logo={partner.logo}
                width={partner.width}
                height={partner.height}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
