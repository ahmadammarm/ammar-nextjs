import { type TechId } from "@/types/tech";

export const heroTech: string[] = ["Next.js", "React", "Vue", "Laravel", "Go", "Spring Boot", "PostgreSQL"];

/** Rows of the home tech marquee; adjacent rows scroll in opposite directions. */
export const homeTechRows: TechId[][] = [
    ["nextjs", "react", "typescript", "vue", "tailwind", "javascript", "html", "css", "bootstrap", "php", "laravel", "go", "express"],
    ["fastapi", "python", "java", "springboot", "postgresql", "mysql", "redis", "git", "github", "tensorflow", "gemini"],
];
