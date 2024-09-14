// rootlayout.tsx (tanpa "use client")
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RootLayoutClient from './RootLayoutClient';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmad 'Ammar Musyaffa'",
  description: "Ahmad 'Ammar Musyaffa' adalah seorang Full Stack Web Developer dari Indonesia yang memamerkan portofolio dan proyeknya di website pribadi ini.",
  keywords: [
    "Ahmad Ammar Musyaffa",
    "web developer Indonesia",
    "full stack developer",
    "Laravel",
    "Next.js",
    "TailwindCSS",
    "Bootstrap",
    "Figma",
    "portofolio web developer",
  ],
  authors: [{ name: "Ahmad 'Ammar Musyaffa'", url: "https://ahmadammar.vercel.app" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Ahmad 'Ammar Musyaffa'",
    description: "Ahmad 'Ammar Musyaffa' adalah seorang Full Stack Web Developer dari Indonesia yang memamerkan portofolio dan proyeknya di website pribadi ini.",
    images: [{ url: "/assets/metadata.png" }],
    url: "https://ahmadammar.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad 'Ammar Musyaffa'",
    description: "Ahmad 'Ammar Musyaffa' adalah seorang Full Stack Web Developer dari Indonesia yang memamerkan portofolio dan proyeknya di website pribadi ini.",
    images: ["/assets/metadata.png"],
  },
  icons: {
    icon: "/a.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}

