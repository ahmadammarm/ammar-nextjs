import { portfolio } from "@/constants/portfolio";
import { type Portfolio, type PortfolioFilter } from "@/types/portfolio";

export const getProjectBySlug = (slug: string): Portfolio | undefined =>
    portfolio.find((project) => project.slug === slug);

export const getFeaturedProjects = (): Portfolio[] => portfolio.filter((project) => project.featured);

export const filterProjects = (filter: PortfolioFilter): Portfolio[] =>
    filter === "all" ? portfolio : portfolio.filter((project) => project.category === filter);
