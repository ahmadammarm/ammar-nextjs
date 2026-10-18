# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 14 personal portfolio website for Ahmad Ammar Musyaffa, a fullstack developer. The site is data-driven, Neobrutalist in styling, and showcases projects, experience, skills, services, and contact information.

## Commands

```bash
pnpm dev        # Start development server on http://localhost:3000
pnpm build      # Build for production (pre-renders all /portfolio/[slug] pages)
pnpm start      # Start production server
pnpm lint       # Run ESLint check
```

Package manager: `pnpm` (`pnpm-lock.yaml` is the only lockfile).

## Architecture

### Directory Structure

```text
app/                        # Routes only: metadata + composition, no UI logic
  layout.tsx                # Root layout: ThemeProvider, Navbar, Footer, Toaster, site-wide JSON-LD
  template.tsx              # Page fade-in transition
  globals.css               # Tailwind layers, CSS variables, neo-* utility classes
  sitemap.ts, robots.ts, manifest.ts
  (root)/page.tsx           # Home
  about/page.tsx
  contact/page.tsx
  services/page.tsx
  portfolio/page.tsx
  portfolio/[slug]/page.tsx # generateStaticParams + generateMetadata

components/
  home/                     # HeroSection, TechMarquee, HomeAbout, FeaturedProjects
  about/                    # AboutSection, StatsSection, ExperiencesSection, EducationSection, SkillsSection
  portfolio/                # PortfolioSection, PortfolioExplorer (client), ProjectDetail, ProjectGallery (client)
  contact/                  # ContactSection, ContactForm (client), ContactChannelCard (client)
  services/                 # ServicesSection, ServiceCard
  layout/                   # Navbar, NavLink, Footer, ModeToggle, ThemeProvider, SocialLinks
  shared/                   # Reusable pieces: SectionHeading, Eyebrow, ProjectCard, TechIcon, WindowFrame,
                            # NeoTabs, StatCard, Timeline, ContactCta, Loader, neo-button (cva)
  motion/Reveal.tsx         # Client entry-animation wrapper
  seo/JsonLd.tsx            # Renders JSON-LD schemas passed as props
  ui/                       # shadcn/ui primitives (only button, toast, toaster are kept)

constants/                  # Source of truth for all content (portfolio, profile, experiences, site, tech, ...)
types/                      # Types for constants (plain .ts modules, imported explicitly)
lib/                        # utils (cn), seo, motion presets, portfolio queries, contact schema + submit, theme transition
hooks/                      # use-toast, use-incremental-list
public/                     # Static assets
```

### Key Conventions

- **Pages only compose**: `app/**/page.tsx` exports `metadata` and renders feature components. Put UI in `components/<feature>/`, reusable pieces in `components/shared/`, logic in `lib/` or `hooks/`.
- **Server-first**: components are Server Components by default. Only add `"use client"` for state, effects, or event handlers. For entry animations, wrap content in `<Reveal>` (`components/motion/Reveal.tsx`, presets in `lib/motion.ts`) instead of making the section a client component.
- **Data-driven content**: copy and list items live in `constants/*.ts`, typed by `types/*.ts`. Field names are in English. Edit content in `constants/`, not in components.
  - `constants/site.ts` holds the site URL, author, OG image, and contact form endpoint. Never hard-code the domain; use `SITE` or `absoluteUrl()` from `lib/seo.ts`.
  - `constants/tech.ts` is the technology registry. Projects, experiences, and skills reference technologies by `TechId`; names and logos come from the registry.
  - `constants/portfolio.ts` is ordered newest first. Set `featured: true` to show a project on the home page.
  - `constants/contact.ts` exports `EMAIL`, `WHATSAPP_URL`, and `whatsappLink(message)`.
- **Strict typing**: tsconfig enables `strict`, `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`. ESLint forbids `any`, `unknown`, and non-null assertions (`!`), and enforces `import { type X }` for type imports. Use optional catch binding (`catch {}`) instead of an untyped error.
- **Styling (Neobrutalism)**:
  - Shadow tokens in `tailwind.config.ts`: `shadow-neo`, `neo-hover`, `neo-active`, `neo-xs`, `neo-sm`, `neo-md`, `neo-lg` (each with a `-dark` variant).
  - Utility classes in `app/globals.css`: `neo-border`, `neo-shadow(-xs|-sm|-md|-lg)`, `neo-press` / `neo-press-sm` (hover lift, press down), `neo-pressed` (selected state).
  - Buttons and CTA links use `neoButton({ tone })` from `components/shared/neo-button.ts`, combined with padding/size classes via `cn()`.
  - Brand accent: `brand-blue` (`#007AFF`).
- **UI primitives**: `components/ui/` is shadcn/ui. Add new ones with `pnpm dlx shadcn-ui@latest add <component>`.
- **SEO & Metadata**:
  - Root layout sets baseline metadata and renders Person + WebSite JSON-LD.
  - Each route builds its metadata with `createPageMetadata({ title, description, path, ... })` from `lib/seo.ts`.
  - Portfolio detail pages use `generateMetadata` and `generateStaticParams` (`dynamicParams = false`, unknown slugs return 404).
  - Schema builders (`personSchema`, `websiteSchema`, `breadcrumbSchema`, `projectSchema`) live in `lib/seo.ts` and render through `components/seo/JsonLd.tsx`.
  - `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` at request/build time; there is no postbuild step.
- **Contact form**: `components/contact/ContactForm.tsx` uses react-hook-form with the zod schema in `lib/contact.ts`. `submitContactForm` posts to the Google Apps Script endpoint, which expects the message under the `pesan` key.
- **Path aliases**: `@/*` maps to the project root directory.
