# Ammar Next.js Portfolio

Personal portfolio website for Ahmad Ammar Musyaffa, a fullstack developer with an interest in AI integration. Built with the Next.js App Router, TypeScript, and Tailwind CSS in a Neobrutalist visual style.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Directory Structure](#directory-structure)
- [Code Conventions](#code-conventions)
- [Managing Content](#managing-content)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [SEO Implementation](#seo-implementation)
- [Security and Updates](#security-and-updates)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Overview

The site includes:

- a home page (hero, profile summary, stats, featured projects, and a contact call to action),
- an About page (profile, stats, work experience, education, and skills),
- a Portfolio page with category filters and infinite scroll,
- a project detail page per slug (`/portfolio/[slug]`), statically rendered at build time,
- a Services page with WhatsApp booking buttons,
- a Contact page with a validated form.

Content is data-driven through the `constants/` folder, so updating content does not require touching UI components.

## Key Features

- Next.js 16 App Router with a route group and statically generated dynamic routes (`generateStaticParams`).
- Server-first components: only interactive parts are client components.
- Dark mode with `next-themes` and a circular reveal transition (View Transitions API).
- Entry animations with Framer Motion through the `Reveal` wrapper.
- Contact form with React Hook Form and Zod.
- On-page SEO with the Next.js Metadata API and JSON-LD.
- Built-in Next.js sitemap, robots.txt, and web manifest (`app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`).
- Strict TypeScript with no `any`, `unknown`, or non-null assertions (enforced by ESLint).

## Tech Stack

### Core

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript 5

### UI and Styling

- Tailwind CSS
- shadcn/ui (only `button`, `toast`, and `toaster` in `components/ui/`)
- class-variance-authority
- Framer Motion
- Lucide React and React Icons

### Forms and Validation

- React Hook Form
- Zod

### Utilities

- clsx and tailwind-merge
- react-infinite-scroll-component

### Package Manager

- pnpm (the project ships only `pnpm-lock.yaml`)

## Directory Structure

```text
app/                        # Routes only: metadata + component composition
  layout.tsx                # Root layout: ThemeProvider, Navbar, Footer, Toaster, global JSON-LD
  template.tsx              # Fade-in transition between pages
  globals.css               # Tailwind layers, CSS variables, neo-* utility classes
  sitemap.ts, robots.ts, manifest.ts
  (root)/page.tsx           # Home
  about/page.tsx
  contact/page.tsx
  services/page.tsx
  portfolio/page.tsx
  portfolio/[slug]/page.tsx # generateStaticParams + generateMetadata

components/
  home/                     # Home page sections
  about/                    # About page sections
  portfolio/                # Project list and detail
  contact/                  # Contact form and cards
  services/                 # Service cards
  layout/                   # Navbar, Footer, ModeToggle, ThemeProvider, SocialLinks
  shared/                   # Reusable components (SectionHeading, ProjectCard, TechIcon, WindowFrame, etc.)
  motion/Reveal.tsx         # Entry animation wrapper (client)
  seo/JsonLd.tsx            # Renders JSON-LD schemas
  ui/                       # shadcn/ui primitives

constants/                  # Content data source
types/                      # Types for the data in constants
lib/                        # Helpers: seo, motion, portfolio, contact, theme transition, cn()
hooks/                      # use-toast, use-mounted, use-incremental-list
public/                     # Static assets
```

## Code Conventions

- `page.tsx` only exports `metadata` and composes components. UI goes in `components/<feature>/`, reusable pieces in `components/shared/`, and logic in `lib/` or `hooks/`.
- Components are Server Components by default. Add `"use client"` only when state, effects, or event handlers are needed. For entry animations, wrap content in `<Reveal>` so the section can stay on the server.
- Buttons and CTA links use `neoButton({ tone })` from `components/shared/neo-button.ts`.
- Neobrutalist styling uses the `neo-border`, `neo-shadow`, `neo-press`, and `neo-pressed` utility classes in `app/globals.css`, plus the shadow tokens in `tailwind.config.ts`.
- Type imports use `import { type X }`. Use `catch {}` without an error variable.

## Managing Content

All content lives in `constants/`:

| File | Contents |
| --- | --- |
| `site.ts` | Site URL, name, author, OG image, contact form endpoint |
| `profile.ts` | Name, bio, photo, CV, and profile highlights |
| `portfolio.ts` | Project list (newest first) and categories |
| `experiences.ts` | Work experience |
| `education.ts` | Education history |
| `skills.ts` | Skill groups (frontend, backend, AI, tools) |
| `tech.ts` | Technology registry: name and logo per `TechId` |
| `services.ts` | Service packages |
| `contact.ts` | Email, WhatsApp, contact channels, availability |
| `socials.ts` | Social media links |
| `stats.ts` | Stats shown on Home and About |
| `navigation.ts` | Navbar menu |
| `home.ts` | Marquee text and hero tech pills |

To add a new project:

1. Save the images in `public/assets/portfolios/<slug>/`.
2. Add a new object at the top of the `portfolio` array in `constants/portfolio.ts`.
3. Fill `technologies` with IDs from `constants/tech.ts` (for example `"nextjs"`, `"postgresql"`). If a technology is missing, add it to the registry first.
4. Add `featured: true` if the project should appear on the home page.

The detail page, sitemap entry, and project metadata are generated automatically.

## Getting Started

### 1. Prerequisites

- Node.js 24.22.1 or newer in the 24.x line (see [Security and Updates](#security-and-updates)); `.nvmrc` selects 24
- pnpm 11 (the version that produced `pnpm-lock.yaml`)

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm dev
```

The site runs at `http://localhost:3000`.

## Available Scripts

- `pnpm dev`: Start the development server.
- `pnpm build`: Create a production build, including pre-rendering every project detail page.
- `pnpm start`: Serve the production build.
- `pnpm lint`: Run ESLint (flat config in `eslint.config.mjs`).

Local production flow:

```bash
pnpm build
pnpm start
```

## SEO Implementation

### 1. Global Metadata

`app/layout.tsx` sets the site-wide baseline metadata: `metadataBase`, title template, description, keywords, authors, robots, Open Graph, Twitter Card, canonical URL, and icons. Values such as the domain, author name, and OG image come from `constants/site.ts`.

### 2. Per-Page Metadata

Each route exports `metadata` directly from its `page.tsx` using the `createPageMetadata` helper in `lib/seo.ts`:

```ts
export const metadata = createPageMetadata({
    title: "About",
    path: "/about",
    description: "...",
    keywords: ["..."],
});
```

The helper fills in Open Graph (title, URL, image) and the canonical URL.

### 3. Dynamic Project Metadata

`app/portfolio/[slug]/page.tsx` uses:

- `generateStaticParams` to render every project at build time,
- `dynamicParams = false` so unknown slugs return a 404,
- `generateMetadata` for the title, description, keywords (from technology names), Open Graph image, and Twitter Card of each project.

### 4. Structured Data (JSON-LD)

Schemas are built by functions in `lib/seo.ts` and rendered through `components/seo/JsonLd.tsx`:

- All pages: `Person` and `WebSite`.
- `/portfolio`: `BreadcrumbList`.
- `/portfolio/[slug]`: `SoftwareApplication` and `BreadcrumbList`.

### 5. Sitemap and Robots

- `app/sitemap.ts` generates `/sitemap.xml` with the static pages and every project from `constants/portfolio.ts`.
- `app/robots.ts` generates `/robots.txt` pointing to the sitemap.

There is no `postbuild` step and no sitemap file in `public/`. New projects are added to the sitemap automatically.

### 6. Verifying SEO After Deployment

1. Check the page source to confirm the title and meta tags match the route.
2. Test the Open Graph preview in a social debugger.
3. Make sure `/robots.txt` and `/sitemap.xml` are reachable.
4. Submit the sitemap to Google Search Console.
5. Run a Lighthouse audit to check the SEO score and technical issues.

## Security and Updates

- **Node.js:** `package.json` requires `>=24.22.1 <25`. The October 21, 2026 Node.js security release (10 CVEs, including a Brotli decoder out-of-bounds write, CVE-2026-111497) is fixed in 24.22.1, 22.23.4, and 26.12.1. Node.js 20 and older receive no fix. Check the running version with `node -v`, and set the same minimum on your hosting platform.
- **Next.js:** the 14.x line is no longer patched, and the 2026 advisories (including the image-optimization RCEs) affect it. This project runs the 16.x line (16.4.3). Releases are announced on the [Next.js blog](https://nextjs.org/blog); patch to the newest 16.x when a security release ships.
- **Dependencies:** run `pnpm audit` regularly. Remaining findings are build and lint tooling (ESLint, Tailwind 3) that never ship to production.

## Deployment

The site can be deployed to any platform that supports Next.js (for example, Vercel).

1. Install dependencies: `pnpm install`
2. Build: `pnpm build`
3. Start production: `pnpm start`

Make sure the production domain matches `SITE.url` in `constants/site.ts`.

## Troubleshooting

- A new project does not show up:
  - make sure its `slug` is unique and every ID in `technologies` exists in `constants/tech.ts`,
  - run `pnpm build` again so the detail page is generated.
- Metadata does not change:
  - make sure the metadata is exported from the correct route's `page.tsx`,
  - hard refresh the browser and redeploy if needed.
- A remote image does not load:
  - add its hostname to `images.remotePatterns` in `next.config.mjs`.
- The contact form fails to send:
  - check `SITE.contactFormEndpoint` in `constants/site.ts` and make sure the Google Apps Script is still deployed.
