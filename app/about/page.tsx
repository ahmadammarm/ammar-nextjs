import { Metadata } from "next";
import AboutSection from "@/components/Sections/AboutSection";
import StatsSection from "@/components/Sections/StatsSection";
import ExperiencesSection from "@/components/Sections/ExperiencesSection";
import EducationSection from "@/components/Sections/EducationSection";
import SkillsSection from "@/components/Sections/SkillsSection";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn more about Ahmad Ammar Musyaffa, focusing on Software Engineering and Fullstack Development specializing in Next.js, Go, Laravel, and scalable web applications.",
};

export default function AboutPage() {
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
