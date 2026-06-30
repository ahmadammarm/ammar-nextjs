import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Professional freelance web development and AI integration services by Ahmad Ammar Musyaffa. High-performance Next.js apps, SaaS solutions, and intelligent AI tools.",
    keywords: [
        "web development services",
        "freelance software engineer",
        "hire nextjs developer",
        "custom web application development",
        "AI integration services",
        "ahmad ammar musyaffa services"
    ],
    openGraph: {
        title: "Services | Ahmad Ammar Musyaffa",
        description: "Professional freelance services spanning Web Applications, AI Integration, and Custom Software Solutions.",
        url: "https://ahmadammar.my.id/services",
        images: [
            {
                url: "/assets/metadata.png",
                width: 1200,
                height: 630,
                alt: "Ahmad Ammar Services",
            },
        ],
    },
    alternates: {
        canonical: "https://ahmadammar.my.id/services",
    },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
