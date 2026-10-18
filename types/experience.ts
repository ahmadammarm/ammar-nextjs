import { type TechId } from "@/types/tech";

export type Experience = {
    company: string;
    position: string;
    companyLogo?: string;
    employmentType: string;
    workMode: string;
    location?: string;
    period: string;
    highlights: string[];
    techStack: TechId[];
};
