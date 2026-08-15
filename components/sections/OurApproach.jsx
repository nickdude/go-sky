"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import { iconMap } from "@/components/common/icons";
import { cn } from "@/lib/utils";
import { approach } from "@/data/why-us";

/**
 * "Our approach" — a vertical, selectable list of the steps GoSky follows for
 * every shipment. The active step reveals a short description; a supporting
 * photograph sits alongside.
 */
export default function OurApproach() {
  const { title, steps, image } = approach;
  const [active, setActive] = useState(steps[0].id);

  return (
    <section className="bg-brand-bg py-16 lg:py-24" aria-labelledby="approach-heading">
      <Container>
        <h2
          id="approach-heading"
          className="text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl"
        >
          {title}
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ul>
            {steps.map((step) => {
              const selected = step.id === active;
              const Icon = iconMap[step.icon];
              return (
                <li key={step.id} className="border-l-2 border-brand-border">
                  <button
                    type="button"
                    aria-expanded={selected}
                    onClick={() => setActive(step.id)}
                    className={cn(
                      "-ml-0.5 flex w-full items-center gap-3 border-l-2 py-3 pl-5 text-left transition-colors",
                      selected
                        ? "border-brand-purple text-brand-purple"
                        : "border-transparent text-brand-ink hover:text-brand-purple"
                    )}
                  >
                    {Icon && <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />}
                    <span className="text-lg font-semibold">{step.title}</span>
                  </button>
                  {selected && (
                    <p className="-ml-0.5 border-l-2 border-brand-purple pb-4 pl-[3.25rem] pr-4 text-sm leading-relaxed text-brand-muted">
                      {step.body}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="relative min-h-[240px] overflow-hidden rounded-2xl lg:min-h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
