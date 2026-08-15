import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";
import { team } from "@/data/about";

/**
 * "Our Leadership Team" — a centred heading above a grid of team portraits.
 */
export default function LeadershipTeam() {
  const { eyebrow, title, members } = team;

  return (
    <section className="bg-brand-bg py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        <ul className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {members.map((member) => (
            <li key={member.name}>
              <TeamCard
                name={member.name}
                role={member.role}
                image={member.image}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
