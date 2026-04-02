# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 personal portfolio website for Ahmad Ammar Musyaffa, a backend-focused software engineer. The site showcases his projects, experience, skills, and contact information.

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

Note: This project uses pnpm (pnpm-lock.yaml present).

## Architecture

### Directory Structure

```
app/                    # Next.js App Router
  (root)/              # Route group - home page
  about/               # About page
  contact/             # Contact page
  portfolio/            # Portfolio listing + dynamic [slug] routes
  layout.tsx            # Root layout with Navbar, Footer, ThemeProvider
  globals.css           # Global styles + CSS variables

components/
  ui/                   # shadcn/ui components (Radix UI primitives)
  Sections/             # Page section components (HeroSection, AboutSection, etc.)
  Navbar.tsx            # Navigation with mobile menu
  Footer.tsx            # Footer component
  theme-provider.tsx     # next-themes provider

constants/              # Static data files (portfolio.ts, about.ts, skills.ts, etc.)
lib/utils.ts           # cn() utility for Tailwind class merging
types/                  # TypeScript interfaces for constant data structures
```

### Key Patterns

- **Data-driven**: Content is stored in `constants/*.ts` files and typed via `types/*.d.ts`
- **shadcn/ui**: UI components live in `components/ui/` - these are copied from shadcn/ui library
- **Path aliases**: `@/` maps to project root (components/, constants/, lib/, types/)
- **Route groups**: `(root)` group contains the home page without affecting URL structure
- **Dynamic routes**: Portfolio detail pages at `/portfolio/[slug]`

### Styling

- Tailwind CSS with CSS variables for theming
- Dark mode via `next-themes` (class-based, toggled in theme-provider)
- Framer Motion for scroll animations (whileInView patterns)
- Primary accent color: teal-500

### Dependencies

- Next.js 14 with App Router
- Radix UI primitives (via shadcn/ui)
- Framer Motion for animations
- React Hook Form + Zod for forms
- next-themes for dark/light mode
