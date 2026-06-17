import { MetadataRoute } from "next";
import { fullPortfolio } from "@/constants/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://ahmadammar.my.id";

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];

    const portfolioPages: MetadataRoute.Sitemap = fullPortfolio.map((item) => ({
        url: `${baseUrl}/portfolio/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticPages, ...portfolioPages];
}
