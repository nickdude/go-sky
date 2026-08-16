import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { hero } from "@/data/home";

/**
 * Home hero. Contains the page's single <h1>.
 *
 * Desktop: copy on the left, graphic pinned to the right filling the full height
 * and bleeding off the edges (its left edge matches the section colour, so there
 * is no seam). Mobile/tablet: copy first, then the graphic full-bleed with a soft
 * gradient fade at the top so its baked-in background blends into the section.
 */
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-hero"
      aria-labelledby="hero-heading"
    >
      {/* Decorative gradient glow for depth. */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_82%_18%,rgba(255,255,255,0.6),transparent_60%)]"
        aria-hidden="true"
      />

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

      {/* Graphic. Full-bleed and stacked under the copy on mobile/tablet; pinned
          to the right and full-height on desktop. `flex` is lg-only — on mobile it
          would trigger min-width:auto and blow the image out to intrinsic width. */}
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:flex lg:items-center lg:justify-end">
        {/* Top fade blends the graphic's baked-in background into the section. */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-brand-hero to-transparent sm:h-24 lg:hidden"
          aria-hidden="true"
        />
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          priority
          sizes="(max-width: 1024px) 100vw, 56vw"
          className="h-auto w-full min-w-0 lg:h-full lg:w-auto lg:max-w-none"
        />
      </div>
    </section>
  );
}
