import { iconMap } from "@/components/common/icons";

/**
 * A single differentiator card: a line icon, a short title and a description.
 * Used by the Why Us "Simple, transparent, reliable" grid.
 *
 * @param {Object} props
 * @param {string} props.icon - Key into `iconMap`.
 * @param {string} props.title
 * @param {string} props.description
 */
export default function FeatureCard({ icon, title, description }) {
  const Icon = iconMap[icon];

  return (
    <div className="flex h-full flex-col bg-white p-6">
      {Icon && (
        <Icon className="mb-5 h-8 w-8 text-brand-purple" aria-hidden="true" />
      )}
      <h3 className="mb-2 text-base font-semibold text-brand-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-brand-muted">{description}</p>
    </div>
  );
}
