"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";
import { iconMap } from "@/components/common/icons";
import { cn } from "@/lib/utils";
import { team } from "@/data/about";

/**
 * "Meet the team" — a centred heading, a segmented control to switch between team
 * groups (Directors, Leadership, …) and the active group's members. Segments are
 * data-driven from data/about.js, so new groups appear here automatically.
 */
export default function LeadershipTeam() {
  const { eyebrow, title, segments } = team;
  const [active, setActive] = useState(segments[0].id);
  const activeSegment = segments.find((s) => s.id === active) ?? segments[0];

  return (
    <section className="bg-brand-bg py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />

        {/* Segmented control */}
        <div className="mt-8 w-full overflow-x-auto scrollbar-none">
          <div
            role="tablist"
            aria-label="Team groups"
            className="mx-auto flex w-max min-w-full justify-center gap-1 rounded-full bg-brand-lavender p-1"
          >
            {segments.map((segment) => {
              const selected = segment.id === active;
              const Icon = segment.icon ? iconMap[segment.icon] : null;
              return (
                <button
                  key={segment.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(segment.id)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3 py-2.5 text-[13px] font-medium transition-colors sm:px-5 sm:text-sm",
                    selected
                      ? "bg-white text-brand-ink shadow-sm"
                      : "text-brand-muted hover:text-brand-ink"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                  {segment.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active group's members */}
        <ul className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8">
          {activeSegment.members.map((member) => (
            <li key={member.name} className="w-36 sm:w-44 lg:w-52">
              <TeamCard
                name={member.name}
                role={member.role}
                image={member.image}
                fit={member.fit || "cover"}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
