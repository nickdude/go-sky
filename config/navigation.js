/**
 * Navigation configuration.
 *
 * `mainNav`   — primary header links.
 * `footerNav` — grouped footer link columns.
 * `legalNav`  — small print links in the footer bottom bar.
 *
 * Keeping routes here (rather than inside components) means adding a page to the
 * navigation is a one-line change and stays in sync with the sitemap.
 */

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Blog", href: "/blog" },
];

// The highlighted call-to-action button in the header.
export const headerCta = { label: "Contact Us", href: "/contact" };

// The single "Main Links" column shown in the footer.
export const footerNav = [
  {
    title: "Main Links",
    links: [
      { label: "Why GoSky?", href: "/why-us" },
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
      { label: "Become a Partner", href: "/contact" },
    ],
  },
];

export const legalNav = [
  { label: "Sitemap", href: "/sitemap.xml" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy and Data Protection Notice", href: "/privacy" },
  { label: "Cookie Settings", href: "/cookies" },
];

// Routes that should appear in sitemap.xml. `priority` and `changeFrequency`
// are optional hints for crawlers.
export const sitemapRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/why-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions", priority: 0.8, changeFrequency: "monthly" },
  { path: "/network", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
];
