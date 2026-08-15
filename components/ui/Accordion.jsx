"use client";

import { useState } from "react";
import { iconMap, ChevronDownIcon } from "@/components/common/icons";
import { cn } from "@/lib/utils";

/**
 * Vertically stacked, single-open accordion. Each item shows a leading icon and
 * title; the active item reveals its body. Used for the About page's vision /
 * history / purpose / values pillars.
 *
 * @param {Object} props
 * @param {{id:string,icon?:string,title:string,body:string}[]} props.items
 * @param {string} [props.defaultOpenId] - Item open on first render.
 */
export default function Accordion({ items, defaultOpenId }) {
  const [open, setOpen] = useState(defaultOpenId ?? items[0]?.id);

  return (
    <div className="divide-y divide-brand-border border-y border-brand-border">
      {items.map((item) => {
        const isOpen = item.id === open;
        const Icon = item.icon ? iconMap[item.icon] : null;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className={cn(
                  "flex w-full items-center gap-3 py-4 text-left transition-colors",
                  isOpen ? "text-brand-purple" : "text-brand-ink hover:text-brand-purple"
                )}
              >
                {Icon && <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />}
                <span className="flex-1 text-base font-semibold">{item.title}</span>
                <ChevronDownIcon
                  className={cn(
                    "h-5 w-5 shrink-0 text-brand-muted transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <p className="pb-5 pl-8 pr-4 text-sm leading-relaxed text-brand-muted">
                {item.body}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
