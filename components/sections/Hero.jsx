import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { hero } from "@/data/home";

/**
 * Home hero. Contains the page's single <h1>.
 *
 * On mobile the layout stacks: copy first, then the graphic. On desktop the
 * illustration is pinned to the right and bleeds off the viewport edge (matching
 * the Figma), while the copy is constrained to the left within the container.
 */
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-hero"
      aria-labelledby="hero-heading"
    >
      {/* Copy */}
      <Container className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-semibold leading-[1.12] text-brand-navy sm:text-5xl lg:text-[3.25rem]"
          >
            {hero.titleBefore}
            <span className="text-brand-purple">{hero.highlight}</span>
            <span className="text-brand-purple">{hero.titleMiddle}</span>
            {hero.titleAfter}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-brand-muted">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} size="lg" withArrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} size="lg" variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>

      {/* Graphic: stacks under the copy on mobile; pinned to the right edge on
          desktop so it bleeds off the viewport like the design. `flex` is only
          applied at lg — on mobile it would trigger min-width:auto and blow the
          image out to its intrinsic width. */}
      <div className="pb-8 sm:pb-12 lg:absolute lg:inset-y-0 lg:right-0 lg:flex lg:items-center lg:justify-end lg:pb-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          priority
          sizes="(max-width: 1024px) 92vw, 56vw"
          className="mx-auto h-auto w-[92%] max-w-xl min-w-0 lg:mx-0 lg:h-[78%] lg:w-auto lg:max-w-none xl:h-[80%]"
        />
      </div>
    </section>
  );
}
