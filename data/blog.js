/**
 * Blog content.
 *
 * Each post is a client story about working with GoSky Logistics. `content` is a
 * list of blocks the post page renders:
 *   { type: "p", text }              — paragraph
 *   { type: "h", text }              — sub-heading
 *   { type: "ul" | "ol", items: [] } — bulleted / numbered list
 *
 * Dates are absolute ISO strings so nothing depends on the current date.
 */

export const blogMeta = {
  eyebrow: "Insights",
  title: "From our clients",
  subtitle:
    "Real stories from the businesses that move their cargo with GoSky Logistics.",
};

export const posts = [
  {
    slug: "why-we-trust-gosky-logistics",
    title: "Why We Trust Gosky Logistics For Our All-India Cargo Needs",
    excerpt:
      "Eight months in, Gosky has delivered on our two biggest needs — All-India reach and on-time delivery.",
    category: "Client Story",
    date: "2026-08-12",
    readingTime: "3 min read",
    author: { name: "Raj", company: "Team Global", role: "Distribution" },
    image: {
      src: "/images/about/hero-cargo.png",
      alt: "Air cargo freighter being loaded on the tarmac",
    },
    content: [
      {
        type: "p",
        text: "When we started looking for a logistics partner, our two biggest needs were simple: All-India reach and on-time delivery. We've been working with Gosky Logistics for the last 8 months, and they've delivered on both.",
      },
      { type: "h", text: "What we like about Team Gosky" },
      {
        type: "ol",
        items: [
          "Pan-India network — whether it's Mumbai to Guwahati or Delhi to Cochin, pickup and delivery happen without delays.",
          "On-time service — 95% of our shipments reach within the committed TAT, with very few damages or returns.",
          "Team Global approach — their team coordinates like an in-house team, with quick updates and proactive problem solving.",
        ],
      },
      {
        type: "p",
        text: "For any business that values reliability in cargo, Gosky Logistics is a partner you can count on.",
      },
    ],
  },
  {
    slug: "gosky-logistics-review-all-india-service",
    title: "Gosky Logistics Review — Fast, Reliable, All-India Service",
    excerpt:
      "40+ consignments this quarter, on-time across 12 states, and a support team that actually picks up the phone.",
    category: "Review",
    date: "2026-08-05",
    readingTime: "2 min read",
    author: { name: "Jalal", company: "BNL", role: "Trading" },
    image: {
      src: "/images/why-us/hero-loading.png",
      alt: "Ground crew loading cargo pallets onto an aircraft",
    },
    content: [
      {
        type: "p",
        text: "We shipped 40+ consignments with Gosky Logistics this quarter.",
      },
      {
        type: "p",
        text: "The result: on-time deliveries across 12 states, no hidden charges, and a support team that actually picks up the phone.",
      },
      {
        type: "p",
        text: "If you need a logistics company with a real All-India network and a team that treats your cargo like their own, go with Gosky Logistics — Team Global. Highly recommended.",
      },
    ],
  },
  {
    slug: "cut-transit-delays-by-30-percent",
    title: "How Gosky Logistics Helped Us Cut Transit Delays By 30%",
    excerpt:
      "Our previous vendor kept missing timelines in Tier-2 cities. Switching to Gosky changed that in three months.",
    category: "Case Study",
    date: "2026-07-28",
    readingTime: "3 min read",
    author: { name: "Shri", company: "Sat Global", role: "Manufacturing" },
    image: {
      src: "/images/about/story-loading.png",
      alt: "Palletised cargo being loaded into a wide-body freighter",
    },
    content: [
      { type: "h", text: "The challenge" },
      {
        type: "p",
        text: "Our previous vendor was consistently missing delivery timelines in Tier-2 cities.",
      },
      { type: "h", text: "The solution" },
      {
        type: "p",
        text: "We switched to Gosky Logistics. They bring their own network plus strong airline tie-ups across India.",
      },
      { type: "h", text: "The result in 3 months" },
      {
        type: "ul",
        items: [
          "On-time delivery rate: 97%",
          "A single point of contact — Team Global",
          "Real-time tracking updates on every shipment",
        ],
      },
      {
        type: "p",
        text: "Gosky doesn't just move cargo. They move it on time.",
      },
    ],
  },
  {
    slug: "a-logistics-partner-that-scales",
    title: "A Logistics Partner That Scales With Our Business",
    excerpt:
      "As our order volumes grew, we needed a partner who could keep up. Gosky did — without dropping service quality.",
    category: "Client Story",
    date: "2026-07-20",
    readingTime: "3 min read",
    author: { name: "Sam", company: "Rupali Enterprise", role: "Wholesale & Distribution" },
    image: {
      src: "/images/building-loading.png",
      alt: "Cargo being loaded onto a freight aircraft",
    },
    content: [
      {
        type: "p",
        text: "Growth is great — until your logistics can't keep up. As our order volumes climbed, we needed a partner who could scale with us across India, not one we'd outgrow in a season.",
      },
      { type: "h", text: "What changed with Gosky" },
      {
        type: "ul",
        items: [
          "Flexible capacity during peak demand, so shipments never sat waiting.",
          "Consistent pickup and delivery windows across metros and Tier-2 cities.",
          "Transparent pricing with no surprise charges at month end.",
        ],
      },
      {
        type: "p",
        text: "Eight months on, Gosky Logistics feels less like a vendor and more like an extension of our operations team.",
      },
    ],
  },
  {
    slug: "reliable-electronics-cargo-handling",
    title: "Reliable Electronics Cargo Handling, Every Shipment",
    excerpt:
      "Fragile, high-value electronics need careful handling and tight timelines. Gosky delivers both.",
    category: "Client Story",
    date: "2026-07-10",
    readingTime: "3 min read",
    author: { name: "Prasanth", company: "Xiomi", role: "Consumer Electronics" },
    image: {
      src: "/images/how-it-works/airline-cargo.png",
      alt: "Cargo aircraft ready for loading",
    },
    content: [
      {
        type: "p",
        text: "Moving consumer electronics leaves little room for error — cargo is fragile, high-value and time-sensitive. We needed a partner who understood that on every leg of the journey.",
      },
      { type: "h", text: "Why Gosky works for us" },
      {
        type: "ul",
        items: [
          "Careful, damage-free handling from first-mile pickup to destination hub.",
          "Airline tie-ups that keep high-priority shipments moving fast.",
          "Real-time visibility, so our teams always know where stock is.",
        ],
      },
      {
        type: "p",
        text: "With Gosky Logistics, our shipments arrive safe, on time and ready for the shelf.",
      },
    ],
  },
  {
    slug: "time-sensitive-deliveries-without-stress",
    title: "Time-Sensitive Deliveries, Without The Stress",
    excerpt:
      "In events and media, a late delivery isn't an option. Gosky keeps our productions on schedule.",
    category: "Client Story",
    date: "2026-06-30",
    readingTime: "2 min read",
    author: { name: "Team Visual Mantra", company: "Visual Mantra", role: "Media & Events" },
    image: {
      src: "/images/why-us/approach-aerial.png",
      alt: "Aerial view of an aircraft flying over a container port",
    },
    content: [
      {
        type: "p",
        text: "In the events and media business, “it'll get there eventually” doesn't cut it. Equipment and materials have to arrive before the shoot, before the show, before the deadline.",
      },
      { type: "h", text: "How Gosky keeps us on schedule" },
      {
        type: "ul",
        items: [
          "Dependable TATs we can plan a production calendar around.",
          "Quick coordination when plans change at the last minute.",
          "A single point of contact who owns the shipment end to end.",
        ],
      },
      {
        type: "p",
        text: "Gosky Logistics has become the quiet reason our timelines hold.",
      },
    ],
  },
  {
    slug: "seamless-partner-coordination-across-india",
    title: "Seamless Partner Coordination Across India",
    excerpt:
      "As a logistics company ourselves, we're selective about partners. Gosky's network and coordination stand out.",
    category: "Partner Story",
    date: "2026-06-18",
    readingTime: "2 min read",
    author: { name: "Jossy", company: "YCH Logistics", role: "Logistics & Supply Chain" },
    image: {
      src: "/images/how-it-works/destination-hub.png",
      alt: "Cargo arriving at a destination hub for dispatch",
    },
    content: [
      {
        type: "p",
        text: "As a logistics company, we don't partner lightly — our reputation rides on whoever we hand cargo to. Gosky Logistics earned that trust quickly.",
      },
      { type: "h", text: "What sets them apart" },
      {
        type: "ul",
        items: [
          "A genuine pan-India network that extends our reach.",
          "Professional coordination that feels like one joined-up team.",
          "Proactive updates, so there are no surprises for us or our customers.",
        ],
      },
      {
        type: "p",
        text: "For reliable All-India movement, Gosky is a partner we're glad to have.",
      },
    ],
  },
];

/** Look up a single post by its slug. */
export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

/** Format an ISO date as e.g. "12 Aug 2026" (locale-independent). */
export function formatDate(iso) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
}
