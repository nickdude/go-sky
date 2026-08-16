import Link from "next/link";
import Container from "@/components/common/Container";
import { iconMap, ArrowRightIcon } from "@/components/common/icons";
import { services } from "@/data/home";

/**
 * "Our Services" — a dark purple band with a grid of service cards. Each card
 * shows an icon, title and short description and links onward.
 */
export default function Services() {
  const { eyebrow, title, items } = services;

  return (
    <section className="bg-brand-purple py-16 text-white lg:py-24">
      <Container>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
          {eyebrow}
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
          {title}
        </h2>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="group relative flex h-full items-center gap-4 rounded-xl border border-white/15 bg-white/[0.04] p-6 pr-14 transition-colors hover:border-white/30 hover:bg-white/[0.08]"
                >
                  {Icon && (
                    <Icon
                      className="h-9 w-9 shrink-0 text-white/90"
                      aria-hidden="true"
                    />
                  )}
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRightIcon
                    className="absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 text-white/80 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
