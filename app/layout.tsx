import { type Metadata } from "next";
import { type ReactElement, type ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { Toaster } from "@/components/ui/toaster";
import { SITE } from "@/constants/site";
import { caveat, inter } from "@/lib/fonts";
import { personSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
    metadataBase: new URL(SITE.url),
    title: {
        default: `${SITE.author} | Personal Website`,
        template: `${SITE.author} | %s`,
    },
    description: SITE.description,
    keywords: [
        "ammar",
        "ahmad ammar",
        "musyaffa",
        "ammar musyaffa",
        "ahmad ammar musyaffa",
        "ahmad ammar um",
        "ahmad ammar malang",
        "ahmadammarm",
        "ammar developer",
        "ammar portfolio",
        "ahmad ammar portfolio",
        "software engineer",
        "software engineer indonesia",
        "software engineer portfolio",
        "software engineering",
        "fullstack developer",
        "fullstack developer indonesia",
        "fullstack development",
        "backend developer",
        "frontend developer",
        "web developer malang",
        "next.js developer indonesia",
        "laravel developer",
        "golang developer",
        "fastapi developer",
        "vue developer",
        "astro developer",
        "postgresql",
        "mysql",
        "rest api development",
        "relational database design",
        "scalable web applications",
        "universitas negeri malang",
        "informatics engineering um",
    ],
    authors: [{ name: SITE.author, url: SITE.url }],
    creator: SITE.author,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: `${SITE.author} | Fullstack Developer & AI Enthusiast`,
        description: SITE.description,
        url: SITE.url,
        siteName: SITE.name,
        images: [{ ...SITE.ogImage, alt: `${SITE.author} - Fullstack Developer Portfolio` }],
        locale: "en_US",
        alternateLocale: ["id_ID"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `${SITE.author} | Fullstack Developer`,
        description: SITE.description,
        images: [SITE.ogImage.url],
        creator: SITE.twitterHandle,
    },
    icons: {
        icon: [{ url: "/favicon.ico" }, { url: "/a.png", type: "image/png" }],
        shortcut: "/favicon.ico",
        apple: "/a.png",
    },
    alternates: {
        canonical: SITE.url,
    },
};

export default function RootLayout({ children }: { children: ReactNode }): ReactElement {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} ${caveat.variable}`}>
                <JsonLd schemas={[personSchema(), websiteSchema()]} />
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <Navbar />
                    {/* pt-20 offsets the fixed h-20 navbar */}
                    <main className="pt-20">{children}</main>
                    <Footer />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
