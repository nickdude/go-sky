/**
 * Renders a single partner/airline logo at a shared height with automatic width,
 * using the logo's real dimensions so every logo lines up at the same height
 * without distortion.
 *
 * A plain <img> is used intentionally: the logos live in a continuously
 * translating marquee, and next/image's lazy loader (IntersectionObserver) is
 * unreliable there — it leaves scrolling logos with an empty src, so most render
 * blank. The logos are small static PNGs, so optimization adds little here.
 *
 * @param {Object} props
 * @param {string} props.name   - Company name (used for alt text).
 * @param {string} props.logo   - Image path.
 * @param {number} props.width  - Logo's real pixel width.
 * @param {number} props.height - Logo's real pixel height.
 */
export default function PartnerLogo({ name, logo, width, height }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={name}
      width={width}
      height={height}
      loading="eager"
      decoding="async"
      className="h-9 w-auto object-contain sm:h-10"
    />
  );
}
