import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import IndiaMap from "@/components/ui/IndiaMap";
import { network } from "@/data/home";

/**
 * "Our network across the globe" — heading plus a ShipBob-style India map that
 * highlights every city GoSky operates in (see components/ui/IndiaMap.jsx).
 */
export default function NetworkMap() {
  const { eyebrow, title } = network;

  return (
    <section className="bg-brand-bg py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-10">
          <IndiaMap />
        </div>
      </Container>
    </section>
  );
}
