import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Ahmad Ammar Musyaffa",
    description:
        "Explore the portfolio of Ahmad Ammar Musyaffa, featuring web applications and software projects built with Node.js, Laravel, Go, React, and AI technologies.",
    keywords: [
        "ahmad ammar portfolio",
        "software projects",
        "web applications portfolio",
        "backend projects",
        "node.js projects",
        "laravel projects",
    ],
    openGraph: {
        title: "Portfolio | Ahmad Ammar Musyaffa",
        description:
            "Explore software projects built with Node.js, Laravel, Go, React, and AI technologies.",
        url: "https://ahmadammar.my.id/portfolio",
        images: [
            {
                url: "/assets/metadata.png",
                width: 1200,
                height: 630,
                alt: "Ahmad Ammar Portfolio",
            },
        ],
    },
    alternates: {
        canonical: "https://ahmadammar.my.id/portfolio",
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}