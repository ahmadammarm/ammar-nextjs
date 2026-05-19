# GEMINI.md - Ahmad Ammar Portfolio

This project is a personal portfolio website for Ahmad Ammar Musyaffa, built with Next.js 14, TypeScript, and Tailwind CSS. It features a data-driven architecture and a Neobrutalist design aesthetic.

## Project Overview

- **Core Technologies:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion.
- **UI Components:** shadcn/ui (Radix UI primitives) located in `components/ui/`.
- **Styling:** Custom "Neobrutalist" style defined in `tailwind.config.ts` (e.g., `shadow-neo`, `border-2 border-black`).
- **Content Management:** Data-driven approach using the `constants/` directory. Updating files in `constants/` (e.g., `portfolio.ts`, `profile.ts`) updates the site content without needing to modify UI components.
- **SEO:** Optimized using Next.js Metadata API and `next-sitemap`. Global metadata is in `app/layout.tsx`, and dynamic metadata for portfolio projects is generated in `app/portfolio/[slug]/page.tsx`.

## Building and Running

### Prerequisites

- **Node.js:** 18.17+
- **Package Manager:** `pnpm` (recommended)

### Commands

- **Development:** `pnpm dev`
- **Build Production:** `pnpm build` (triggers `postbuild` for sitemap generation)
- **Start Production:** `pnpm start`
- **Linting:** `pnpm lint`
- **Sitemap Generation:** `pnpm postbuild` (automatically runs after `build`)

## Development Conventions

### Content Updates
Always look in `constants/` first when updating site content (about, portfolio, skills, etc.). The UI is designed to consume these constants.

### Styling and UI
- Follow the Neobrutalist design pattern: use `shadow-neo` and `border-2 border-black` (or `dark:border-white`) for cards and buttons.
- Use `brand-blue` (`#007AFF`) for highlights and primary call-to-action elements.
- For new UI components, use `npx shadcn-ui@latest add <component-name>` to maintain consistency with the existing library.

### Folder Structure
- `app/`: Contains the routes and layouts (Next.js App Router).
- `components/`:
  - `Sections/`: Reusable high-level sections for the home page and other pages.
  - `ui/`: Low-level UI primitives from shadcn/ui.
- `constants/`: The "source of truth" for site content.
- `types/`: TypeScript definitions for the constants and project data.
- `public/assets/`: All images and documents.

### SEO & Metadata
- When adding new routes, ensure they have a corresponding `layout.tsx` or `page.tsx` with appropriate metadata.
- Update `next-sitemap.config.js` when adding new static or dynamic routes to ensure they are included in the sitemap.
