import Card from "@/components/ui/Card";
import Rating from "@/components/ui/Rating";

/**
 * Testimonial card: star rating, quote and the client's name/company shown with
 * an initials avatar. Built on the generic <Card> surface.
 *
 * @param {Object} props
 * @param {number} props.rating
 * @param {string} props.quote
 * @param {string} props.author  - Person's name.
 * @param {string} props.company - Company name (drives the avatar initials).
 */
export default function TestimonialCard({ rating, quote, author, company }) {
  const initials = company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <Card as="figure" className="flex h-full flex-col">
      <Rating value={rating} />
      <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-brand-muted">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-lavender text-sm font-semibold text-brand-purple"
        >
          {initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-ink">{author}</p>
          <p className="text-xs text-brand-muted">{company}</p>
        </div>
      </figcaption>
    </Card>
  );
}
