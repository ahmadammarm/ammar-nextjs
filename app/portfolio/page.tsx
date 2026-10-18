import { type Metadata } from "next";
import { type ReactElement } from "react";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Portfolio",
    path: "/portfolio",
    description:
        "Explore the portfolio of Ahmad Ammar Musyaffa, featuring web applications and software projects built with Node.js, Laravel, Go, React, and AI technologies.",
    ogDescription: "Explore software projects built with Node.js, Laravel, Go, React, and AI technologies.",
    ogImageAlt: "Ahmad Ammar Portfolio",
    keywords: [
        "ahmad ammar portfolio",
        "software projects",
        "web applications portfolio",
        "fullstack projects",
        "node.js projects",
        "laravel projects",
    ],
});

export default function PortfolioPage(): ReactElement {
    return (
        <>
            <JsonLd
                schemas={[
                    breadcrumbSchema([
                        { name: "Home", path: "" },
                        { name: "Portfolio", path: "/portfolio" },
                    ]),
                ]}
            />
            <PortfolioSection />
        </>
    );
}
