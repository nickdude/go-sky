/**
 * Central site configuration.
 *
 * Everything that is global to the whole website (brand name, base URL, default
 * SEO copy, social handles, contact details) lives here so it can be changed in
 * one place and consumed everywhere (layout, SEO helper, sitemap, robots, footer).
 */

// Read the deployment URL from the environment so it is never hardcoded across
// the app. Falls back to a sensible default for local development.
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.gosky.example"
).replace(/\/$/, "");

export const siteConfig = {
  name: "GoSky",
  legalName: "GoSky Logistics Pvt. Ltd.",
  // Short brand tagline used in the <title> template.
  tagline: "Smart Air Cargo & Logistics Network",
  url: SITE_URL,
  // Default meta description used as a fallback for any page that does not set one.
  description:
    "GoSky Logistics connects businesses, courier companies and airline cargo networks with faster, smarter and technology-driven logistics solutions across India and the world.",
  // Short blurb used in the footer's "About Us" column.
  blurb:
    "Gosky Logistics Pvt. Ltd. is a growing logistics and transportation company committed to providing reliable, efficient and customer-focused logistics solutions across worldwide.",
  keywords: [
    "air cargo",
    "logistics",
    "freight forwarding",
    "shipping India",
    "airline cargo",
    "supply chain",
    "GoSky",
  ],
  locale: "en_IN",
  // Default social sharing image (place a real 1200x630 asset at this path).
  ogImage: "/images/og-image.png",
  twitter: {
    handle: "@gosky",
    site: "@gosky",
  },
  contact: {
    email: "connect@gosky.com",
    phone: "+91 737 839 7539",
    // Address split into display lines for the footer.
    address: [
      "Plot No. D65/30, Near Ganapati",
      "Temple, Kharghar, Sector 12, Navi",
      "Mumbai- 410210",
    ],
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com/", icon: "twitter" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  ],
};

export default siteConfig;
