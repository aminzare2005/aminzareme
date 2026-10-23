# aminzare.me ✶

Personal portfolio and digital dossier of **Amin Zare** ([@cwpslxck](https://x.com/aminzarex) / [@aminzare2005](https://github.com/aminzare2005)) — Digital Creator & Technical Product Manager based in Shiraz, Iran.

[![Website](https://img.shields.io/badge/website-aminzare.me-7c3ec8?style=flat-square)](https://aminzare.me)
[![Version](https://img.shields.io/badge/version-2.1.1-1c1a17?style=flat-square)](package.json)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

---

## About Amin Zare

- **Role**: Digital Creator & Technical Product Manager / Frontend Developer
- **Focus**: Building products with AI, connecting tech to the creative industry, and shipping production-grade web applications.
- **Ventures**:
  - **HQ4**: Co-Founder of a digital creative web design & development studio.
  - **Selka**: Founder of a high-performance Persian multi-tenant storefront builder for brands and creators.
  - **Vlonefarsi.ir**: Founder & Developer of high-traffic streetwear e-commerce infrastructure.
  - **Webha**: Frontend Developer on modern Persian blogging platform MVP with AI-assisted workflow engineering.
- **Certifications**: AI Product Management (AIPM) Touring Bootcamp graduate from [BE5T.IR](https://be5t.ir).
- **Location & Time**: Shiraz, Iran (GMT+03:30 / Asia/Tehran).

---

## Overview of the App

[aminzare.me](https://aminzare.me) is a high-performance personal portfolio built with Next.js 15 (App Router, Turbopack), React 19, Tailwind CSS v4, and Framer Motion. 

The site is designed around a tactile **"Technical Sheet"** aesthetic — evoking physical engineering dossiers, specification sheets, and architectural prints through structural hairlines, monospace annotations, crisp typography, and fluid micro-interactions.

### Key Highlights & Features

- **Dynamic Hero & Local Time**: Real-time Tehran/Shiraz clock (`Asia/Tehran`), dynamic status ticker (`open to collab` with pulsing beacon / `fully booked`), auto-computed age counter, and Google Calendar meeting booking integration.
- **Ventures & Experience**: Career ventures highlighting active studios and roles (HQ4 studio co-founder).
- **Projects & In-Depth Case Studies**: Modular showcases with static-site-generated deep-dive routes (`/projects/[slug]`) for **Selka**, **Vlonefarsi**, and **Webha** containing problem breakdowns, technical solutions, stack badges, outcomes, and screenshots rendered with technical sheet Markdown.
- **Live GitHub Metrics**: Server-fetched GitHub stats (`app/api/github/route.ts`) with ISR revalidation (10 hours) and smooth client-side spring count-up counters.
- **Timeline & Milestones**: Interactive career progression tracing the path from 2023 video editing and content creation to 2026 product building and tech entrepreneurship.
- **Education & Credentials**: AIPM verification showcase linking directly to verifiable credentials at BE5T.IR.
- **Community & Creative Work**: Visual cards spotlighting partnerships and creative roles (Finger Coder, Asr Didani).
- **Dynamic Social Cards (@vercel/og)**: Edge-rendered dynamic Open Graph (`/opengraph-image`) and Twitter cards (`/twitter-image`) with a dedicated visual sandbox at `/og`.
- **Persistent Floating Dock**: Smooth bottom-dock navigation with Lenis smooth scrolling, quick links, and active state indicators.
- **Shortlink Redirects**: Server-side 308 permanent redirect routes under `app/(links)/` for fast social links (`/github`, `/linkedin`, `/x`, `/ig`, `/youtube`, `/chat`, `/bale`, `/kick`, `/be5t`).
- **Accessibility & Motion Control**: Full support for `prefers-reduced-motion` across all Framer Motion springs and transitions.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15.5](https://nextjs.org/) (App Router, Turbopack, SSR, SSG, ISR) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`) with CSS theme variables |
| **Animation** | [Framer Motion 12](https://www.framer.com/motion/) & [Lenis 1.3](https://lenis.darkroom.engineering/) smooth scroll |
| **Typography & Markdown**| [Marked 18](https://marked.js.org/) & [Inter](https://fonts.google.com/specimen/Inter) |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) |
| **Open Graph** | [@vercel/og](https://vercel.com/docs/functions/og-image-generation) dynamic Edge banner rendering |
| **Analytics** | [@vercel/analytics](https://vercel.com/analytics) |

---

## Technical Sheet Design Tokens

Defined in `app/globals.css` with `@theme inline`:

```css
--paper: #f1eef4;       /* Page backdrop */
--surface: #fcfcfd;     /* Sheet container background */
--ink: #1c1a17;         /* High-contrast primary copy */
--ink-muted: #5f5a52;   /* Secondary descriptive text */
--ink-faint: #9c92a3;   /* Hairline labels, borders & metadata */
--line: rgba(25, 23, 28, 0.12); /* Structural borders */
--accent: #7c3ec8;      /* Signature brand violet accent */
```

---

## Project Structure

```
aminzareme/
├── app/
│   ├── (links)/                      # 308 permanentRedirect routes for short URLs
│   │   ├── bale/page.tsx             # -> https://ble.ir/@aminzarex
│   │   ├── be5t/page.tsx             # -> Certificate validation
│   │   ├── chat/page.tsx             # -> Goftino live chat
│   │   ├── github/page.tsx           # -> https://github.com/aminzare2005
│   │   ├── ig/page.tsx               # -> https://instagram.com/aminzarex
│   │   ├── kick/page.tsx             # -> https://kick.com/aminzarex
│   │   ├── linkedin/page.tsx         # -> https://linkedin.com/in/aminzare2005
│   │   ├── x/page.tsx                # -> https://x.com/aminzarex
│   │   └── youtube/page.tsx          # -> https://youtube.com/@aminzarex
│   ├── (main)/
│   │   └── page.tsx                  # Home page assembling all portfolio sections
│   ├── (pages)/
│   │   ├── og/page.tsx               # Interactive preview sandbox for dynamic OG card
│   │   └── projects/[slug]/page.tsx  # Dynamic case study route (SSG via generateStaticParams)
│   ├── api/
│   │   └── github/route.ts           # Cached GitHub statistics route (ISR revalidation: 10h)
│   ├── favicon.ico
│   ├── globals.css                   # Technical sheet design tokens & utility styles
│   ├── layout.tsx                    # Root layout (Metadata, JSON-LD Schema, Dock)
│   ├── not-found.tsx                 # Custom 404 handler
│   ├── og-avatar.png                 # Base avatar bitmap for dynamic OG rendering
│   ├── opengraph-image.tsx           # Dynamic Edge-rendered Open Graph card
│   ├── robots.ts                     # Dynamic robots.txt
│   ├── sitemap.ts                    # Dynamic sitemap.xml indexing pages & case studies
│   └── twitter-image.tsx             # Dynamic Edge-rendered Twitter card
├── Components/                       # UI components (root-level folder, NOT inside app/)
│   ├── sections/                     # Section components composed on the main page
│   │   ├── communities.tsx           # Community & creative roles
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
│   │   ├── markdown.tsx              # Server-rendered Markdown parser with technical sheet styling
│   │   └── resume-download.tsx       # Resume download CTA component
│   ├── calculateAge.tsx              # Client-side dynamic age calculation
│   ├── design-gallery.tsx            # Standalone design gallery with lightbox modal
│   ├── displayVersion.tsx            # Reads version dynamically from package.json
│   ├── footer.tsx                    # Floating bottom dock navigation & Lenis root
│   ├── og-preview.tsx                # Visual workbench for testing OG image generation
│   └── section.tsx                   # Motion section container with whileInView triggers
├── constants/                        # Single source of truth for site content & config
│   ├── case-studies.ts               # Case study data models & records (Selka, Vlonefarsi, Webha)
│   ├── items.ts                      # Projects, work, communities, skills, gallery items
│   └── site.ts                       # Global constants (BOOKING_URL, OPEN_TO_WORK, SHOW_RESUME_DOWNLOAD)
├── lib/                              # Shared utility helpers
│   ├── github.ts                     # GitHub API fetcher with fallbacks and Next.js revalidation
│   └── utils.ts                      # cn() utility combining clsx and twMerge
├── public/                           # Static assets
│   ├── assets/fonts/                 # Custom local fonts (Inter.woff2)
│   ├── dl/                           # Static downloadable files (aminzare-resume.pdf)
│   └── images/                       # Project logos, previews, and avatars
├── .env.example                      # Environment variables template
├── AGENTS.md                         # Complete agent configuration & development guide
├── next.config.ts                    # Next.js image domain configuration
├── package.json                      # Dependencies and scripts (v2.1.1)
└── tsconfig.json                     # TypeScript strict configuration
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18+ or v20+ recommended)
- `npm` (or `pnpm` / `yarn`)

### Installation

```bash
# Clone the repository
git clone https://github.com/aminzare2005/aminzare.me.git
cd aminzare.me

# Install dependencies
npm install
```

### Environment Configuration

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `SHOW_RESUME_DOWNLOAD` | `boolean` | `false` | When `"true"`, renders the resume download CTA button in the Connect section. |

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Verification

```bash
# Type check strict TypeScript
npx tsc --noEmit

# Test production build
npm run build
```

---

## Shortlink Redirects Reference

The app includes lightweight, zero-overhead 308 permanent redirect routes:

| Route | Destination | Purpose |
| :--- | :--- | :--- |
| `/github` | `https://github.com/aminzare2005` | GitHub Profile |
| `/linkedin` | `https://linkedin.com/in/aminzare2005` | LinkedIn Profile |
| `/x` | `https://x.com/aminzarex` | X (Twitter) |
| `/ig` | `https://instagram.com/aminzarex` | Instagram |
| `/youtube` | `https://youtube.com/@aminzarex` | YouTube Channel |
| `/chat` | `https://www.goftino.com/c/sRTCca` | Live Chat widget |
| `/bale` | `https://ble.ir/@aminzarex` | Bale Messenger |
| `/kick` | `https://kick.com/aminzarex` | Kick Stream |
| `/be5t` | `https://be5t.ir/validation/cert?...` | AIPM Certificate Validation |

---

## Connect with Amin

- **Website**: [aminzare.me](https://aminzare.me)
- **Email**: [hi@aminzare.me](mailto:hi@aminzare.me)
- **Schedule a Call**: [Google Calendar](https://calendar.app.google/GW4TKqafxwUnDs5z7)
- **GitHub**: [@aminzare2005](https://github.com/aminzare2005)
- **LinkedIn**: [Amin Zare](https://linkedin.com/in/aminzare2005)
- **X / Twitter**: [@aminzarex](https://x.com/aminzarex)
- **Instagram**: [@aminzarex](https://instagram.com/aminzarex)

---

## License

Personal portfolio codebase © 2023–2026 Amin Zare. Feel free to explore the architecture and patterns for inspiration.
