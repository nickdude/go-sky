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
];

// The highlighted call-to-action button in the header.
export const headerCta = { label: "Contact Us", href: "/contact" };

export const footerNav = [
  {
    title: "Who we are",
    links: [
      { label: "About us", href: "/about" },
      { label: "Why choose us", href: "/why-us" },
      { label: "Our values", href: "/about#values" },
      { label: "Our history", href: "/about#history" },
      { label: "Our products", href: "/solutions" },
      { label: "Our businesses", href: "/about#businesses" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Investor center", href: "/investors" },
      { label: "IndiGo Air", href: "/network" },
      { label: "Privacy help center", href: "/privacy" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "CargoWise",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Partners", href: "/partner" },
      { label: "Support", href: "/support" },
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
  { path: "/partner", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
];
