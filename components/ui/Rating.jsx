import { StarIcon, StarHalfIcon } from "@/components/common/icons";

/**
 * Star rating display derived from a numeric value (e.g. 4.5 of 5).
 * Renders an accessible label and decorative star icons.
 *
 * @param {Object} props
 * @param {number} props.value - Rating value, 0-`max`.
 * @param {number} [props.max=5]
 */
export default function Rating({ value, max = 5 }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;

  return (
    <div
      className="flex items-center gap-1 text-brand-blue"
      role="img"
      aria-label={`Rated ${value} out of ${max}`}
    >
      {Array.from({ length: max }).map((_, i) => {
        if (i < full) return <StarIcon key={i} className="h-5 w-5" aria-hidden="true" />;
        if (i === full && hasHalf)
          return <StarHalfIcon key={i} className="h-5 w-5" aria-hidden="true" />;
        return (
          <StarIcon
            key={i}
            className="h-5 w-5 text-brand-blue/25"
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}
