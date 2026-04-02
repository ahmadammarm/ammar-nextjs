import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Ahmad Ammar Musyaffa",
    description:
        "Learn more about Ahmad Ammar Musyaffa, a backend-focused software engineer with expertise in Node.js, Laravel, Go, and AI-powered applications. Discover his education, skills, and professional experience.",
    keywords: [
        "about ahmad ammar",
        "ahmad ammar musyaffa biography",
        "software engineer portfolio",
        "backend developer indonesia",
    ],
    openGraph: {
        title: "About | Ahmad Ammar Musyaffa",
        description:
            "Backend-focused software engineer specializing in Node.js, Laravel, Go, and AI-powered applications.",
        url: "https://ahmadammar.my.id/about",
        images: [
            {
                url: "/assets/metadata.png",
                width: 1200,
                height: 630,
                alt: "About Ahmad Ammar",
            },
        ],
    },
    alternates: {
        canonical: "https://ahmadammar.my.id/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}