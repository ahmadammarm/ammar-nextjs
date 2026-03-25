import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://ahmadammar.my.id"),

    title: {
        default: "Ammar | Full Stack Web Developer",
        template: "%s | Ammar Developer",
    },

    description:
        "Ahmad Ammar Musyaffa adalah Full Stack Web Developer dari Indonesia yang fokus pada Laravel, Next.js, dan modern web development.",

    keywords: [
        "Ahmad Ammar Musyaffa",
        "Full Stack Developer Indonesia",
        "Next.js Developer",
        "Laravel Developer",
        "Portfolio Web Developer",
        "Go Developer"
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
        title: "Ammar | Full Stack Web Developer",
        description:
            "Portfolio Ahmad Ammar Musyaffa, Full Stack Developer yang membangun aplikasi modern menggunakan Next.js dan Laravel.",
        url: "https://ahmadammar.my.id",
        siteName: "Ammar Developer",
        images: [
            {
                url: "/assets/metadata.png",
                width: 1200,
                height: 630,
                alt: "Ammar Portfolio Website",
            },
        ],
        locale: "id_ID",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Ammar | Full Stack Developer",
        description:
            "Portfolio Ahmad Ammar Musyaffa, Web Developer dari Indonesia.",
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
        <html lang="id">
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