import { type MetadataRoute } from "next";
import { portfolio } from "@/constants/portfolio";
import { absoluteUrl } from "@/lib/seo";

const staticPaths = ["", "/about", "/portfolio", "/services", "/contact"];

/** `lastModified` is omitted on purpose: no reliable per-page date exists, and Google ignores a build-time stamp. */
export default function sitemap(): MetadataRoute.Sitemap {
    const projectPaths = portfolio.map((project) => `/portfolio/${project.slug}`);

    return [...staticPaths, ...projectPaths].map((path) => ({ url: absoluteUrl(path) }));
}
