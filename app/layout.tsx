import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://ahmadammar.my.id"),

    title: "Ammar | Personal Website",

    description:
        "Fullstack developer with experience building end-to-end web applications using Next.js, Node.js, Laravel, and Go, while exploring AI integration for intelligent and data-driven applications.",

    keywords: [
        "ahmad ammar musyaffa",
        "ahmad ammar",
        "ammar musyaffa",
        "ammar",
        "ahmad ammar m",
        "ahmad ammar um",
        "ahmad ammar universitas negeri malang",
        "ammar musyaffa developer",
        "ammar musyaffa indonesia",
        "ahmad ammar indonesia",
        "ammar indonesia",
        "ammar portfolio",
        "ahmad ammar portfolio",
        "ammar musyaffa portfolio",
    ],

    authors: [
        {
            name: "Ahmad Ammar Musyaffa",
            url: "https://ahmadammar.my.id",
        },
    ],

    creator: "Ahmad Ammar Musyaffa",

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
        title: "Ammar | Fullstack Developer & AI Enthusiast",
        description:
            "Portfolio Ahmad Ammar Musyaffa, a fullstack developer specializing in Next.js, Node.js, Laravel, Go, and AI-powered applications.",
        url: "https://ahmadammar.my.id",
        siteName: "Ammar Developer",
        images: [
            {
                url: "/assets/metadata.png",
                width: 1200,
                height: 630,
                alt: "Ammar Fullstack & AI Portfolio",
            },
        ],
        locale: "id_ID",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Fullstack Developer | AI Enthusiast",
        description:
            "Fullstack developer with experience in Next.js, Node.js, Laravel, Go, and AI integration.",
        images: ["/assets/metadata.png"],
    },

    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/a.png", type: "image/png" }
        ],
        shortcut: "/favicon.ico",
        apple: "/a.png",
    },

    alternates: {
        canonical: "https://ahmadammar.my.id",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <JsonLd />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}