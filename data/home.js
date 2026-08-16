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
  secondaryCta: { label: "Become a Partner", href: "/contact" },
  image: {
    src: "/images/hero-plane.jpg",
    alt: "Air India Cargo freighter with palletised cargo on the tarmac",
    width: 1120,
    height: 724,
  },
};

// Highlight strip shown at the bottom of the hero.
export const stats = [
  { label: "33+ Operational Offices", icon: "office" },
  { label: "24x7 Support", icon: "support" },
  { label: "Easy Shipment Tracking", icon: "tracking" },
  { label: "Pan-India + Global", icon: "network" },
];

// `width`/`height` are each logo's real pixel dimensions so they can be rendered
// at a shared height with the correct aspect ratio (no distortion).
export const partners = [
  { name: "Air India Cargo", logo: "/images/logos/air-india-cargo.png", width: 335, height: 146 },
  { name: "SpiceXpress", logo: "/images/logos/spicexpress.png", width: 334, height: 241 },
  { name: "Akasa Air", logo: "/images/logos/akasa-air.png", width: 3840, height: 644 },
  { name: "IndiGo CarGo", logo: "/images/logos/indigo-cargo.png", width: 696, height: 152 },
  { name: "FedEx", logo: "/images/logos/fedex.png", width: 500, height: 218 },
  { name: "Blue Dart Aviation", logo: "/images/logos/blue-dart.png", width: 680, height: 451 },
  { name: "Alliance Air", logo: "/images/logos/alliance-air.png", width: 1081, height: 265 },
  { name: "Pradhaan Air Express", logo: "/images/logos/pradhaan-air.png", width: 500, height: 210 },
  { name: "Etihad Cargo", logo: "/images/logos/etihad-cargo.png", width: 900, height: 500 },
  { name: "Qatar Airways Cargo", logo: "/images/logos/qatar-cargo.png", width: 1500, height: 785 },
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
  secondaryCta: { label: "Become a Partner", href: "/contact" },
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
  secondaryCta: { label: "Become a Partner", href: "/contact" },
  image: {
    src: "/images/cta-graphic.png",
    alt: "GoSky delivery partner loading cargo boxes beside an Akasa Air aircraft",
    width: 1672,
    height: 941,
  },
};

export const services = {
  eyebrow: "Our Services",
  title: "Every service for your national and international cargo",
  items: [
    {
      icon: "plane",
      title: "Air Cargo Solutions",
      description: "Fast and dependable air cargo solutions",
      href: "/contact",
    },
    {
      icon: "truck",
      title: "Surface Transportation",
      description: "Flexible road transportation solutions",
      href: "/contact",
    },
    {
      icon: "send",
      title: "Express Cargo Solutions",
      description: "Priority logistics solutions for shipments",
      href: "/contact",
    },
    {
      icon: "route",
      title: "Door-to-Door Logistics",
      description: "End-to-end coordination for pickup",
      href: "/contact",
    },
    {
      icon: "office",
      title: "B2B Logistics Solutions",
      description: "Customized transportation support for corporates",
      href: "/contact",
    },
    {
      icon: "box",
      title: "Customised Logistics Solutions",
      description: "Solutions based on operational needs",
      href: "/contact",
    },
  ],
};

export const network = {
  eyebrow: "Streamlined Fulfillment",
  title: "Pan-India reach, global network",
};

export const testimonials = {
  eyebrow: "Partner Testimonial",
  title: "What our Partners Say",
  items: [
    {
      id: "team-global",
      rating: 5,
      quote:
        "We've worked with Gosky for 8 months and they've delivered on both our biggest needs — All-India reach and on-time delivery. 95% of our shipments arrive within the committed TAT.",
      author: "Raj",
      company: "Team Global",
    },
    {
      id: "sat-global",
      rating: 5,
      quote:
        "After switching to Gosky, our on-time delivery rate hit 97% and transit delays in Tier-2 cities dropped by 30%. They don't just move cargo — they move it on time.",
      author: "Shri",
      company: "Sat Global",
    },
    {
      id: "bnl",
      rating: 5,
      quote:
        "40+ consignments this quarter, on-time across 12 states, no hidden charges — and a support team that actually picks up the phone. Highly recommended.",
      author: "Jalal",
      company: "BNL",
    },
    {
      id: "xiomi",
      rating: 5,
      quote:
        "Our fragile, high-value electronics arrive safe and on time, every shipment. Careful handling from first-mile pickup all the way to the destination hub.",
      author: "Prasanth",
      company: "Xiomi",
    },
    {
      id: "rupali-enterprise",
      rating: 4.5,
      quote:
        "As our order volumes grew, Gosky scaled with us — flexible capacity, consistent delivery windows and transparent pricing with no surprises at month end.",
      author: "Sam",
      company: "Rupali Enterprise",
    },
    {
      id: "ych-logistics",
      rating: 5,
      quote:
        "As a logistics company ourselves, we're selective about partners. Gosky's genuine pan-India network and joined-up coordination really stand out.",
      author: "Jossy",
      company: "YCH Logistics",
    },
  ],
};
