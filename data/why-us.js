/**
 * Content for the Why Us page. Presentational sections read from here.
 */

export const hero = {
  eyebrow: "Why GoSky",
  titleBefore: "Your Cargo. ",
  highlight: "Our Commitment.",
  description:
    "Customers choose Gosky Logistics because we combine professional logistics management with responsive and personalized service.",
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: { label: "Become a Partner", href: "/contact" },
  image: {
    src: "/images/why-us/hero-loading.png",
    alt: "Ground crew loading cargo pallets onto an aircraft",
    width: 1080,
    height: 675,
  },
};

export const features = {
  eyebrow: "Streamlined Fulfillment",
  title: "Simple, transparent, reliable",
  items: [
    {
      icon: "clock",
      title: "Reliable & Timely Operations",
      description:
        "We value commitments and work towards keeping every shipment moving as planned.",
    },
    {
      icon: "users",
      title: "Customer-Focused Service",
      description:
        "Our team works closely with customers and provides personalized support.",
    },
    {
      icon: "shieldCheck",
      title: "Safe Cargo Handling",
      description:
        "Every shipment is handled with care and follows safe operational practices.",
    },
    {
      icon: "tag",
      title: "Competitive Logistics Solutions",
      description:
        "We provide efficient and cost-effective solutions tailored to your needs.",
    },
    {
      icon: "support",
      title: "Dedicated Operational Support",
      description:
        "Our experienced team is always available to support your operations.",
    },
    {
      icon: "chat",
      title: "Transparent Communication",
      description:
        "We believe in clear and timely updates at every step of the shipment journey.",
    },
    {
      icon: "truck",
      title: "Flexible Transportation Options",
      description:
        "Multiple modes and solutions designed to suit your cargo type and timelines.",
    },
    {
      icon: "globe",
      title: "Growing Pan-India Network",
      description:
        "Our strong network helps us reach more places and move faster, together.",
    },
  ],
};

export const approach = {
  title: "Our approach",
  // First step is highlighted/expanded by default.
  steps: [
    {
      id: "understand",
      icon: "clipboard",
      title: "Understand",
      body: "We understand the customer's shipment requirements, timelines and destination.",
    },
    {
      id: "plan",
      icon: "bulb",
      title: "Plan",
      body: "We plan the most reliable route and mode to move the cargo efficiently.",
    },
    {
      id: "execute",
      icon: "gear",
      title: "Execute",
      body: "We coordinate pickup, airline cargo and handling with precision and care.",
    },
    {
      id: "communicate",
      icon: "chat",
      title: "Communicate",
      body: "We keep customers updated at every step of the shipment journey.",
    },
    {
      id: "deliver",
      icon: "box",
      title: "Deliver",
      body: "We ensure cargo reaches its destination safely and on time.",
    },
  ],
  image: {
    src: "/images/why-us/approach-aerial.png",
    alt: "Aerial view of a passenger aircraft flying over a container port",
    width: 1024,
    height: 410,
  },
};
