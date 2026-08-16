import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/home";

/**
 * "What our Partners Say" — a horizontally scrollable, snap-aligned carousel of
 * testimonial cards. Uses native scroll (no JS) so it stays lightweight and
 * accessible; cards show three-up on large screens and swipe on smaller ones.
 */
export default function Testimonials() {
  const { eyebrow, title, items } = testimonials;

  return (
    <section className="bg-brand-bg pb-20 lg:pb-28">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />

        <ul className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {items.map((item) => (
            <li
              key={item.id}
              className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-3rem)/3)]"
            >
              <TestimonialCard
                rating={item.rating}
                quote={item.quote}
                author={item.author}
                company={item.company}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
