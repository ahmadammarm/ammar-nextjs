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
    };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
    return <PortfolioDetailClient />;
}
