import { type MetadataRoute } from "next";
import { portfolio } from "@/constants/portfolio";
import { absoluteUrl } from "@/lib/seo";

type SitemapEntry = MetadataRoute.Sitemap[number];

const staticPages: Pick<SitemapEntry, "url" | "changeFrequency" | "priority">[] = [
    { url: "", changeFrequency: "weekly", priority: 1.0 },
    { url: "/about", changeFrequency: "monthly", priority: 0.8 },
    { url: "/portfolio", changeFrequency: "weekly", priority: 0.9 },
    { url: "/services", changeFrequency: "monthly", priority: 0.8 },
    { url: "/contact", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const pages: MetadataRoute.Sitemap = staticPages.map((page) => ({
        ...page,
        url: absoluteUrl(page.url),
        lastModified,
    }));

    const projects: MetadataRoute.Sitemap = portfolio.map((project) => ({
        url: absoluteUrl(`/portfolio/${project.slug}`),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...pages, ...projects];
}
