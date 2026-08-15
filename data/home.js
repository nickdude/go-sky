/**
 * Content for the Home page.
 *
 * All copy, images and repeatable lists live here so the section components stay
 * purely presentational and content can be edited without touching JSX.
 */

export const hero = {
  eyebrow: "Your Trusted Logistics Partner",
  // The heading is coloured in parts: `titleBefore`/`titleAfter` use the navy
  // ink, `highlight` is blue and `titleMiddle` is the brand purple.
  titleBefore: "India's Smart ",
  highlight: "Air",
  titleMiddle: " Cargo & Logistics",
  titleAfter: " Network",
  description:
    "Connecting business, courier companies and airline cargo network with faster, smarter and technology driven logistics solution across India.",
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: { label: "Become a Partner", href: "/partner" },
  image: {
    src: "/images/hero-graphic.png",
    alt: "Air cargo shipment with partner airline discount rates",
    width: 1672,
    height: 941,
  },
};

// Highlight strip shown at the bottom of the hero.
export const stats = [
  { label: "33+ Operational Offices", icon: "office" },
  { label: "24x7 Support", icon: "support" },
  { label: "Easy Shipment Tracking", icon: "tracking" },
  { label: "Pan India Network", icon: "network" },
];

export const partners = [
  { name: "Air India Cargo", logo: "/images/logos/air-india-cargo.png" },
  { name: "SpiceXpress", logo: "/images/logos/spicexpress.png" },
  { name: "Akasa Air", logo: "/images/logos/akasa-air.png" },
  { name: "IndiGo CarGo", logo: "/images/logos/indigo-cargo.png" },
  { name: "FedEx", logo: "/images/logos/fedex.png" },
  { name: "Blue Dart Aviation", logo: "/images/logos/blue-dart.png" },
  { name: "Alliance Air", logo: "/images/logos/alliance-air.png" },
  { name: "Pradhaan Air Express", logo: "/images/logos/pradhaan-air.png" },
  { name: "Etihad Cargo", logo: "/images/logos/etihad-cargo.png" },
  { name: "Qatar Airways Cargo", logo: "/images/logos/qatar-cargo.png" },
];

export const whoWeAre = {
  // Tabbed selector on the left. The active tab drives the copy on the right.
  tabs: [
    {
      id: "who-we-are",
      label: "Who we are",
      body: "Gosky Logistics Pvt. Ltd. delivers reliable, fast, and cost-effective air cargo solutions across India. We help businesses move shipments safely, efficiently, and on time.",
    },
    {
      id: "our-commitments",
      label: "Our commitments",
      body: "We commit to transparent pricing, dependable timelines and safe handling on every shipment — backed by 24x7 support and real-time tracking.",
    },
    {
      id: "our-values",
      label: "Our values",
      body: "Customer-first thinking, integrity and continuous innovation guide how we build our technology-driven logistics network.",
    },
    {
      id: "what-we-do",
      label: "What we do",
      body: "We connect businesses and courier partners with leading airlines to move air cargo faster, from first-mile pickup to destination-hub dispatch.",
    },
    {
      id: "our-businesses",
      label: "Our businesses",
      body: "From express air freight to partner solutions and last-mile coordination, our businesses span the full logistics chain across India and beyond.",
    },
  ],
  cta: { label: "About Us", href: "/about" },
};

export const buildingFuture = {
  eyebrow: "Streamlined Fulfillment",
  title: "Building India's Connected Logistics Future",
  description:
    "We power businesses and courier companies with faster, smarter and reliable air cargo solutions through leading airlines across india and the world.",
  points: [
    "Customer first approach",
    "Technology driven operations",
    "Safe, on time and transparent deliveries",
    "Expanding network across India and the world",
  ],
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: { label: "Become a Partner", href: "/partner" },
  image: {
    src: "/images/building-loading.png",
    alt: "Cargo being loaded onto a Qatar Airways freight aircraft",
    width: 900,
    height: 592,
  },
};

export const howItWorks = {
  eyebrow: "Streamlined Fulfillment",
  title: "How it works",
  subtitle: "From your business or store to your customer's door",
  steps: [
    {
      id: "pickup",
      title: "Pickup",
      description: "We will pickup shipment from courier partners and businesses.",
      image: "/images/how-it-works/pickup.png",
    },
    {
      id: "airline-cargo",
      title: "Airline Cargo",
      description: "We connect with leading airlines to move your cargo faster",
      image: "/images/how-it-works/airline-cargo.png",
    },
    {
      id: "destination-hub",
      title: "Destination Hub",
      description: "Cargo reaches destination hub for quick processing and dispatch.",
      image: "/images/how-it-works/destination-hub.png",
    },
  ],
};

export const ctaBanner = {
  title: "Ready to Move Cargo Faster?",
  description:
    "Partner with GoSky and experience the power of India's smart air cargo network across world.",
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: { label: "Become a Partner", href: "/partner" },
  image: {
    src: "/images/cta-graphic.png",
    alt: "GoSky delivery partner loading cargo boxes beside an Akasa Air aircraft",
    width: 1672,
    height: 941,
  },
};

export const network = {
  eyebrow: "Streamlined Fulfillment",
  title: "Our network across the globe",
  image: {
    src: "/images/world-map.png",
    alt: "World map showing GoSky's operational hubs across the globe",
    width: 2672,
    height: 1262,
  },
};

export const testimonials = {
  eyebrow: "Partner Testimonial",
  title: "What our Partners Say",
  items: [
    {
      id: 1,
      rating: 4.5,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      author: "Anis S.",
      role: "Head of Operations, Indigo",
      logo: "/images/logos/akasa-air.png",
      logoAlt: "Akasa Air",
    },
    {
      id: 2,
      rating: 4.5,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      author: "Anis S.",
      role: "Head of Operations, Indigo",
      logo: "/images/logos/indigo-cargo.png",
      logoAlt: "IndiGo CarGo",
    },
    {
      id: 3,
      rating: 4.5,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      author: "Anis S.",
      role: "Head of Operations, Indigo",
      logo: "/images/logos/blue-dart.png",
      logoAlt: "Blue Dart Aviation",
    },
  ],
};
