import Image from "next/image";
import Card from "@/components/ui/Card";
import Rating from "@/components/ui/Rating";

/**
 * Testimonial card: star rating, quote and the partner's name/role with their
 * logo. Built on the generic <Card> surface.
 *
 * @param {Object} props
 * @param {number} props.rating
 * @param {string} props.quote
 * @param {string} props.author
 * @param {string} props.role
 * @param {string} props.logo
 * @param {string} props.logoAlt
 */
export default function TestimonialCard({
  rating,
  quote,
  author,
  role,
  logo,
  logoAlt,
}) {
  return (
    <Card as="figure" className="flex h-full flex-col">
      <Rating value={rating} />
      <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-brand-muted">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-brand-ink">{author}</p>
          <p className="text-xs text-brand-muted">{role}</p>
        </div>
        <Image
          src={logo}
          alt={logoAlt}
          width={120}
          height={32}
          className="max-h-8 w-auto object-contain"
        />
      </figcaption>
    </Card>
  );
}
