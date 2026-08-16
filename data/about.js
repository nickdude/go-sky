/**
 * Content for the About Us page.
 *
 * As with data/home.js, all copy, imagery and repeatable lists live here so the
 * section components stay presentational.
 */

export const hero = {
  eyebrow: "About Us",
  titleBefore: "Moving Business Forward.",
  // Second line is rendered in the accent colour on its own line.
  highlight: "Delivering Trust.",
  highlightBlock: true,
  description:
    "Gosky Logistics Pvt. Ltd. is a growing logistics and transportation company committed to providing reliable, efficient and customer-focused logistics solutions across worldwide.",
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: { label: "Become a Partner", href: "/contact" },
  image: {
    src: "/images/about/hero-cargo.png",
    alt: "CMA CGM Air Cargo freight aircraft being loaded on the tarmac at dusk",
    width: 1900,
    height: 700,
  },
};

// Purple statement band beneath the hero.
export const statement = {
  eyebrow: "Why GoSky exists",
  title:
    "Logistics isn't just about moving a shipment. It's about moving a business forward.",
  body: "Every shipment represents a commitments, a timeline and a responsibility. Our team works closely with customers and logistics partners to coordinate each movement efficiently from pickup through delivery.",
  badge: {
    icon: "shieldCheck",
    text: "Safe handling, Timely movement, Transparent communication, Responsive support",
  },
};

export const story = {
  eyebrow: "Our story",
  title: "Building a logistics partner businesses can rely on",
  paragraphs: [
    "Established with a vision to simplify the movement of goods, we support businesses with dependable transportation and cargo solutions designed around their operational requirements. From time-sensitive shipments to regular business cargo, our focus remains on safe handling, timely movement, transparent communication and responsive customer support.",
    "At Gosky Logistics, we understand that logistics is not simply about moving a shipment from one location to another. It is an essential part of our customers' business operations. Every shipment represents a commitment, a timeline and a responsibility. Our team works closely with customers and logistics partners to coordinate each movement efficiently from pickup through delivery.",
    "With a strong focus on operational excellence, service reliability and long-term relationships, we continuously work towards strengthening our network and capabilities across India.",
    "As we grow, our objective remains clear — to build Gosky Logistics into a trusted logistics partner for businesses by combining professional execution, responsive service and dependable transportation solutions.",
    "We don't just move shipments. We move businesses forward.",
  ],
  // Left-hand accordion. The first item is expanded by default.
  pillars: [
    {
      id: "vision",
      icon: "eye",
      title: "Our vision",
      body: "To build a trusted and future-ready logistics company that connects businesses across India through reliable, efficient and technology-enabled transportation solutions. Our vision is to continuously expand our capabilities and network while maintaining the service quality, transparency and personal attention our customers expect from us.",
    },
    {
      id: "history",
      icon: "history",
      title: "Our history",
      body: "What began as a focused air-cargo operation has grown into a pan-India network. Every milestone has been built on the same principle — dependable movement of goods and long-term relationships with the customers and partners who rely on us.",
    },
    {
      id: "purpose",
      icon: "target",
      title: "Our purpose",
      body: "We exist to make logistics simpler and more transparent for businesses, coordinating each movement so our customers can focus on what they do best while their cargo moves safely and on time.",
    },
    {
      id: "values",
      icon: "heart",
      title: "Our core values",
      body: "Customer-first thinking, integrity, safety and continuous improvement guide every decision — from how we handle a single shipment to how we grow our network.",
    },
  ],
  image: {
    src: "/images/about/story-loading.png",
    alt: "Palletised cargo being loaded into the hold of a wide-body freighter aircraft",
    width: 1440,
    height: 1080,
  },
};

export const team = {
  eyebrow: "Our team",
  title: "Meet the team",
  // Dynamic segments — add more groups here as the team grows. Members without an
  // `image` fall back to an initials placeholder.
  segments: [
    {
      id: "directors",
      label: "Directors",
      icon: "briefcase",
      members: [
        {
          name: "Nitien Bhosale",
          role: "Founder and Director",
          image: "/images/team/nitien-bhosale.jpg",
        },
        {
          name: "Rohan Laha",
          role: "Director",
          image: "/images/team/rohan-laha.jpg",
        },
      ],
    },
    {
      id: "leadership",
      label: "Leadership",
      icon: "users",
      members: [
        {
          name: "Manish Borse",
          role: "Operations Head",
          image: "/images/team/manish-borse.jpg",
        },
        {
          name: "Vinay Kumar Mishra",
          role: "Linehaul Vehicle Manager",
          image: "/images/team/vinay-kumar-mishra.jpg",
        },
        {
          name: "Jaminur Jaman",
          role: "Customer Relationship Manager",
          image: "/images/team/jaminur-jaman.jpg",
        },
        {
          name: "Adv Yogesh Jagtap",
          role: "Legal Advisor",
          image: "/images/team/yogesh-jagtap.jpg",
        },
      ],
    },
    {
      id: "it",
      label: "IT",
      icon: "monitor",
      members: [
        {
          name: "Shubham Pandey",
          role: "IT",
          image: "/images/team/shubham-pandey.png",
        },
      ],
    },
  ],
};

export const globe = {
  title: "Located around the globe",
  description:
    "Global cargo needs global teams — which is why we have offices in strategic locations, covering multiple markets.",
  stats: [
    { value: "33+", label: "Offices", accent: "ink" },
    { value: "7", label: "Countries", accent: "blue" },
  ],
};
