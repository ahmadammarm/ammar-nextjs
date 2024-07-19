import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ammar | Personal Website",
  description: "Ammar's personal website to showcase his portfolios. He is a Full Stack Web Developer from Indonesia.",
  keywords: "web developer, full stack, laravel, nextjs, tailwindcss, bootstrap, figma, laravel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
