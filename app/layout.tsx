import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://ahmadammar.my.id"),

    title: "Ammar | Personal Website",

    description:
        "Junior software engineer with passion in building backend web applications using Node.js, Laravel, and Go. Focused on backend services, RESTful APIs, and database systems, while exploring AI integration for intelligent and data-driven applications.",

    keywords: [
        "Ahmad Ammar",
        "Ammar",
        "Musyaffa",
        "Ahmad Ammar Musyaffa",
        "Ammar developer",
        "Ammar backend developer",
        "Ammar software engineer",
        "Software Engineer Indonesia",
        "Backend Developer Indonesia",
        "Backend Engineer",
        "Junior Software Engineer",
        "Fullstack Developer Indonesia",
        "Node.js Developer",
        "Laravel Developer",
        "Go Developer",
        "REST API Developer",
        "Backend API Development",
        "MySQL Developer",
        "PostgreSQL Developer",
        "Relational Database Developer",
        "AI Enthusiast",
        "Artificial Intelligence Developer",
        "Machine Learning Integration",
        "AI Backend Engineer",
        "Portfolio Web Developer",
        "Web Developer Indonesia Portfolio",
        "Backend Developer Portfolio",
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
        title: "Ammar | Software Engineer Backend & AI Enthusiast",
        description:
            "Portfolio Ahmad Ammar Musyaffa, backend-focused software engineer specializing in Node.js, Laravel, Go, and AI-powered applications.",
        url: "https://ahmadammar.my.id",
        siteName: "Ammar Developer",
        images: [
            {
                url: "/assets/metadata.png",
                width: 1200,
                height: 630,
                alt: "Ammar Backend & AI Portfolio",
            },
        ],
        locale: "id_ID",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Software Engineer | Backend & AI Enthusiast",
        description:
            "Backend-focused developer with experience in Node.js, Laravel, Go, and AI integration.",
        images: ["/assets/metadata.png"],
    },

    icons: {
        icon: "/a.png",
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