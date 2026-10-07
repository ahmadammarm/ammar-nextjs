# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 14 personal portfolio website for Ahmad Ammar Musyaffa, a fullstack developer. The site is data-driven, Neobrutalist in styling, and showcases projects, experience, skills, and contact information.

## Commands

```bash
pnpm dev        # Start development server on http://localhost:3000
pnpm build      # Build for production (automatically triggers postbuild next-sitemap)
pnpm start      # Start production server
pnpm lint       # Run ESLint check
```

Package manager: `pnpm` (`pnpm-lock.yaml` is present).

## Architecture

### Directory Structure

```text
app/                    # Next.js App Router routes and layouts
  layout.tsx            # Root layout, ThemeProvider, JsonLd, site-wide metadata
  globals.css           # Global styles and Tailwind CSS variables
  (root)/               # Home page route group (Hero, Featured, etc.)
  about/                # About page and route-specific metadata
  contact/              # Contact form and route-specific metadata
  portfolio/            # Portfolio listing and dynamic [slug] detail pages

components/
  ui/                   # shadcn/ui primitives (Radix UI based)
  Sections/             # High-level section components (HeroSection, AboutSection, etc.)
  Navbar.tsx            # Main navigation with mobile drawer
  Footer.tsx            # Footer component
  JsonLd.tsx            # Schema.org JSON-LD component for SEO
  theme-provider.tsx    # next-themes provider setup

constants/              # Source of truth for site content (portfolio.ts, profile.ts, skills.ts, etc.)
types/                  # TypeScript interfaces matching constants data structures
lib/utils.ts            # cn() helper (clsx + tailwind-merge)
public/                 # Static assets, images, and next-sitemap output files
```

### Key Conventions

- **Data-Driven Content**: Website copy and list items live in `constants/*.ts` typed via `types/*.d.ts`. Update content directly in `constants/` rather than modifying page/section components.
- **Styling Pattern (Neobrutalism)**:
  - Custom Tailwind box shadows: `shadow-neo` (`4px 4px 0px 0px rgba(0,0,0,1)`), `shadow-neo-hover`, `shadow-neo-dark`, `shadow-neo-hover-dark`.
  - Borders: standard Neobrutalist border treatment `border-2 border-black` / `dark:border-white`.
  - Brand accents: `brand-blue` (`#007AFF`) and `teal-500`.
- **UI Primitives**: Located in `components/ui/` based on shadcn/ui. Use `pnpm dlx shadcn-ui@latest add <component>` if new components are needed.
- **SEO & Metadata**:
  - Root layout (`app/layout.tsx`) configures baseline metadata, canonical URL (`https://ahmadammar.my.id`), and Open Graph defaults.
  - Sub-routes declare page-specific metadata in `layout.tsx`.
  - Dynamic portfolio pages generate metadata via `generateMetadata` in `app/portfolio/[slug]/page.tsx`.
  - Sitemap configuration lives in `next-sitemap.config.js` and outputs to `public/` on build.
- **Path Aliases**: `@/*` maps to the project root directory.
