import { type SitePage } from "@/types/site";

/** Every top-level route. Feeds the sitemap and llms.txt; the navbar keeps its own subset in `navigation.ts`. */
export const sitePages: SitePage[] = [
    { path: "", label: "Home", summary: "Introduction, tech stack, and featured projects" },
    { path: "/about", label: "About", summary: "Background, experience, education, and skills" },
    { path: "/portfolio", label: "Portfolio", summary: "All projects with filters by category" },
    { path: "/services", label: "Services", summary: "Web foundations, AI-enhanced web apps, and custom AI solutions" },
    { path: "/contact", label: "Contact", summary: "Project inquiries and collaboration" },
];
