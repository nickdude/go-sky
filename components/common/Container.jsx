import { cn } from "@/lib/utils";

/**
 * Constrains content to the site's max width and applies consistent horizontal
 * padding across breakpoints. Used by every section so gutters stay in sync.
 *
 * @param {Object} props
 * @param {React.ElementType} [props.as="div"] - Element/tag to render.
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
