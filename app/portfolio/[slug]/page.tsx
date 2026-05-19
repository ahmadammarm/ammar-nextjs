import type { Metadata } from "next";
import { fullPortfolio } from "@/constants/portfolio";
import PortfolioDetailClient from "./PortfolioDetailClient";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const portfolio = fullPortfolio.find((item) => item.slug === slug);

    if (!portfolio) {
        return {
            title: "Project Not Found | Ahmad Ammar",
        };
    }

    const seoTitle = portfolio.seoTitle || `${portfolio.nama} | Ahmad Ammar Portfolio`;
    const seoDescription = portfolio.seoDescription || portfolio.deskripsi;

    return {
        title: seoTitle,
        description: seoDescription,
        keywords: [
            portfolio.nama,
            "ahmad ammar portfolio",
            "software project",
            "web application",
            ...(portfolio.teknologi.map(t => t.split("/").pop()?.replace(".png", "").replace(".svg", "") || "")),
        ],
        openGraph: {
            title: seoTitle,
            description: seoDescription,
            url: `https://ahmadammar.my.id/portfolio/${slug}`,
            images: [
                {
                    url: portfolio.gambar,
                    width: 1200,
                    height: 630,
                    alt: portfolio.nama,
                },
            ],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: seoTitle,
            description: seoDescription,
            images: [portfolio.gambar],
        },
        alternates: {
            canonical: `https://ahmadammar.my.id/portfolio/${slug}`,
        },
    };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const portfolio = fullPortfolio.find((item) => item.slug === slug);

    if (!portfolio) return <PortfolioDetailClient />;

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": portfolio.nama,
        "description": portfolio.deskripsi,
        "applicationCategory": portfolio.category === "web-app" ? "WebApplication" : "BusinessApplication",
        "operatingSystem": "Web",
        "author": {
            "@type": "Person",
            "name": "Ahmad Ammar Musyaffa"
        },
        "screenshot": `https://ahmadammar.my.id${portfolio.gambar}`,
        "softwareRequirements": portfolio.teknologi.map(t => t.split("/").pop()?.replace(".png", "").replace(".svg", "") || "").join(", ")
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ahmadammar.my.id",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Portfolio",
                "item": "https://ahmadammar.my.id/portfolio",
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": portfolio.nama,
                "item": `https://ahmadammar.my.id/portfolio/${portfolio.slug}`,
            },
        ],
    };

    const sanitize = (json: object) => JSON.stringify(json).replace(/</g, '\\u003c');

    return (
        <>
            <script
                type="application/ld+json"
            >
                {sanitize(softwareSchema)}
            </script>
            <script
                type="application/ld+json"
            >
                {sanitize(breadcrumbSchema)}
            </script>
            <PortfolioDetailClient />
        </>
    );
}
