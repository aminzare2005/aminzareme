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
  images: { src: string; alt: string }[];
  links: { title: string; href: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
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
        alt: "vlonefarsi.ir storefront preview",
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
