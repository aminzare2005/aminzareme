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
    title: "vlonefarsi.ir",
    subtitle: "E-commerce for a high-traffic streetwear brand",
    role: "Founder & Developer",
    timeline: "2024 – Present",
    problem:
      "brand needed a fast, reliable online store to convert millions of social views into sales. The brand required a polished shopping experience with performance that could handle traffic spikes during drops.",
    solution:
      "I built the storefront with Next.js and Tailwind CSS, focusing on fast page loads, mobile-first layouts, and a checkout flow optimized for Iranian users. Product pages, cart logic, and brand visuals were tailored to match the streetwear aesthetic while keeping the codebase maintainable.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    outcomes: [
      "Production e-commerce site serving real customers daily",
      "Maintainable frontend architecture for ongoing feature work",
    ],
    images: [
      {
        src: "/images/vlonefarsi.jpg",
        alt: "Vlonefarsi — streetwear brand mark",
        fit: "contain",
      },
    ],
    links: [
      { title: "Live Website", href: "https://vlonefarsi.ir" },
      { title: "Instagram", href: "https://instagram.com/vlonefarsi" },
    ],
  },
  {
    slug: "selka",
    title: "Selka",
    subtitle: "E-commerce for a high-traffic streetwear brand",
    role: "Founder & Developer",
    timeline: "2024 – Present",
    problem:
      "brand needed a fast, reliable online store to convert millions of social views into sales. The brand required a polished shopping experience with performance that could handle traffic spikes during drops.",
    solution:
      "I built the storefront with Next.js and Tailwind CSS, focusing on fast page loads, mobile-first layouts, and a checkout flow optimized for Iranian users. Product pages, cart logic, and brand visuals were tailored to match the streetwear aesthetic while keeping the codebase maintainable.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    outcomes: [
      "Production e-commerce site serving real customers daily",
      "Maintainable frontend architecture for ongoing feature work",
    ],
    images: [
      {
        src: "/images/vlonefarsi.jpg",
        alt: "vlonefarsi.ir storefront preview",
      },
    ],
    links: [
      { title: "Live Website", href: "https://vlonefarsi.ir" },
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
