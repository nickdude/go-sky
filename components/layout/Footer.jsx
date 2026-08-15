import Link from "next/link";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import Button from "@/components/common/Button";
import { iconMap } from "@/components/common/icons";
import { siteConfig } from "@/config/site";
import { footerNav, legalNav } from "@/config/navigation";

/**
 * Site footer: brand, grouped link columns, account CTA, and a bottom bar with
 * legal links and social icons. Structure is driven by config/navigation.js.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-lavender text-brand-ink">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_repeat(3,1fr)_auto]">
          <div>
            <Logo height={44} />
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="mb-4 text-sm font-semibold text-brand-blue">
                {group.title}
              </h2>
              <ul className="space-y-3">
                {group.links.map((link) => (
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
          ))}

          <div className="lg:justify-self-end">
            <Button href="/account" size="lg">
              My Account
            </Button>
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
