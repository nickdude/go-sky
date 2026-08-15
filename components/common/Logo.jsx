import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

/**
 * Brand logo. Links to the home page and exposes an accessible name.
 *
 * @param {Object} props
 * @param {number} [props.width=132]
 * @param {number} [props.height=44]
 * @param {string} [props.className]
 * @param {boolean} [props.priority=false] - Preload (use in the header).
 */
export default function Logo({ width = 132, height = 44, className, priority = false }) {
  return (
    <Link
      href="/"
      className={className}
      aria-label={`${siteConfig.name} — home`}
    >
      <Image
        src="/images/brand/gosky-logo.png"
        alt={`${siteConfig.name} logo`}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto"
        style={{ height: height, width: "auto" }}
      />
    </Link>
  );
}
