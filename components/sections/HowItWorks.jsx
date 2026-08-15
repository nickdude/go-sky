import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import StepCard from "@/components/ui/StepCard";
import { howItWorks } from "@/data/home";

/**
 * "How it works" — an eyebrow/heading with a supporting subtitle, followed by a
 * three-step process laid out as cards.
 */
export default function HowItWorks() {
  const { eyebrow, title, subtitle, steps } = howItWorks;

  return (
    <section className="bg-brand-bg py-16 lg:py-24">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={eyebrow} title={title} />
          <p className="max-w-sm text-base text-brand-muted md:pb-1">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              title={step.title}
              description={step.description}
              image={step.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
