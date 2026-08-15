import Image from "next/image";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import EnquiryForm from "@/components/sections/EnquiryForm";
import { CheckCircleIcon } from "@/components/common/icons";
import { enquiry } from "@/data/contact";

/**
 * "Enquire with Us" block: an intro column (heading, the topics we help with and
 * a supporting illustration) beside the enquiry form. Shared by the Contact and
 * Why Us pages.
 *
 * @param {Object} props
 * @param {"h1"|"h2"} [props.headingAs="h2"] - Use "h1" on the Contact page where
 *   this block is the page's primary heading.
 */
export default function EnquirySection({ headingAs = "h2" }) {
  const { eyebrow, title, description, helpsWithTitle, helpsWith, illustration } =
    enquiry;

  return (
    <section className="bg-brand-bg py-16 lg:py-24" aria-labelledby="enquiry-heading">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Intro */}
        <div>
          <SectionHeading
            as={headingAs}
            eyebrow={eyebrow}
            title={title}
            titleClassName="text-brand-ink"
          />
          <p className="mt-4 max-w-md text-base leading-relaxed text-brand-muted">
            {description}
          </p>

          <p className="mt-8 text-sm font-medium text-brand-ink">
            {helpsWithTitle}
          </p>
          <ul className="mt-4 space-y-3">
            {helpsWith.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircleIcon
                  className="h-5 w-5 shrink-0 text-brand-blue"
                  aria-hidden="true"
                />
                <span className="text-sm text-brand-muted">{item}</span>
              </li>
            ))}
          </ul>

          <div className="relative mt-10 hidden aspect-[1577/997] w-full max-w-md lg:block">
            <Image
              src={illustration.src}
              alt={illustration.alt}
              fill
              sizes="(max-width: 1024px) 0px, 400px"
              className="object-contain object-left-bottom"
            />
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 id="enquiry-heading" className="sr-only">
            Enquiry form
          </h2>
          <EnquiryForm />
        </div>
      </Container>
    </section>
  );
}
