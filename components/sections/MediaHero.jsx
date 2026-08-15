import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { cn } from "@/lib/utils";

/**
 * Full-bleed photographic hero with a floating white content card on the left.
 * Shared by the About Us and Why Us pages — copy and imagery come from the
 * page's data file. Contains the page's single <h1>.
 *
 * @param {Object} props
 * @param {string} props.eyebrow
 * @param {string} props.titleBefore  - Leading (ink-coloured) part of the title.
 * @param {string} props.highlight    - Accent-coloured part of the title.
 * @param {boolean} [props.highlightBlock] - Render the highlight on its own line.
 * @param {string} props.description
 * @param {{label:string,href:string}} props.primaryCta
 * @param {{label:string,href:string}} props.secondaryCta
 * @param {{src:string,alt:string,width:number,height:number}} props.image
 */
export default function MediaHero({
  eyebrow,
  titleBefore,
  highlight,
  highlightBlock = false,
  description,
  primaryCta,
  secondaryCta,
  image,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-hero">
      {/* Background photograph */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-xl rounded-2xl bg-white p-8 shadow-sm sm:p-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-semibold leading-[1.15] text-brand-navy sm:text-4xl lg:text-[2.75rem]">
            {titleBefore}
            <span className={cn("text-brand-purple", highlightBlock && "block")}>
              {highlight}
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-brand-muted">
            {description}
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Button href={primaryCta.href} withArrow>
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="outline">
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
