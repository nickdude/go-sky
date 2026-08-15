import { buildMetadata } from "@/lib/seo";
import EnquirySection from "@/components/sections/EnquirySection";
import OfficeLocations from "@/components/sections/OfficeLocations";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with GoSky Logistics. Fill out the enquiry form for air cargo bookings, rates, partnerships and support — we'll get back to you as soon as possible.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <EnquirySection headingAs="h1" />
      <OfficeLocations />
    </>
  );
}
