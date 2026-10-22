# Amin Zare Portfolio

Welcome to the personal portfolio website of **Amin Zare** ([@cwpslxck](https://x.com/aminzarex) / [@aminzarex](https://x.com/aminzarex)), a digital creator and technical product manager / frontend developer based in Shiraz, Iran.

---

## Overview

This repository powers [aminzare.me](https://aminzare.me), a high-performance personal portfolio built with Next.js 15 App Router, React 19, Tailwind CSS v4, and Framer Motion. The site is structured around a tactile "technical sheet" design system, showcasing venture projects, case studies, community work, career milestones, real-time stats, and quick-access redirects.

---

## Key Features

### Modular Sections & Architecture
- **Hero & Identity**: Real-time Tehran/Shiraz local time clock (`Asia/Tehran`), dynamic status ticker (`open to collab` with pinging pulse / `fully booked`), automatic age calculator, role badges, and Google Calendar meeting booking CTA.
- **Work / Ventures**: High-level venture highlights (e.g. Founder at YXN Studio).
- **Status / Live GitHub Numbers**: Real-time counter cards displaying GitHub followers and public repositories, powered by server-side fetching with ISR caching and smooth client-side Framer Motion spring physics.
- **Education & Certifications**: AI Product Management (AIPM) touring bootcamp certification showcase with verification link (`be5t.ir`).
- **Communities**: Partnerships and creative roles (Finger Coder, Asr Didani) with branded subtle gradient cards.
- **Projects Grid**: Interactive project cards (Vlonefarsi, Selka, Webha) highlighting tech stacks, live links, and case study routes.
- **Deep Case Studies**: Dedicated case study detail routes (`/projects/[slug]`) featuring problem statements, technical architecture, outcomes, image galleries, and external links.
- **Career Path & Milestones**: Interactive vertical timeline tracking key milestones from 2023 through 2026+.
- **Connect & Versioning**: Email contact (`hi@aminzare.me`), dynamic portfolio version reading directly from `package.json`, and optional PDF resume download CTA.

### Tactile UX & Design System
- **"Technical Sheet" Design Tokens**: CSS-variable-driven palette defined in `app/globals.css` (`--paper`, `--surface`, `--ink`, `--ink-muted`, `--ink-faint`, `--line`, and `--accent`).
- **Smooth Navigation & Scrolling**: Floating bottom dock menu with quick links (GitHub, LinkedIn, X, Instagram) and Lenis smooth scrolling integration.
- **Accessibility & Motion Control**: Comprehensive `prefers-reduced-motion` fallbacks across all Framer Motion springs and scroll animations.

### Performance & SEO
- **Dynamic OpenGraph & Twitter Cards**: Dynamic social sharing images generated on the Edge using `@vercel/og` (`app/opengraph-image.tsx` and `app/twitter-image.tsx`).
- **Live OG Sandbox**: Visual preview tool at `/og` for testing dynamic social card renders in real time.
- **Structured Data (Schema.org)**: Comprehensive JSON-LD `Person` and `WebSite` graph embedded in the root layout.
- **Sitemap & Robots**: Automated `sitemap.ts` and `robots.ts` indexing main sections and dynamic case studies.
- **Fast Profile Redirects**: Lightweight server-side permanent redirects under `app/(links)/` for social profiles and contact channels.
- **Analytics**: Privacy-friendly telemetry via Vercel Analytics and Bazeh analytics.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Turbopack) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & [Lenis](https://lenis.darkroom.engineering/) smooth scroll |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) |
| **Analytics** | [@vercel/analytics](https://vercel.com/analytics) & Bazeh Analytics |
| **Utilities** | `clsx`, `tailwind-merge` |

---

## Directory Structure

```
aminzareme/
├── app/
│   ├── (links)/                      # Fast profile redirect routes (308 permanentRedirect)
│   │   ├── bale/page.tsx             # Bale messenger redirect (@aminzarex)
│   │   ├── be5t/page.tsx             # AIPM certificate verification redirect
│   │   ├── chat/page.tsx             # Goftino live chat redirect
│   │   ├── github/page.tsx           # GitHub profile redirect (aminzare2005)
│   │   ├── ig/page.tsx               # Instagram redirect (aminzarex)
│   │   ├── kick/page.tsx             # Kick stream redirect (aminzarex)
│   │   ├── linkedin/page.tsx         # LinkedIn redirect (aminzare2005)
│   │   ├── x/page.tsx                # X / Twitter redirect (aminzarex)
│   │   └── youtube/page.tsx          # YouTube channel redirect (@aminzarex)
│   ├── (main)/
│   │   └── page.tsx                  # Home page assembling all portfolio sections
│   ├── (pages)/
│   │   ├── og/page.tsx               # Live preview sandbox for dynamic OG card
│   │   └── projects/[slug]/page.tsx  # Dynamic case study detail pages
│   ├── api/
│   │   └── github/route.ts           # Cached GitHub profile & repo statistics API
│   ├── favicon.ico                   # Site favicon
│   ├── globals.css                   # Tailwind CSS v4 design tokens and base styles
│   ├── layout.tsx                    # Root layout with JSON-LD, Bazeh script, Vercel Analytics & Dock
│   ├── not-found.tsx                 # Custom 404 page
│   ├── og-avatar.png                 # Avatar asset for edge OG card generation
│   ├── opengraph-image.tsx           # Edge-rendered dynamic Open Graph card (1200x630)
│   ├── robots.ts                     # Search engine crawler directives
│   ├── sitemap.ts                    # Dynamic XML sitemap generator
│   └── twitter-image.tsx             # Edge-rendered dynamic Twitter summary card
├── Components/                       # Modular UI & section components
│   ├── sections/                     # Home page section blocks
│   │   ├── communities.tsx           # Creative & community roles
│   │   ├── connect.tsx               # Contact section & app version tag
│   │   ├── education.tsx             # AIPM certification highlight
│   │   ├── gallery.tsx               # Gallery grid component
│   │   ├── hero.tsx                  # Hero section with local time, status, booking
│   │   ├── projects.tsx              # Projects grid with tags & case study links
│   │   ├── status.tsx                # Server component fetching GitHub stats
│   │   ├── status-client.tsx         # Animated spring count-up counters
│   │   ├── timeline.tsx              # Career & milestone timeline
│   │   └── work.tsx                  # Experience / venture highlight
│   ├── ui/                           # Reusable micro-components
│   │   ├── local-time.tsx            # Live Tehran/Shiraz local time clock
│   │   ├── markdown.tsx              # Server-rendered Markdown renderer for case studies
│   │   └── resume-download.tsx       # PDF resume download CTA
│   ├── calculateAge.tsx              # Dynamic age calculation helper
│   ├── design-gallery.tsx            # Design lightbox modal component
│   ├── displayVersion.tsx            # Version renderer reading from package.json
│   ├── footer.tsx                    # Persistent floating dock navigation + Lenis scroll
│   ├── og-preview.tsx                # OG card interactive preview workbench
│   └── section.tsx                   # Animated section container with Framer Motion
├── constants/                        # Structured content & application data
│   ├── case-studies.ts               # Detailed case study records (Selka, Vlonefarsi)
│   ├── items.ts                      # Projects, work, communities, skills, gallery data
│   └── site.ts                       # Site-wide constants, booking URL, and feature flags
├── lib/                              # Shared utility helpers
│   ├── github.ts                     # GitHub API fetcher with fallback and ISR caching
│   └── utils.ts                      # Tailwind merge & clsx utility (`cn`)
├── public/                           # Static assets
│   ├── assets/fonts/                 # Local font assets (Inter)
│   ├── dl/                           # Downloadable assets (aminzare-resume.pdf)
│   └── images/                       # Project & community brand images
├── .env.example                      # Environment variables template
├── next.config.ts                    # Next.js configuration (remote image patterns)
├── package.json                      # Project dependencies & scripts
├── postcss.config.mjs                # PostCSS configuration for Tailwind CSS v4
└── tsconfig.json                     # TypeScript compiler configuration
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or v20+ recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/aminzare2005/aminzare.me.git
cd aminzare.me

# Install dependencies
npm install
```

### Environment Configuration

Copy `.env.example` to `.env.local` to configure feature flags:

```bash
cp .env.example .env.local
```

| Variable | Type | Description |
| :--- | :--- | :--- |
| `SHOW_RESUME_DOWNLOAD` | `boolean` (`true`/`false`) | Displays the PDF resume download CTA in the Connect section. |

### Development Server

Start the local development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

---

## Connecting & Socials

- **Website**: [aminzare.me](https://aminzare.me)
- **Email**: [hi@aminzare.me](mailto:hi@aminzare.me)
- **Book a Meeting**: [Google Calendar](https://calendar.app.google/GW4TKqafxwUnDs5z7)
- **GitHub**: [@aminzare2005](https://github.com/aminzare2005) (`/github`)
- **LinkedIn**: [Amin Zare](https://linkedin.com/in/aminzare2005) (`/linkedin`)
- **X / Twitter**: [@aminzarex](https://x.com/aminzarex) (`/x`)
- **Instagram**: [@aminzarex](https://instagram.com/aminzarex) (`/ig`)
- **YouTube**: [@aminzarex](https://youtube.com/@aminzarex) (`/youtube`)
- **Live Chat**: [Goftino](https://www.goftino.com/c/sRTCca) (`/chat`)
- **Bale**: [@aminzarex](https://ble.ir/@aminzarex) (`/bale`)
- **Kick**: [@aminzarex](https://kick.com/aminzarex) (`/kick`)

---

## License

This project is personal portfolio software developed by Amin Zare. Feel free to use the code structure as inspiration for your own portfolio.
