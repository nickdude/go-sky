import Image from "next/image";

/**
 * Leadership team member: a portrait with the person's role and name beneath.
 * Falls back to an initials placeholder when no photo is available.
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.role
 * @param {string} [props.image]
 */
export default function TeamCard({ name, role, image }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <figure>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-brand-lavender">
        {image ? (
          <Image
            src={image}
            alt={`${name}, ${role}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
            className="object-cover object-top"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            aria-hidden="true"
          >
            <span className="text-4xl font-semibold text-brand-purple/60">
              {initials}
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-4 text-center">
        <p className="text-xs text-brand-muted">{role}</p>
        <p className="mt-1 text-base font-semibold text-brand-ink">{name}</p>
      </figcaption>
    </figure>
  );
}
