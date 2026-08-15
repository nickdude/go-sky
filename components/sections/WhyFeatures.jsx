import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/data/why-us";

/**
 * "Simple, transparent, reliable" — the grid of reasons customers choose GoSky.
 */
export default function WhyFeatures() {
  const { eyebrow, title, items } = features;

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-brand-border bg-brand-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.title}>
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
