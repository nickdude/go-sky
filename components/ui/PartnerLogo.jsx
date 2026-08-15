import Image from "next/image";

/**
 * Renders a single partner/airline logo at a consistent height inside a fixed
 * box, so logos of different aspect ratios align on a shared baseline.
 *
 * @param {Object} props
 * @param {string} props.name - Company name (used for alt text).
 * @param {string} props.logo - Image path.
 */
export default function PartnerLogo({ name, logo }) {
  return (
    <div className="flex h-12 w-32 shrink-0 items-center justify-center sm:w-40">
      <Image
        src={logo}
        alt={name}
        width={160}
        height={48}
        className="max-h-10 w-auto object-contain"
      />
    </div>
  );
}
