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

const HOME_TITLE = `${SITE.author} | Fullstack Developer & AI Enthusiast`;

export const metadata: Metadata = {
    metadataBase: new URL(SITE.url),
    title: {
        default: HOME_TITLE,
        template: `${SITE.author} | %s`,
    },
    description: SITE.description,
    keywords: [
        "ahmad ammar musyaffa",
        "ahmad ammar",
        "ammar musyaffa",
        "fullstack developer",
        "next.js developer indonesia",
        "software engineering",
        "fullstack development",
        "web automation expert",
        "SaaS developer",
        "custom software solutions",
        "intelligent web applications",
        "ahmad ammar um",
        "software engineer portfolio",
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
        title: HOME_TITLE,
        description: `Portfolio ${SITE.author}, a fullstack developer specializing in Next.js, Node.js, Laravel, Go, and AI-powered applications.`,
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
        description: "Fullstack developer with experience in Next.js, Node.js, Laravel, Go, and AI integration.",
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
