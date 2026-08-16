import { siteConfig } from "@/config/site";
import { sitemapRoutes } from "@/config/navigation";
import { posts } from "@/data/blog";

/**
 * Generates sitemap.xml from the central route list in config/navigation.js plus
 * every blog post. Add a route there (or a post in data/blog.js) and it appears
 * here automatically.
 *
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
  const lastModified = new Date();

  const routes = sitemapRoutes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogPosts = posts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteConfig.url).toString(),
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
}
