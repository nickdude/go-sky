import Image from "next/image";

/**
 * Leadership team member: a portrait with the person's role and name beneath.
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.role
 * @param {string} props.image
 */
export default function TeamCard({ name, role, image }) {
  return (
    <figure>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-brand-lavender">
        <Image
          src={image}
          alt={`${name}, ${role}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
          className="object-cover object-top"
        />
      </div>
      <figcaption className="mt-4 text-center">
        <p className="text-xs text-brand-muted">{role}</p>
        <p className="mt-1 text-base font-semibold text-brand-ink">{name}</p>
      </figcaption>
    </figure>
  );
}
