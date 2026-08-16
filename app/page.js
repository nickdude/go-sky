import { buildMetadata } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/layout/StatsBar";
import Partners from "@/components/sections/Partners";
import WhoWeAre from "@/components/sections/WhoWeAre";
import BuildingFuture from "@/components/sections/BuildingFuture";
import HowItWorks from "@/components/sections/HowItWorks";
import CtaBanner from "@/components/sections/CtaBanner";
import Services from "@/components/sections/Services";
import NetworkMap from "@/components/sections/NetworkMap";
import Testimonials from "@/components/sections/Testimonials";

// Page-specific SEO. Every page follows this same pattern (see lib/seo.js).
export const metadata = buildMetadata({
  title: "Home",
  description:
    "GoSky Logistics connects businesses, courier companies and airline cargo networks with faster, smarter and technology-driven air cargo solutions across India.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Partners />
      <WhoWeAre />
      <BuildingFuture />
      <HowItWorks />
      <CtaBanner />
      <Services />
      <NetworkMap />
      <Testimonials />
    </>
  );
}
