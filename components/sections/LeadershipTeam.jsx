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
        <div className="mt-8 flex justify-center">
          <div
            role="tablist"
            aria-label="Team groups"
            className="inline-flex gap-1 rounded-full bg-brand-lavender p-1"
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
                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
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
              <TeamCard name={member.name} role={member.role} image={member.image} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
