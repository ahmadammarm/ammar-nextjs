import { portfolio } from "@/constants/portfolio";
import { type Portfolio, type PortfolioFilter } from "@/types/portfolio";

export const getProjectBySlug = (slug: string): Portfolio | undefined =>
    portfolio.find((project) => project.slug === slug);

export const getFeaturedProjects = (): Portfolio[] => portfolio.filter((project) => project.featured);

export const filterProjects = (filter: PortfolioFilter): Portfolio[] =>
    filter === "all" ? portfolio : portfolio.filter((project) => project.category === filter);

/** Neighbours in list order, wrapping at both ends. Undefined when there is nothing to navigate to. */
export const getAdjacentProjects = (slug: string): { previous: Portfolio; next: Portfolio } | undefined => {
    const index = portfolio.findIndex((project) => project.slug === slug);
    const previous = portfolio[(index - 1 + portfolio.length) % portfolio.length];
    const next = portfolio[(index + 1) % portfolio.length];

    if (index === -1 || !previous || !next || previous.slug === slug) return undefined;
    return { previous, next };
};

/** Screen name from a screenshot path: ".../2_-_SesiUjian.webp" becomes "Sesi Ujian"; the cover is "Overview". */
export const screenLabel = (path: string): string => {
    const base = (path.split("/").pop() ?? "").replace(/\.[^.]+$/, "");
    const label = base
        .replace(/^\d+_?-_/, "")
        .replace(/_/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .trim();

    return label.toLowerCase() === "main" ? "Overview" : label;
};
