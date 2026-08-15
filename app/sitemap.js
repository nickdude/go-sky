import { siteConfig } from "@/config/site";
import { sitemapRoutes } from "@/config/navigation";

/**
 * Generates sitemap.xml from the central route list in config/navigation.js.
 * Add a route there and it appears here automatically.
 *
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
  const lastModified = new Date();

  return sitemapRoutes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
