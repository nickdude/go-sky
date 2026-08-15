import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { ctaBanner } from "@/data/home";

/**
 * Full-width call-to-action banner (dark purple, rounded) with copy and CTAs on
 * the left and a supporting illustration on the right.
 */
export default function CtaBanner() {
  const { title, description, primaryCta, secondaryCta, image } = ctaBanner;

  return (
    <section className="bg-brand-bg pb-16 lg:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-purple">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="px-8 py-12 sm:px-12 lg:py-16">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={primaryCta.href} variant="light" withArrow>
                  {primaryCta.label}
                </Button>
                <Button href={secondaryCta.href} variant="outlineLight">
                  {secondaryCta.label}
                </Button>
              </div>
            </div>

            <div className="relative h-56 sm:h-72 lg:h-full lg:min-h-[320px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom lg:object-right-bottom"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
