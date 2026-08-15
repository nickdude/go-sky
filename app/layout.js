import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

/*
 * Poppins mirrors the geometric sans used throughout the Figma design (see the
 * assumptions note in docs/design-system.md). Loaded via next/font for
 * self-hosting, automatic subsetting and zero layout shift.
 */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Root/default metadata. Individual pages override title/description via the
// buildMetadata() helper in lib/seo.js.
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
};

export const viewport = {
  themeColor: "#4a2f7e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      {/*
       * suppressHydrationWarning: some browser extensions (e.g. ColorZilla adds
       * `cz-shortcut-listen`) inject attributes onto <body> before React
       * hydrates, causing a benign server/client attribute mismatch. This flag
       * silences the warning for the body element only — one level deep — so
       * genuine hydration issues in child components are still surfaced.
       */}
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-purple focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <div id="top" />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
