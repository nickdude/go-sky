import Image from "next/image";

/**
 * A single "how it works" step: illustration, an uppercase step title and a
 * short description.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.image
 */
export default function StepCard({ title, description, image }) {
  return (
    <div>
      <div className="relative mb-5 h-32 w-40">
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          fill
          sizes="160px"
          className="object-contain object-left"
        />
      </div>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-blue">
        {title}
      </h3>
      <p className="max-w-xs text-sm leading-relaxed text-brand-muted">
        {description}
      </p>
    </div>
  );
}
