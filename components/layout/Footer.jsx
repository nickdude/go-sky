import Link from "next/link";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import { iconMap } from "@/components/common/icons";
import { siteConfig } from "@/config/site";
import { footerNav, legalNav } from "@/config/navigation";

/**
 * Site footer: brand blurb, contact details, main links and social icons across
 * four columns, followed by a bottom bar with copyright, legal links, social
 * icons and a "Back to top" anchor. Content is driven by config/site.js and
 * config/navigation.js.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const mainLinks = footerNav[0];
  const telHref = `tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`;

  return (
    <footer className="bg-brand-lavender text-brand-ink">
      <Container className="py-14">
        <Logo height={48} />

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* About */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-brand-purple">
              About Us
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-brand-muted">
              {siteConfig.blurb}
            </p>
            <Link
              href="/about"
              className="mt-5 inline-block text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
            >
              Learn More
            </Link>
          </div>

          {/* Contacts */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-brand-purple">
              Contacts
            </h2>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li>
                <a
                  href={telHref}
                  className="text-brand-ink underline underline-offset-4 transition-colors hover:text-brand-purple"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-brand-ink underline underline-offset-4 transition-colors hover:text-brand-purple"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <address className="not-italic leading-relaxed">
                  {siteConfig.contact.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            </ul>
          </div>

          {/* Main links */}
          <nav aria-label={mainLinks.title}>
            <h2 className="mb-4 text-sm font-semibold text-brand-purple">
              {mainLinks.title}
            </h2>
            <ul className="space-y-3">
              {mainLinks.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted transition-colors hover:text-brand-purple"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-brand-purple">
              Social
            </h2>
            <ul className="flex flex-wrap gap-3">
              {siteConfig.social.map(({ label, href, icon }) => {
                const Icon = iconMap[icon];
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-purple text-white transition-colors hover:bg-brand-purple-dark"
                    >
                      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-brand-purple/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <p className="text-sm text-brand-muted">
              © {year} {siteConfig.name}
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalNav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted transition-colors hover:text-brand-purple"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-5">
            <ul className="flex items-center gap-5">
              {siteConfig.social.map(({ label, href, icon }) => {
                const Icon = iconMap[icon];
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-brand-purple transition-colors hover:text-brand-blue"
                    >
                      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="#top"
              className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-purple"
            >
              Back to top
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
