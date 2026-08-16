import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/common/icons";

/**
 * Polymorphic button/link used across the site.
 *
 * - Renders a Next.js <Link> when `href` is provided, otherwise a <button>.
 * - `variant` maps to the design system's button styles, including light
 *   variants for use on dark (purple) backgrounds.
 *
 * @param {Object} props
 * @param {"primary"|"outline"|"light"|"outlineLight"} [props.variant="primary"]
 * @param {"md"|"lg"} [props.size="md"]
 * @param {string} [props.href]
 * @param {boolean} [props.withArrow=false] - Show a trailing arrow icon.
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
const VARIANTS = {
  primary:
    "bg-brand-purple text-white hover:bg-brand-purple-dark focus-visible:outline-brand-purple",
  outline:
    "bg-transparent text-brand-purple ring-1 ring-inset ring-brand-purple/40 hover:bg-brand-purple hover:text-white focus-visible:outline-brand-purple",
  light:
    "bg-white text-brand-purple hover:bg-brand-lavender focus-visible:outline-white",
  outlineLight:
    "bg-transparent text-white ring-1 ring-inset ring-white/70 hover:bg-white hover:text-brand-purple focus-visible:outline-white",
};

const SIZES = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  className,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    VARIANTS[variant],
    SIZES[size],
    className
  );

  const content = (
    <>
      {children}
      {withArrow && <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
