import { buildMetadata } from "@/lib/seo";
import MediaHero from "@/components/sections/MediaHero";
import AboutStatement from "@/components/sections/AboutStatement";
import OurStory from "@/components/sections/OurStory";
import LeadershipTeam from "@/components/sections/LeadershipTeam";
import GlobePresence from "@/components/sections/GlobePresence";
import { hero } from "@/data/about";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "GoSky Logistics is a growing air cargo and transportation company committed to reliable, efficient and customer-focused logistics solutions across India and the world.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <MediaHero {...hero} />
      <AboutStatement />
      <OurStory />
      <LeadershipTeam />
      <GlobePresence />
    </>
  );
}
