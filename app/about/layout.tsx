import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ammar | About",
    description:
        "Learn more about Ahmad Ammar Musyaffa, a fullstack developer with expertise in Next.js, Node.js, Laravel, Go, and AI-powered applications. Discover his education, skills, and professional experience.",
    keywords: [
        "about ahmad ammar",
        "ahmad ammar musyaffa biography",
        "software engineer portfolio",
        "fullstack developer indonesia",
    ],
    openGraph: {
        title: "About | Ahmad Ammar Musyaffa",
        description:
            "Fullstack developer specializing in Next.js, Node.js, Laravel, Go, and AI-powered applications.",
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