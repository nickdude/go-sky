import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { hero } from "@/data/home";

/**
 * Home hero. Contains the page's single <h1>. Two-column on desktop, stacked on
 * mobile. The right-hand graphic already includes the airline-rate cards.
 */
export default function Hero() {
  return (
    <section className="bg-brand-hero" aria-labelledby="hero-heading">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-semibold leading-[1.1] text-brand-navy sm:text-5xl lg:text-[3.25rem]"
          >
            {hero.titleBefore}
            <span className="text-brand-blue">{hero.highlight}</span>
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

        <div className="relative">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
