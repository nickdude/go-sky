import Container from "@/components/common/Container";
import { iconMap } from "@/components/common/icons";
import { stats } from "@/data/home";

/**
 * Dark highlight strip shown directly beneath the hero, listing key trust stats.
 * Data-driven from `data/home.js`.
 */
export default function StatsBar() {
  return (
    <div className="bg-brand-purple text-white">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 py-5 md:grid-cols-4">
          {stats.map(({ label, icon }) => {
            const Icon = iconMap[icon];
            return (
              <li
                key={label}
                className="flex items-center justify-center gap-3 text-center md:justify-start md:text-left"
              >
                {Icon && (
                  <Icon className="h-6 w-6 shrink-0 text-white/90" aria-hidden="true" />
                )}
                <span className="text-sm font-medium">{label}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
