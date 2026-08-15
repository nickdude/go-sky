import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SectionHeading from "@/components/common/SectionHeading";
import { CheckCircleIcon } from "@/components/common/icons";
import { buildingFuture } from "@/data/home";

/**
 * Two-column "value proposition" section: heading, description, a bullet list of
 * differentiators and CTAs on the left; a supporting photo on the right.
 */
export default function BuildingFuture() {
  const { eyebrow, title, description, points, primaryCta, secondaryCta, image } =
    buildingFuture;

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            titleClassName="max-w-md"
          />
          <p className="mt-5 max-w-md text-base leading-relaxed text-brand-muted">
            {description}
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <CheckCircleIcon
                  className="h-5 w-5 shrink-0 text-brand-blue"
                  aria-hidden="true"
                />
                <span className="text-sm text-brand-ink">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primaryCta.href} withArrow>
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="outline">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
