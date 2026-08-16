/**
 * Content for the "Enquire with Us" experience.
 *
 * The enquiry form and the office-locations band appear on both the Contact page
 * and the Why Us page, so their copy and options live here and are shared by the
 * EnquiryForm and OfficeLocations section components.
 */

// Formspree endpoint the enquiry form posts to.
export const formEndpoint = "https://formspree.io/f/xeajlrjd";

export const enquiry = {
  eyebrow: "Contact Us",
  title: "Enquire with Us",
  description:
    "We are looking forward to hearing from you. Simply fill out the form, and we will get back to you as soon as possible.",
  helpsWithTitle: "We are here to help with:",
  helpsWith: [
    "Customer service requests",
    "Air Cargo enquiry",
    "Interest in our services and rates",
    "Expanding network across India and the world",
  ],
  illustration: {
    src: "/images/shared/enquiry-illustration.png",
    alt: "Isometric illustration of a cargo aircraft beside an airport control tower",
    width: 1577,
    height: 997,
  },
};

// Options for the two <select> fields. The first entry is the disabled placeholder.
export const supportTypes = [
  "General enquiry",
  "Air cargo booking",
  "Rates and pricing",
  "Become a partner",
  "Careers",
  "Other",
];

export const countries = [
  "India",
  "United States",
  "United Arab Emirates",
  "United Kingdom",
  "Singapore",
  "Australia",
  "Spain",
  "Other",
];

export const marketingConsentLabel =
  "I allow Gosky to send me marketing communications";

// Fine print shown beneath the submit button.
export const formDisclaimers = [
  "By clicking the “Submit” button below, you allow Gosky to process the personal data you have provided to fulfil your request. To obtain more information on how Gosky processes personal data and its commitment to ensure privacy, please read the privacy notice.",
  "You additionally allow Gosky to contact you with marketing and product information by clicking the checkbox below. These communications include newsletters, exclusive invitations to events, promotions, offers, product updates and logistics content. You may unsubscribe at any time by using the “unsubscribe” link found at the bottom of each communication.",
];

// Office locations shown in the purple band. Currently a single hub repeated to
// mirror the design; add entries here as new offices come online.
export const offices = Array.from({ length: 4 }, (_, i) => ({
  id: `delhi-${i + 1}`,
  city: "Delhi",
  address: [
    "Indira Gandhi Int'l Airport,",
    "Air India GSD Complex,",
    "Delhi Cargo Terminal, New",
    "Delhi, Delhi 110037",
  ],
  href: "/contact",
  image: {
    src: "/images/shared/office-delhi.png",
    alt: "Delhi city skyline near the GoSky cargo hub",
    width: 1024,
    height: 683,
  },
}));
