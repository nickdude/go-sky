import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/common/icons";

/**
 * Office location card shown on the dark purple "locations" band: a photo of the
 * city, the city name, a multi-line address and a "Contact us" link.
 *
 * @param {Object} props
 * @param {string} props.city
 * @param {string[]} props.address - Address split into display lines.
 * @param {string} props.href
 * @param {{src:string,alt:string,width:number,height:number}} props.image
 */
export default function OfficeCard({ city, address, href, image }) {
  return (
    <div className="text-white">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{city}</h3>
      <address className="mt-2 text-sm not-italic leading-relaxed text-white/70">
        {address.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
      >
        Contact us
        <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
