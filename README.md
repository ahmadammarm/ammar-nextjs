# Ammar Next.js Portfolio

Website portofolio personal untuk Ahmad Ammar Musyaffa, seorang fullstack developer dengan ketertarikan pada integrasi AI. Proyek ini dibangun dengan Next.js App Router, TypeScript, dan Tailwind CSS dengan gaya visual Neobrutalism.

## Daftar Isi

- [Ringkasan Proyek](#ringkasan-proyek)
- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Struktur Direktori](#struktur-direktori)
- [Konvensi Kode](#konvensi-kode)
- [Mengelola Konten](#mengelola-konten)
- [Setup dan Menjalankan Proyek](#setup-dan-menjalankan-proyek)
- [Scripts yang Tersedia](#scripts-yang-tersedia)
- [Implementasi SEO](#implementasi-seo)
- [Deployment](#deployment)
- [Troubleshooting Singkat](#troubleshooting-singkat)

## Ringkasan Proyek

Website ini menampilkan:

- halaman utama (hero, ringkasan profil, statistik, project unggulan, dan ajakan kontak),
- halaman About (profil, statistik, pengalaman kerja, pendidikan, dan skill),
- halaman Portfolio dengan filter kategori dan infinite scroll,
- halaman detail project per slug (`/portfolio/[slug]`) yang di-render statis saat build,
- halaman Services dengan tombol pemesanan via WhatsApp,
- halaman Contact dengan form yang divalidasi.

Konten dikelola secara data-driven melalui folder `constants/`, sehingga pembaruan konten tidak perlu mengubah komponen UI.

## Fitur Utama

- App Router (Next.js 14) dengan route group dan dynamic route yang di-generate statis (`generateStaticParams`).
- Komponen server-first: hanya bagian interaktif yang menjadi client component.
- Dark mode menggunakan `next-themes` dengan transisi lingkaran (View Transitions API).
- Animasi masuk menggunakan Framer Motion melalui wrapper `Reveal`.
- Form kontak dengan React Hook Form + Zod.
- SEO on-page menggunakan Metadata API Next.js dan JSON-LD.
- Sitemap, robots.txt, dan web manifest bawaan Next.js (`app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`).
- TypeScript strict tanpa `any`, `unknown`, maupun non-null assertion (ditegakkan oleh ESLint).

## Tech Stack

### Core

- Next.js 14 (App Router)
- React 18
- TypeScript 5

### UI dan Styling

- Tailwind CSS
- shadcn/ui (hanya `button`, `toast`, dan `toaster` di `components/ui/`)
- class-variance-authority
- Framer Motion
- Lucide React + React Icons

### Forms dan Validasi

- React Hook Form
- Zod

### Utility

- clsx + tailwind-merge
- react-infinite-scroll-component

### Package Manager

- pnpm (proyek hanya menyertakan `pnpm-lock.yaml`)

## Struktur Direktori

```text
app/                        # Hanya route: metadata + komposisi komponen
  layout.tsx                # Root layout: ThemeProvider, Navbar, Footer, Toaster, JSON-LD global
  template.tsx              # Transisi fade-in antar halaman
  globals.css               # Layer Tailwind, CSS variables, utility class neo-*
  sitemap.ts, robots.ts, manifest.ts
  (root)/page.tsx           # Home
  about/page.tsx
  contact/page.tsx
  services/page.tsx
  portfolio/page.tsx
  portfolio/[slug]/page.tsx # generateStaticParams + generateMetadata

components/
  home/                     # Section halaman utama
  about/                    # Section halaman About
  portfolio/                # Daftar dan detail project
  contact/                  # Form dan kartu kontak
  services/                 # Kartu layanan
  layout/                   # Navbar, Footer, ModeToggle, ThemeProvider, SocialLinks
  shared/                   # Komponen reusable (SectionHeading, ProjectCard, TechIcon, WindowFrame, dll)
  motion/Reveal.tsx         # Wrapper animasi masuk (client)
  seo/JsonLd.tsx            # Render schema JSON-LD
  ui/                       # Primitive shadcn/ui

constants/                  # Sumber data konten
types/                      # Tipe untuk data di constants
lib/                        # Helper: seo, motion, portfolio, contact, theme transition, cn()
hooks/                      # use-toast, use-incremental-list
public/                     # Asset statis
```

## Konvensi Kode

- `page.tsx` hanya mengekspor `metadata` dan menyusun komponen. UI ditaruh di `components/<fitur>/`, komponen yang dipakai ulang di `components/shared/`, dan logika di `lib/` atau `hooks/`.
- Komponen default-nya Server Component. Tambahkan `"use client"` hanya jika butuh state, effect, atau event handler. Untuk animasi masuk, bungkus konten dengan `<Reveal>` agar section tetap di server.
- Tombol dan link CTA memakai `neoButton({ tone })` dari `components/shared/neo-button.ts`.
- Gaya Neobrutalism memakai utility class `neo-border`, `neo-shadow`, `neo-press`, dan `neo-pressed` di `app/globals.css`, serta token shadow di `tailwind.config.ts`.
- Import tipe memakai `import { type X }`. Gunakan `catch {}` tanpa variabel error.

## Mengelola Konten

Semua konten berada di `constants/`:

| File | Isi |
| --- | --- |
| `site.ts` | URL situs, nama, author, gambar OG, endpoint form kontak |
| `profile.ts` | Nama, bio, foto, CV, dan highlight profil |
| `portfolio.ts` | Daftar project (urutan terbaru di atas) dan kategori |
| `experiences.ts` | Pengalaman kerja |
| `education.ts` | Riwayat pendidikan |
| `skills.ts` | Kelompok skill (frontend, backend, AI, tools) |
| `tech.ts` | Registry teknologi: nama dan logo per `TechId` |
| `services.ts` | Paket layanan |
| `contact.ts` | Email, WhatsApp, channel kontak, ketersediaan |
| `socials.ts` | Link media sosial |
| `stats.ts` | Statistik di Home dan About |
| `navigation.ts` | Menu navbar |
| `home.ts` | Teks marquee dan tech pill di hero |

Contoh menambah project baru:

1. Simpan gambar di `public/assets/portfolios/<slug>/`.
2. Tambahkan objek baru di bagian atas array `portfolio` di `constants/portfolio.ts`.
3. Isi `technologies` dengan ID dari `constants/tech.ts` (misalnya `"nextjs"`, `"postgresql"`). Jika teknologinya belum ada, tambahkan dulu ke registry tersebut.
4. Tambahkan `featured: true` jika project ingin tampil di halaman utama.

Halaman detail, sitemap, dan metadata project akan ikut ter-generate otomatis.

## Setup dan Menjalankan Proyek

### 1. Prasyarat

- Node.js 18.17+ (disarankan versi LTS terbaru)
- pnpm 8+

### 2. Install dependency

```bash
pnpm install
```

### 3. Jalankan development server

```bash
pnpm dev
```

Website akan berjalan di `http://localhost:3000`.

## Scripts yang Tersedia

- `pnpm dev`: Menjalankan server development.
- `pnpm build`: Build production Next.js, termasuk pre-render semua halaman detail project.
- `pnpm start`: Menjalankan hasil build production.
- `pnpm lint`: Menjalankan ESLint.

Contoh alur production lokal:

```bash
pnpm build
pnpm start
```

## Implementasi SEO

### 1. Metadata Global

`app/layout.tsx` mengatur metadata dasar untuk seluruh situs: `metadataBase`, template title, description, keywords, authors, robots, Open Graph, Twitter Card, canonical URL, dan icons. Nilai seperti domain, nama author, dan gambar OG diambil dari `constants/site.ts`.

### 2. Metadata Per Halaman

Setiap route mengekspor `metadata` langsung dari `page.tsx` menggunakan helper `createPageMetadata` di `lib/seo.ts`:

```ts
export const metadata = createPageMetadata({
    title: "About",
    path: "/about",
    description: "...",
    keywords: ["..."],
});
```

Helper ini otomatis mengisi Open Graph (judul, URL, gambar) dan canonical URL.

### 3. Metadata Dinamis Detail Project

`app/portfolio/[slug]/page.tsx` menggunakan:

- `generateStaticParams` untuk me-render semua project saat build,
- `dynamicParams = false` sehingga slug yang tidak dikenal menghasilkan 404,
- `generateMetadata` untuk title, description, keywords (dari nama teknologi), Open Graph image, dan Twitter Card per project.

### 4. Structured Data (JSON-LD)

Schema dibuat oleh fungsi di `lib/seo.ts` dan di-render melalui `components/seo/JsonLd.tsx`:

- Semua halaman: `Person` dan `WebSite`.
- `/portfolio`: `BreadcrumbList`.
- `/portfolio/[slug]`: `SoftwareApplication` dan `BreadcrumbList`.

### 5. Sitemap dan Robots

- `app/sitemap.ts` menghasilkan `/sitemap.xml` berisi halaman statis dan semua halaman project dari `constants/portfolio.ts`.
- `app/robots.ts` menghasilkan `/robots.txt` yang menunjuk ke sitemap.

Tidak ada langkah `postbuild` atau file sitemap di `public/`. Project baru otomatis masuk sitemap.

### 6. Cara Verifikasi SEO Setelah Deploy

1. Periksa source page untuk memastikan title dan meta sesuai route.
2. Uji preview Open Graph di social debugger.
3. Pastikan `/robots.txt` dan `/sitemap.xml` dapat diakses.
4. Submit sitemap ke Google Search Console.
5. Jalankan audit Lighthouse untuk memeriksa SEO score dan issue teknis.

## Deployment

Deployment dapat dilakukan ke platform yang mendukung Next.js (contoh: Vercel).

1. Install dependency: `pnpm install`
2. Build: `pnpm build`
3. Jalankan production: `pnpm start`

Pastikan domain production sama dengan `SITE.url` di `constants/site.ts`.

## Troubleshooting Singkat

- Project baru tidak muncul:
  - pastikan `slug` unik dan semua ID di `technologies` ada di `constants/tech.ts`,
  - jalankan ulang `pnpm build` agar halaman detail ikut di-generate.
- Metadata tidak berubah:
  - pastikan metadata diekspor dari `page.tsx` route yang benar,
  - lakukan hard refresh browser dan redeploy bila perlu.
- Gambar remote tidak tampil:
  - tambahkan hostname-nya ke `images.remotePatterns` di `next.config.mjs`.
- Form kontak gagal terkirim:
  - periksa `SITE.contactFormEndpoint` di `constants/site.ts` dan pastikan Google Apps Script masih aktif.
