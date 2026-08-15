import { siteConfig } from "@/config/site";

/**
 * Generates robots.txt. Points crawlers at the sitemap and allows the whole
 * site by default.
 *
 * @returns {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
    host: siteConfig.url,
  };
}
