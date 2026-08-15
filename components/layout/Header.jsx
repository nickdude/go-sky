"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import Button from "@/components/common/Button";
import { MenuIcon, CloseIcon } from "@/components/common/icons";
import { mainNav, headerCta } from "@/config/navigation";
import { cn } from "@/lib/utils";

/**
 * Sticky site header with responsive navigation.
 * The mobile menu is toggled client-side; the active route is highlighted.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo priority height={40} />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-purple",
                    isActive(item.href) ? "text-brand-purple" : "text-brand-muted"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={headerCta.href} withArrow>
            {headerCta.label}
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </Container>

      {/* Mobile navigation panel */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary mobile"
          className="border-t border-brand-border bg-white lg:hidden"
        >
          <Container as="ul" className="flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-base font-medium",
                    isActive(item.href)
                      ? "bg-brand-lavender text-brand-purple"
                      : "text-brand-muted hover:bg-brand-lavender/60"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-3">
              <Button
                href={headerCta.href}
                withArrow
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {headerCta.label}
              </Button>
            </li>
          </Container>
        </nav>
      )}
    </header>
  );
}
