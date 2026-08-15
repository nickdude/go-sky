import { siteConfig } from "@/config/site";

/**
 * Build a Next.js `metadata` object for a page.
 *
 * Every page should export its metadata via this helper so that titles, Open
 * Graph, Twitter cards, canonical URLs and robots directives are consistent and
 * only the page-specific bits need to be provided.
 *
 * @param {Object} options
 * @param {string} [options.title]        Page title (without the brand suffix).
 * @param {string} [options.description]  Meta description.
 * @param {string[]} [options.keywords]   Additional keywords for this page.
 * @param {string} [options.path]         Route path, e.g. "/about" (for canonical/OG url).
 * @param {string} [options.ogImage]      Override the default social image.
 * @param {boolean} [options.noIndex]     Set true to hide the page from search engines.
 * @returns {import('next').Metadata}
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  keywords = [],
  path = "/",
  ogImage = siteConfig.ogImage,
  noIndex = false,
} = {}) {
  const url = new URL(path, siteConfig.url).toString();
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;

  return {
    title: resolvedTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: resolvedTitle,
      description,
      url,
      locale: siteConfig.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: resolvedTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      site: siteConfig.twitter.site,
      creator: siteConfig.twitter.handle,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export default buildMetadata;
