# Ammar Next.js Portfolio

Website portofolio personal untuk Ahmad Ammar Musyaffa, seorang fullstack developer dengan ketertarikan pada integrasi AI. Proyek ini dibangun dengan Next.js App Router, TypeScript, Tailwind CSS, serta komponen UI berbasis Radix (shadcn/ui).

## Daftar Isi

- [Ringkasan Proyek](#ringkasan-proyek)
- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Struktur Direktori](#struktur-direktori)
- [Setup dan Menjalankan Proyek](#setup-dan-menjalankan-proyek)
- [Scripts yang Tersedia](#scripts-yang-tersedia)
- [Implementasi SEO](#implementasi-seo)
- [Deployment](#deployment)
- [Troubleshooting Singkat](#troubleshooting-singkat)

## Ringkasan Proyek

Website ini menampilkan:

- halaman utama dengan section profil, pengalaman, skill, dan kontak,
- halaman About,
- halaman Contact,
- halaman Portfolio dengan daftar project,
- halaman detail project dinamis per slug (`/portfolio/[slug]`).

Konten utama dikelola secara data-driven melalui folder `constants/`, sehingga pembaruan konten bisa dilakukan tanpa mengubah banyak komponen UI.

## Fitur Utama

- App Router (Next.js 14) dengan route group dan dynamic route.
- Dark mode menggunakan `next-themes`.
- UI reusable dengan shadcn/ui + Radix UI primitives.
- Animasi menggunakan Framer Motion.
- Validasi form dengan React Hook Form + Zod.
- SEO on-page menggunakan Metadata API Next.js.
- Sitemap dan robots.txt otomatis via `next-sitemap` pada proses build.

## Tech Stack

### Core

- Next.js 14 (App Router)
- React 18
- TypeScript 5

### UI dan Styling

- Tailwind CSS
- shadcn/ui (komponen di `components/ui/`)
- Radix UI primitives
- Framer Motion
- Lucide React + React Icons

### Forms dan Validasi

- React Hook Form
- Zod

### SEO dan Utility

- Next.js Metadata API
- next-sitemap
- clsx + tailwind-merge

### Package Manager

- pnpm (direkomendasikan, karena proyek menyertakan `pnpm-lock.yaml`)

## Struktur Direktori

Berikut struktur inti yang paling sering digunakan:

```text
app/
	layout.tsx                 # Root layout + metadata global
	globals.css                # Global styles + CSS variables
	(root)/page.tsx            # Home page
	about/                     # About page
	contact/                   # Contact page
	portfolio/
		page.tsx                 # Portfolio listing
		[slug]/page.tsx          # Dynamic detail page + dynamic metadata

components/
	Sections/                  # Section komponen untuk halaman utama
	ui/                        # shadcn/ui components
	Navbar.tsx
	Footer.tsx

constants/                   # Sumber data konten (portfolio, profile, skills, dll)
types/                       # Type definitions untuk data constants
public/                      # Asset publik + output sitemap/robots
```

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

Website akan berjalan di:

```text
http://localhost:3000
```

## Scripts yang Tersedia

- `pnpm dev`: Menjalankan server development.
- `pnpm build`: Build production Next.js.
- `pnpm start`: Menjalankan hasil build production.
- `pnpm lint`: Menjalankan ESLint.
- `pnpm postbuild`: Menjalankan `next-sitemap` (otomatis setelah `pnpm build`).

Contoh alur production lokal:

```bash
pnpm build
pnpm start
```

## Implementasi SEO

Implementasi SEO pada proyek ini menggunakan kombinasi Metadata API Next.js dan `next-sitemap`.

### 1. Metadata Global (Root Layout)

Di `app/layout.tsx`, metadata global sudah dikonfigurasi, mencakup:

- `metadataBase`
- `title`, `description`, `keywords`
- `authors`, `creator`
- `robots` dan `googleBot`
- Open Graph (`openGraph`)
- Twitter Card (`twitter`)
- canonical URL (`alternates.canonical`)
- favicon/icons (`icons`)

Dengan pendekatan ini, halaman memiliki baseline SEO yang konsisten secara site-wide.

### 2. Metadata Per Halaman

Route `about`, `contact`, dan `portfolio` masing-masing memiliki metadata spesifik di:

- `app/about/layout.tsx`
- `app/contact/layout.tsx`
- `app/portfolio/layout.tsx`

Manfaatnya:

- title dan description lebih relevan per intent halaman,
- Open Graph URL lebih presisi,
- keyword lebih kontekstual.

### 3. Dynamic SEO untuk Portfolio Detail

Pada `app/portfolio/[slug]/page.tsx`, digunakan `generateMetadata` untuk menghasilkan metadata dinamis berbasis data project.

Metadata dinamis yang dihasilkan mencakup:

- title dan description per project,
- keywords berdasarkan nama project dan teknologi,
- Open Graph image dari gambar project,
- Twitter Card image per project,
- fallback metadata saat slug tidak ditemukan.

Ini penting untuk meningkatkan kualitas preview link dan relevansi konten pada tiap halaman detail project.

### 4. Sitemap dan Robots

Proyek menggunakan `next-sitemap` dengan konfigurasi di `next-sitemap.config.js`.

Konfigurasi utama:

- `siteUrl`: domain utama,
- `generateRobotsTxt: true`,
- daftar URL statis (home/about/portfolio/contact),
- daftar URL dinamis portfolio (berdasarkan slug tertentu),
- nilai `changefreq`, `priority`, dan `lastmod`.

Output hasil build berada di folder `public/`:

- `public/sitemap.xml`
- `public/sitemap-0.xml`
- `public/robots.txt`

### 5. Cara Verifikasi SEO Setelah Deploy

Langkah yang direkomendasikan:

1. Periksa source page untuk memastikan title/meta sesuai route.
2. Uji preview Open Graph di social debugger.
3. Pastikan `https://domain.com/robots.txt` dan `https://domain.com/sitemap.xml` dapat diakses.
4. Submit sitemap ke Google Search Console.
5. Jalankan audit Lighthouse untuk memeriksa SEO score dan issue teknis.

## Deployment

Deployment dapat dilakukan ke platform yang mendukung Next.js (contoh: Vercel).

Langkah umum:

1. Install dependency: `pnpm install`
2. Build: `pnpm build`
3. Jalankan production: `pnpm start`

Catatan:

- Karena ada script `postbuild`, sitemap dan robots akan otomatis di-generate setelah proses build.
- Pastikan domain production konsisten dengan `siteUrl` pada `next-sitemap.config.js` dan `metadataBase` pada `app/layout.tsx`.

## Troubleshooting Singkat

- Perubahan konten portfolio tidak muncul di sitemap:
	- pastikan slug baru ikut di konfigurasi sitemap,
	- jalankan ulang `pnpm build` agar `postbuild` men-generate sitemap terbaru.
- Metadata tidak berubah:
	- pastikan route metadata berada di file layout/page yang benar,
	- lakukan hard refresh browser dan redeploy bila perlu.
- Asset OG image tidak tampil:
	- pastikan path image valid dan dapat diakses publik.

---

Dokumentasi ini bisa dikembangkan lebih lanjut dengan menambahkan bagian kontribusi, changelog, dan workflow CI/CD jika proyek mulai melibatkan kolaborasi tim.
