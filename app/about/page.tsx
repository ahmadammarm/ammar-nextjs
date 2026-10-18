import { type Metadata } from "next";
import { type ReactElement } from "react";
import { AboutSection } from "@/components/about/AboutSection";
import { EducationSection } from "@/components/about/EducationSection";
import { ExperiencesSection } from "@/components/about/ExperiencesSection";
import { SkillsSection } from "@/components/about/SkillsSection";
import { StatsSection } from "@/components/about/StatsSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "About",
    path: "/about",
    description:
        "Learn more about Ahmad Ammar Musyaffa, focusing on Software Engineering and Fullstack Development specializing in Next.js, Go, Laravel, and scalable web applications.",
    ogDescription: "Fullstack developer specializing in Next.js, Node.js, Laravel, Go, and AI-powered applications.",
    ogImageAlt: "About Ahmad Ammar",
    keywords: [
        "about ahmad ammar",
        "ahmad ammar musyaffa biography",
        "software engineer portfolio",
        "fullstack developer indonesia",
    ],
});

export default function AboutPage(): ReactElement {
    return (
        <div className="flex flex-col">
            <AboutSection />
            <StatsSection />
            <ExperiencesSection />
            <EducationSection />
            <SkillsSection />
        </div>
    );
}
