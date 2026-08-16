import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import WorldMap from "@/components/ui/WorldMap";
import { network } from "@/data/home";

/**
 * "Our network across the globe" — heading plus an interactive world map that
 * highlights every city GoSky operates in. Defaults to the whole world and can
 * be zoomed/panned (see components/ui/WorldMap.jsx).
 */
export default function NetworkMap() {
  const { eyebrow, title } = network;

  return (
    <section className="bg-brand-bg py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-10">
          <WorldMap />
        </div>
      </Container>
    </section>
  );
}
