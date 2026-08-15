import Container from "@/components/common/Container";
import { iconMap } from "@/components/common/icons";
import { statement } from "@/data/about";

/**
 * "Why GoSky exists" — a dark purple statement band: a large mission statement on
 * the left, a supporting paragraph and a values badge on the right.
 */
export default function AboutStatement() {
  const { eyebrow, title, body, badge } = statement;
  const BadgeIcon = iconMap[badge.icon];

  return (
    <section className="bg-brand-purple py-16 text-white lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {eyebrow}
          </p>
          <p className="text-2xl font-semibold leading-snug sm:text-3xl lg:text-[2.1rem]">
            {title}
          </p>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <p className="max-w-md text-base leading-relaxed text-white/80">
            {body}
          </p>
          <div className="inline-flex items-center gap-3 self-start rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
            {BadgeIcon && (
              <BadgeIcon className="h-5 w-5 shrink-0 text-white" aria-hidden="true" />
            )}
            <span className="text-xs font-medium text-white/90">{badge.text}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
