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
      "Persian multi-tenant storefront builder: launch an online shop in minutes",
    role: "Founder",
    timeline: "August - September 2026",
    problem: `Cool Iranian shops and Gen Z streetwear brands still lack a storefront that matches their aesthetic identity.

- **Global platform gap**: Platforms like **Shopify** are unavailable in Iran due to payment.
- **WooCommerce overhead**: Setting up WooCommerce requires managing hosting, plugins, security, backups, and themes.
- **Local alternatives**: Existing iranian shop-builders has high monthly fees with uninspiring templates with zero support for COOL creator branding.

Shop owner wants to **sign up, pick a theme, upload products, and share a \`/@username\` link** without managing technical stuff.`,
    solution: `Building **Selka** from the ground up as a high-performance, multi-tenant SaaS platform tailored for modern Iranian online brands and creators:

- **Multi-Tenant Architecture**: Dynamic path and subdomain storefront resolution, isolating catalogs and merchant data on a shared high-availability core.
- **Phone Auth**: Fast OTP login via \`Better Auth\` optimized for Iranian mobile carriers.
- **Aesthetic Theme System**: Visual theme customizer allowing custom typography, color tokens, and layout styles tailored to unique streetwear brands.
- **Ultra Fast Checkout**: Streamlined checkout funnel with direct Iranian payment gateway integration.`,
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "ShadCN",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
      "TanStack Query",
      "Zibal",
      "MinIO",
    ],
    outcomes: [
      "Multi-tenant storefront architecture tailored for Iranian creators",
      "Merchant onboarding flow: register → pick theme → add products → receive payments",
      "Sub-second guest checkout flow with live dashboard analytics",
      "Production-ready theme engine supporting modern Persian typography",
    ],
    images: [
      {
        src: "/images/selka.png",
        alt: "Selka — Persian storefront builder mascot and interface",
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
    subtitle: "High-performance e-commerce for a high-traffic streetwear brand",
    role: "Founder & Developer",
    timeline: "2024 – Present",
    problem: `**Vlonefarsi** is a high-demand streetwear brand commanding viral attention across Instagram with millions of monthly impressions. The brand previously struggled with converting flash drop surges into reliable sales:

- **Traffic spikes during drops**: Limited product drops generate massive traffic spikes in minutes, overwhelming traditional CMS platforms.
- **Unstable mobile checkout**: Over 90% of shoppers buy through mobile browsers on variable cellular connections; multi-step checkouts caused steep cart abandonment.
- **Brand expression**: Generic e-commerce templates failed to capture the raw, dark streetwear aesthetic expected by the community.`,
    solution: `Engineered a custom, production-grade e-commerce storefront with **Next.js** and **Tailwind CSS**:

- **Edge-Optimized Performance**: Pre-rendered static storefront catalog with incremental revalidation, ensuring instant page transitions even during peak traffic spikes.
- **Streamlined Single-Screen Checkout**: Frictionless checkout tailored to Iranian debit card payments, cutting drop-off rates significantly.
- **Streetwear Aesthetics**: Custom dark-mode UI with tactile micro-interactions, responsive product grids, and fluid drawer cart.
- **Robust Data Layer**: Integrated with **Supabase** for secure inventory tracking and real-time order processing.`,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    outcomes: [
      "Production e-commerce storefront serving real customers daily",
      "Flawless handling of traffic spikes during high-demand collection drops",
      "High mobile conversion rate with streamlined checkout experience",
      "Maintainable, modular codebase for ongoing collection releases",
    ],
    images: [
      {
        src: "/images/vlonefarsi.png",
        alt: "Vlonefarsi streetwear storefront preview",
        fit: "cover",
      },
    ],
    links: [
      { title: "Live Website", href: "https://vlonefarsi.ir" },
      { title: "Instagram", href: "https://instagram.com/vlonefarsi" },
    ],
  },
  {
    slug: "webha",
    title: "Webha",
    subtitle: "Modern Persian blogging platform built to revive weblog culture",
    role: "Frontend Developer",
    timeline: "May 2026 – August 2026",
    problem: `Webha was conceived to breathe new life into Persian blogging culture. Over the years, legacy Iranian blogging giants gradually shut down or degraded, while newer platforms introduced restrictive, arbitrary policies and clunky UI/UX that alienated writers.

- **Dying blogging ecosystem**: Traditional Iranian platforms faded away, leaving passionate long-form writers with few viable homes.
- **Platform restrictions**: Newer domestic alternatives imposed strict, frustrating rules alongside outdated user experiences.
- **Timing and validation**: The product team validated the concept and planned the roadmap during nationwide internet disruptions and war holidays, identifying an urgent need for an open, aesthetic writing platform.`,
    solution: `Joined the product team as a **Frontend Developer** alongside a multidisciplinary team to build a modern, high-velocity MVP:

- **Frontend Architecture**: Built the client with **Next.js**, **Tailwind CSS**, custom **Shadcn UI**-based components, and **React Query** for state synchronization.
- **AI-Assisted Workflow Engineering**: When feature deadlines became critical, independently designed and set up an AI-driven development pipeline configuring guardrails, custom prompt architectures, and strict structural constraints. This allowed shipping core features rapidly and hitting tight milestones single-handedly on the frontend.
- **Collaborative MVP Iteration**: Worked closely across frontend, backend, and design to rapidly turn product specifications into working interfaces.`,
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "React Query",
      "TypeScript",
      "AI Integration",
    ],
    outcomes: [
      "Architected an AI-assisted frontend workflow with strict guardrails to meet tight feature deadlines",
      "Delivered core MVP interfaces with modern UI/UX and clean component abstractions",
      "Gained hands-on experience accelerating product cycles and AI integration in real team settings",
      "Project successfully reached MVP phase; development currently on hold with potential future reboot",
    ],
    images: [
      {
        src: "/images/webha.jpg",
        alt: "Webha — modern Persian blogging platform",
        fit: "cover",
      },
    ],
    links: [],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((study) => study.slug);
}
