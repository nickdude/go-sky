import { cn } from "@/lib/utils";

/**
 * Generic surface card: white background, rounded corners and a soft border.
 * Used as the base for testimonial cards and other boxed content.
 *
 * @param {Object} props
 * @param {React.ElementType} [props.as="div"]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Card({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-brand-border bg-white p-6 sm:p-8",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
