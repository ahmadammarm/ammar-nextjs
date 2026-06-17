import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hire Me",
    description:
        "Get in touch with Ahmad Ammar Musyaffa for collaboration opportunities, project inquiries, or just to say hello. Find contact information and social media links here.",
    keywords: [
        "contact ahmad ammar",
        "ahmad ammar musyaffa contact",
        "hire software engineer",
        "fullstack developer contact",
    ],
    openGraph: {
        title: "Contact | Ahmad Ammar Musyaffa",
        description:
            "Get in touch with Ahmad Ammar Musyaffa for collaboration opportunities or project inquiries.",
        url: "https://ahmadammar.my.id/contact",
        images: [
            {
                url: "/assets/metadata.png",
                width: 1200,
                height: 630,
                alt: "Contact Ahmad Ammar",
            },
        ],
    },
    alternates: {
        canonical: "https://ahmadammar.my.id/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}