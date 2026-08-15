import { cn } from "@/lib/utils";

/**
 * Standard section header: a small uppercase eyebrow, a heading and an optional
 * subtitle. Used by most sections so eyebrow/heading styling stays consistent.
 *
 * @param {Object} props
 * @param {string} [props.eyebrow]
 * @param {React.ReactNode} props.title
 * @param {string} [props.subtitle]
 * @param {"h1"|"h2"|"h3"} [props.as="h2"] - Heading level for correct hierarchy.
 * @param {"left"|"center"} [props.align="left"]
 * @param {string} [props.className]
 * @param {string} [props.titleClassName]
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: Heading = "h2",
  align = "left",
  className,
  titleClassName,
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl",
          titleClassName
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-3 max-w-xl text-base text-brand-muted">{subtitle}</p>
      )}
    </div>
  );
}
