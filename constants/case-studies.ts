export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  problem: string;
  solution: string;
  stack: string[];
  outcomes: string[];
  images: { src: string; alt: string; fit?: "cover" | "contain" }[];
  links: { title: string; href: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "selka",
    title: "Selka",
    subtitle:
      "Persian multi-tenant storefront builder — launch an online shop in minutes",
    role: "Founder",
    timeline: "August 2026 – Present",
    problem:
      "Cool Iranian shops and Gen Z brands still lack a storefront that matches their vibe. Shopify is not available in Iran, while setting up WordPress/WooCommerce requires dealing with hosting, plugins, security, and payment. Existing shop-builders like Sazito and Digify can be expensive and often lack COOL themes. Merchants want to log in, choose a theme, add products, and share a simple /@username link without having to deal with infrastructure.",
    solution:
      "I'm building Selka as a multi-tenant SaaS: phone-auth, merchant dashboard, themeable storefronts, product/inventory/media management, guest checkout, and payment processing. Merchants own their store and data; Selka handles hosting, security, and updates.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
      "Tailwind CSS",
      "TanStack Query",
      "Zibal",
      "MinIO",
    ],
    outcomes: [
      "Persian storefronts with professional theme system",
      "Merchant flow: register → create store → theme → products → payments → TADAA🎉",
      "Guest checkout, live dashboard stats, and secure payment",
      "Multi-tenant architecture aimed at Iranian SMBs",
    ],
    images: [
      {
        src: "/images/selka.png",
        alt: "Selka — Persian storefront builder mascot",
        fit: "contain",
      },
    ],
    links: [
      // { title: "Telegram", href: "https://t.me/SelkaPro" },
    ],
  },
  {
    slug: "vlonefarsi",
    title: "Vlonefarsi",
    subtitle:
      "Streetwear storefront that turns Instagram hype into real orders",
    role: "Founder & Developer",
    timeline: "2024 – Present",
    problem:
      "Millions of Instagram views weren't turning into sales without a real shop. Generic templates didn't match the streetwear vibe — @vlonefarsi needed a fast, on-brand storefront built for mobile traffic from the feed, not a bolted-on theme.",
    solution:
      "I built the store on Next.js, TypeScript, Supabase, and Vercel. Product pages, cart, and checkout — designed for phones, since almost everyone hits the shop from Instagram.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    outcomes: [
      "Production storefront serving real customers daily",
      "Mobile-first experience tuned for Instagram traffic",
      "On-brand UI that matches the streetwear identity",
      "Maintainable codebase for ongoing drops and features",
    ],
    images: [
      {
        src: "/images/vlonefarsi.jpg",
        alt: "Vlonefarsi — streetwear brand mark",
        fit: "contain",
      },
    ],
    links: [
      { title: "Website", href: "https://vlonefarsi.ir" },
      { title: "Instagram", href: "https://instagram.com/vlonefarsi" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((study) => study.slug);
}
