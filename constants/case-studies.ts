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
    subtitle:
      "Next generation Persian blogging and digital publishing platform",
    role: "Creator & Developer",
    timeline: "2024 – 2025",
    problem: `Traditional Persian blogging platforms (legacy Weblogfa or bloated WordPress setups) are outdated and cluttered:

- **Distracting reader experience**: Slow load times, intrusive banners, and poor typography without proper Persian font rendering or spacing.
- **Writer friction**: Cumbersome WYSIWYG editors lacking Markdown support, live preview, or clean media handling.
- **Poor discoverability**: Inadequate modern SEO standards, OpenGraph previews, and slow content delivery.`,
    solution: `Created **Webha** as a distraction-free, modern publishing platform built for Persian writers and developers:

- **Refined Typography**: Meticulously tuned RTL typography using modern Persian fonts (*Vazirmatn*) with correct line heights and half-space (*نیم‌فاصله*) support.
- **Markdown-First Editor**: Intuitive split-screen Markdown authoring with live rendering, syntax highlighting, and instant draft saving.
- **SEO & Social Optimization**: Next.js App Router with automatic JSON-LD article schema, Edge OG banner generation, and fast CDN delivery.`,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    outcomes: [
      "Clean, distraction-free reading experience optimized for Persian script",
      "Full Markdown support with live preview and code highlighting",
      "Fast Core Web Vitals and automated search engine metadata",
    ],
    images: [
      {
        src: "/images/webha.jpg",
        alt: "Webha — next generation Persian blogging platform",
        fit: "cover",
      },
    ],
    links: [],
  },
  {
    slug: "learnpov",
    title: "LearnPov",
    subtitle: "Text-based social learning network for developers & creators",
    role: "Frontend Engineer & Designer",
    timeline: "2024",
    problem: `Online learning in tech communities is often fragmented between long, unread video tutorials and chaotic chat groups:

- Learners struggle to find concise, contextual insights without wading through hours of video.
- Existing platforms prioritize passive consumption rather than active text discussions and peer perspectives.
- Lack of modern, lightweight learning networks catering to Persian developers and designers.`,
    solution: `Designed and built **LearnPov** as a text-first social knowledge-sharing platform:

- **Byte-Sized Technical Insights**: Focused point-of-view (POV) posts highlighting software architecture, design tips, and engineering lessons.
- **Component System with Shadcn UI**: Built with accessible, customizable UI primitives using Next.js, Tailwind CSS, and Shadcn UI.
- **Interactive Discussion Threads**: Nested comment threads supporting Markdown and code snippets for constructive peer reviews.`,
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    outcomes: [
      "Engaging text-first knowledge exchange for developer communities",
      "Modular, accessible component library built with Shadcn UI and Radix primitives",
      "Fast, responsive layout engineered for desktop and mobile reading",
    ],
    images: [
      {
        src: "/images/learnpov.jpg",
        alt: "LearnPov — text-based social learning network",
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
