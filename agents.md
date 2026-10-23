# Agent Configuration & Development Guide for aminzare.me

## Overview

This document outlines the architecture, conventions, agent workflows, and codebase reference for developing, maintaining, and extending Amin Zare's personal portfolio website ([aminzare.me](https://aminzare.me)). It serves as the primary operational manual for AI agents and human contributors.

---

## Identity & Background: Who is Amin Zare?

- **Full Name**: Amin Zare
- **Online Handles**: `@cwpslxck` (personal handle) / `@aminzarex` (socials) / `@aminzare2005` (GitHub/LinkedIn)
- **Birth Date**: December 21, 2005 (`Components/calculateAge.tsx`)
- **Location**: Shiraz, Iran (`Asia/Tehran` timezone, tracked live via `Components/ui/local-time.tsx`)
- **Roles & Profession**: Digital Creator, Technical Product Manager, and Frontend Developer.
- **Core Ethos**: "Building cool products with AI, trying to connect tech to the creative industry."
- **Ventures & Active Work**:
  - **HQ4**: Co-Founder of a digital creative web design & development studio (`Components/sections/work.tsx`).
  - **Selka**: Founder of a Persian multi-tenant storefront builder for brands and creators (`constants/case-studies.ts`).
  - **Vlonefarsi.ir**: Founder & Developer of high-demand e-commerce infrastructure for streetwear drops.
  - **Webha**: Frontend Developer on modern Persian blogging platform MVP with AI-assisted workflow engineering.
- **Education & Credentials**: Certified in AI Product Management (AIPM) through BE5T.IR Touring Bootcamp (`Components/sections/education.tsx`).
- **Community Roles**: Graphic Designer for Finger Coder; Video Editor for Asr Didani (Shiraz).

---

## Technical Stack & Architecture

- **Framework**: Next.js 15.5.9 (React 19, Turbopack, App Router)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with custom CSS variables / design tokens
- **Animations**: Framer Motion 12 (`framer-motion`) & Lenis 1.3 (`lenis/react`) smooth scrolling
- **Type Safety**: TypeScript 5 in strict mode
- **Markdown Rendering**: Marked 18 (`marked`) with custom server-side technical sheet typography
- **Edge OG / Twitter Cards**: Dynamic social banners generated on Edge using `@vercel/og` (`app/opengraph-image.tsx` & `app/twitter-image.tsx`)
- **Data & Content Architecture**: Static/strongly-typed content in `constants/` with dynamic case study detail routing (`/projects/[slug]`)
- **API Endpoints**: Cached GitHub statistics route at `app/api/github/route.ts` (ISR revalidation: 10 hours)
- **Analytics**: Vercel Analytics (`@vercel/analytics/next`)

---

## Accurate File & Directory Structure

```
aminzareme/
├── app/
│   ├── (links)/                      # External profile redirect routes (308 permanentRedirect)
│   │   ├── bale/page.tsx             # https://ble.ir/@aminzarex
│   │   ├── be5t/page.tsx             # Certificate verification link
│   │   ├── chat/page.tsx             # https://www.goftino.com/c/sRTCca
│   │   ├── github/page.tsx           # https://github.com/aminzare2005
│   │   ├── ig/page.tsx               # https://instagram.com/aminzarex
│   │   ├── kick/page.tsx             # https://kick.com/aminzarex
│   │   ├── linkedin/page.tsx         # https://linkedin.com/in/aminzare2005
│   │   ├── x/page.tsx                # https://x.com/aminzarex
│   │   └── youtube/page.tsx          # https://youtube.com/@aminzarex
│   ├── (main)/
│   │   └── page.tsx                  # Home page assembling all portfolio sections
│   ├── (pages)/
│   │   ├── og/page.tsx               # Interactive preview sandbox for dynamic OG card
│   │   └── projects/[slug]/page.tsx  # Dynamic case study route (SSG via generateStaticParams)
│   ├── api/
│   │   └── github/route.ts           # Cached GitHub statistics route (GET, ISR: 10h)
│   ├── favicon.ico
│   ├── globals.css                   # Technical sheet design tokens & utility styles
│   ├── layout.tsx                    # Root layout (Metadata, JSON-LD Schema, Dock)
│   ├── not-found.tsx                 # 404 handler
│   ├── og-avatar.png                 # Avatar bitmap for Edge OG image generation
│   ├── opengraph-image.tsx           # Dynamic Edge-rendered Open Graph card
│   ├── robots.ts                     # Dynamic robots.txt
│   ├── sitemap.ts                    # Dynamic sitemap.xml indexing pages & case studies
│   └── twitter-image.tsx             # Dynamic Edge-rendered Twitter card
├── Components/                       # UI components (root-level folder, NOT inside app/)
│   ├── sections/                     # Section components composed on the main page
│   │   ├── communities.tsx           # Community & creative roles (Finger Coder, Asr Didani)
│   │   ├── connect.tsx               # Footer CTA with version info & contact
│   │   ├── education.tsx             # AIPM certification showcase
│   │   ├── gallery.tsx               # Gallery grid component
│   │   ├── hero.tsx                  # Hero section (clock, open-to-work ticker, booking link)
│   │   ├── projects.tsx              # Grid of project cards
│   │   ├── status.tsx                # Server component fetching GitHub stats
│   │   ├── status-client.tsx         # Client spring-animated counters
│   │   ├── timeline.tsx              # Career & milestone timeline
│   │   └── work.tsx                  # Experience & ventures (HQ4)
│   ├── ui/                           # Reusable micro-components
│   │   ├── local-time.tsx            # Live Tehran/Shiraz local time clock (Asia/Tehran)
│   │   ├── markdown.tsx              # Server-rendered Markdown parser with technical sheet typography
│   │   └── resume-download.tsx       # Resume download CTA component
│   ├── calculateAge.tsx              # Client-side dynamic age calculation
│   ├── design-gallery.tsx            # Standalone design gallery with lightbox modal
│   ├── displayVersion.tsx            # Reads version dynamically from package.json
│   ├── footer.tsx                    # Floating bottom dock navigation & Lenis root
│   ├── og-preview.tsx                # Visual workbench for testing OG image generation
│   └── section.tsx                   # Motion section container with whileInView triggers
├── constants/
│   ├── case-studies.ts               # Case study data model & items (Selka, Vlonefarsi, Webha)
│   ├── items.ts                      # Projects, work, communities, skills, gallery items
│   └── site.ts                       # Global constants (BOOKING_URL, OPEN_TO_WORK, SHOW_RESUME_DOWNLOAD)
├── lib/
│   ├── github.ts                     # GitHub API fetcher with fallbacks and Next.js revalidation
│   └── utils.ts                      # `cn()` utility combining `clsx` and `twMerge`
├── public/
│   ├── assets/fonts/                 # Custom local fonts (Inter.woff2)
│   ├── dl/                           # Static downloadable files (aminzare-resume.pdf)
│   └── images/                       # Project logos, previews, and assets
├── .env.example                      # Environment variables template
├── AGENTS.md                         # This file
├── next.config.ts                    # Next.js image domain configuration
├── package.json                      # Dependencies and scripts (v2.1.1)
├── README.md                         # Public repository README
└── tsconfig.json                     # TypeScript strict configuration
```

---

## Design System & Styling Conventions

### 1. "Technical Sheet" Design Tokens

Defined in `app/globals.css` with `@theme inline`:

- `--paper`: Base page background (`#f1eef4`)
- `--surface`: Sheet container background (`#fcfcfd`)
- `--ink`: Primary high-contrast text (`#1c1a17`)
- `--ink-muted`: Subdued text (`#5f5a52`)
- `--ink-faint`: Border text / tertiary annotations (`#9c92a3`)
- `--line`: Structural hairlines (`rgba(25, 23, 28, 0.12)`)
- `--accent`: Signature brand violet (`#7c3ec8`)

### 2. Motion & Accessibility Standards

- All animated components (`Section`, `StatusClient`, `DesignGallery`, `ResumeDownload`) **must** respect `prefers-reduced-motion` using Framer Motion's `useReducedMotion()`.
- Interactive elements use the `.card-interactive` utility for tactile feedback:
  ```css
  .card-interactive {
    @apply transition-all duration-150 motion-reduce:active:scale-100 active:scale-[0.99];
  }
  ```
- Focus states must remain accessible with explicit `focus-visible` styling matching `--accent`.

### 3. Responsive Container Model

- The main layout centers content in a constrained column simulating a physical document:
  `md:mx-auto md:max-w-2xl border border-line bg-surface`
- Bottom padding accommodates the persistent floating navigation dock (`Components/footer.tsx`).

---

## Key Content & Data Models

### 1. Project Items (`constants/items.ts`)

```typescript
export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  link: string;
  stack: string[];
  featured?: boolean;
};
```

### 2. Case Studies (`constants/case-studies.ts`)

```typescript
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
```

> [!IMPORTANT]
> Whenever adding or modifying a case study, ensure `getCaseStudySlugs()` generates corresponding static paths for `/projects/[slug]` during `next build`.

### 3. Feature Flags & Site Config (`constants/site.ts`)

- `BOOKING_URL`: Google Calendar booking appointment link.
- `OPEN_TO_WORK`: Toggle hero status badge between `"open to collab"` (with pulsing ping animation) and `"fully booked — busy shipping"`.
- `SHOW_RESUME_DOWNLOAD`: Controlled by `process.env.SHOW_RESUME_DOWNLOAD === "true"`.

---

## Workflow Patterns for Agents

### 1. Code Discovery & Navigation

- **Components**: Check `Components/sections/` for page sections and `Components/ui/` for micro-elements. **Note:** `Components/` is at the project root, NOT inside `app/`.
- **Routes & Pages**: Check `app/(main)/` for the home page, `app/(pages)/` for subpages, and `app/(links)/` for external redirect routes.
- **Data & Text**: Content strings, projects, career items, and case studies are maintained in `constants/`, avoiding hardcoded copy inside markup.

### 2. Adding or Modifying Content

1. **New Project**:
   - Add item to `PROJECTS_ITEMS` in `constants/items.ts`.
   - If writing a full case study, add an entry to `CASE_STUDIES` in `constants/case-studies.ts`.
   - Ensure referenced images exist in `public/images/`.
2. **New Social / External Link**:
   - Add redirect page under `app/(links)/[slug]/page.tsx` using `permanentRedirect(destinationUrl)`.
   - If appearing in the dock, update `menuItems` in `Components/footer.tsx`.
   - If appearing in SEO graph, update `personSchema.sameAs` in `app/layout.tsx`.
3. **Updating Experience / Timeline**:
   - Update `WORK_ITEMS` or `COMMUNITY_ITEMS` in `constants/items.ts`.
   - Update `MILESTONES` in `Components/sections/timeline.tsx`.

### 3. Verification & Type Checking

Before completing any changes, always verify:

```bash
# Verify TypeScript strict type-checking
npx tsc --noEmit

# Test production build
npm run build
```

---

## Agent Task Routing

| Task Type | Focus Areas | Key Files |
| :--- | :--- | :--- |
| **Content Updates** | Update projects, skills, links | `constants/items.ts`, `constants/case-studies.ts`, `constants/site.ts` |
| **UI & Styling** | Layout, tokens, responsive fixes | `app/globals.css`, `Components/section.tsx`, `app/layout.tsx` |
| **New Section** | Create modular section | `Components/sections/[name].tsx`, import in `app/(main)/page.tsx` |
| **SEO & OpenGraph** | Metadata, OG banners, sitemap | `app/layout.tsx`, `app/opengraph-image.tsx`, `app/sitemap.ts` |
| **External Redirects**| URL redirects | `app/(links)/[name]/page.tsx` |

---

**Last Updated**: October 2026  
**Codebase Version**: 2.1.1
