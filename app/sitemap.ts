import { type MetadataRoute } from "next";
import { portfolio } from "@/constants/portfolio";
import { sitePages } from "@/constants/pages";
import { absoluteUrl } from "@/lib/seo";

/** `lastModified` is omitted on purpose: no reliable per-page date exists, and Google ignores a build-time stamp. */
export default function sitemap(): MetadataRoute.Sitemap {
    const pagePaths = sitePages.map((page) => page.path);
    const projectPaths = portfolio.map((project) => `/portfolio/${project.slug}`);

    return [...pagePaths, ...projectPaths].map((path) => ({ url: absoluteUrl(path) }));
}
