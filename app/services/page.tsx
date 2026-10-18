import { type Metadata } from "next";
import { type ReactElement } from "react";
import { ServicesSection } from "@/components/services/ServicesSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Services",
    path: "/services",
    description:
        "Professional freelance web development and AI integration services by Ahmad Ammar Musyaffa. High-performance Next.js apps, SaaS solutions, and intelligent AI tools.",
    ogDescription:
        "Professional freelance services spanning Web Applications, AI Integration, and Custom Software Solutions.",
    ogImageAlt: "Ahmad Ammar Services",
    keywords: [
        "web development services",
        "freelance software engineer",
        "hire nextjs developer",
        "custom web application development",
        "AI integration services",
        "ahmad ammar musyaffa services",
    ],
});

export default function ServicesPage(): ReactElement {
    return <ServicesSection />;
}
