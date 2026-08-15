"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { ArrowRightIcon } from "@/components/common/icons";
import { whoWeAre } from "@/data/home";
import { cn } from "@/lib/utils";

/**
 * "Who we are" section with a vertical tab selector.
 * Selecting a tab swaps the descriptive copy on the right. Implemented with the
 * WAI-ARIA tabs pattern for keyboard/screen-reader support.
 */
export default function WhoWeAre() {
  const { tabs, cta } = whoWeAre;
  const [active, setActive] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section className="bg-brand-bg py-16 lg:py-24" aria-labelledby="who-we-are-heading">
      <Container className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        <h2 id="who-we-are-heading" className="sr-only">
          Who we are
        </h2>

        {/* Tab list */}
        <div
          role="tablist"
          aria-label="About GoSky"
          className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
        >
          {tabs.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-md px-2 py-2 text-left text-lg font-medium transition-colors lg:text-xl",
                  selected
                    ? "text-brand-blue"
                    : "text-brand-muted/70 hover:text-brand-ink"
                )}
              >
                {tab.label}
                {selected && (
                  <ArrowRightIcon
                    className="hidden h-5 w-5 lg:inline"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <div
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
        >
          <p className="max-w-3xl text-2xl font-normal leading-snug text-brand-ink sm:text-3xl">
            {activeTab.body}
          </p>
          <div className="mt-8">
            <Button href={cta.href} withArrow>
              {cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
