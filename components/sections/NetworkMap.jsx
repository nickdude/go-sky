import Image from "next/image";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { network } from "@/data/home";

/**
 * "Our network across the globe" — heading plus a world map illustrating GoSky's
 * operational hubs. The map (with location pins) is a single optimized image.
 */
export default function NetworkMap() {
  const { eyebrow, title, image } = network;

  return (
    <section className="bg-brand-bg py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        {/*
          The source map asset draws country borders, labels and location pins on
          a transparent landmass. Rendering it over a soft lavender surface makes
          the continents read as an outline world map (matching the design's
          light-lavender treatment) while keeping the blue pins crisp.
        */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-brand-border bg-brand-hero p-4 sm:p-8">
          <div className="relative aspect-[2672/1262] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
