import { buildMetadata } from "@/lib/seo";
import MediaHero from "@/components/sections/MediaHero";
import WhyFeatures from "@/components/sections/WhyFeatures";
import OurApproach from "@/components/sections/OurApproach";
import EnquirySection from "@/components/sections/EnquirySection";
import OfficeLocations from "@/components/sections/OfficeLocations";
import { hero } from "@/data/why-us";

export const metadata = buildMetadata({
  title: "Why Us",
  description:
    "Customers choose GoSky Logistics for reliable, transparent and personalized air cargo — combining professional logistics management with responsive service.",
  path: "/why-us",
});

export default function WhyUsPage() {
  return (
    <>
      <MediaHero {...hero} />
      <WhyFeatures />
      <OurApproach />
      <EnquirySection />
      <OfficeLocations />
    </>
  );
}
