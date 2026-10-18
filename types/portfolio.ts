import { type TechId } from "@/types/tech";

export type PortfolioCategory = "landing-page" | "web-app" | "company-profile";

export type PortfolioFilter = "all" | PortfolioCategory;

export type PortfolioCategoryInfo = {
    label: string;
    tabLabel: string;
    schemaCategory: string;
};

export type Portfolio = {
    name: string;
    slug: string;
    category: PortfolioCategory;
    /** The first image is the cover; the rest appear in the detail gallery. */
    images: [string, ...string[]];
    description: string;
    longDescription: string;
    features: string[];
    technologies: TechId[];
    link?: string;
    source?: string;
    year: string;
    role: string;
    platform: string;
    featured?: boolean;
};
