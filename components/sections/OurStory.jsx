import Image from "next/image";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { enquiry } from "@/data/contact";
import { story } from "@/data/about";

/**
 * "Our story" — the company narrative. A heading with a supporting illustration
 * on the left and the story paragraphs on the right, followed by an accordion of
 * vision / history / purpose / values beside a supporting photograph.
 */
export default function OurStory() {
  const { eyebrow, title, paragraphs, pillars, image } = story;

  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="our-story-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              titleClassName="max-w-md"
            />
            <div className="relative mt-8 hidden aspect-[1577/997] w-full max-w-md lg:block">
              <Image
                src={enquiry.illustration.src}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 0px, 400px"
                className="object-contain object-left-bottom"
              />
            </div>
          </div>

          <div className="space-y-4">
            {paragraphs.map((text, i) => (
              <p key={i} className="text-sm leading-relaxed text-brand-muted">
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Accordion items={pillars} defaultOpenId="vision" />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
