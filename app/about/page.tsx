import { Metadata } from "next";
import AboutSection from "@/components/Sections/AboutSection";
import StatsSection from "@/components/Sections/StatsSection";
import ExperiencesSection from "@/components/Sections/ExperiencesSection";
import EducationSection from "@/components/Sections/EducationSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import ProcessSection from "@/components/Sections/ProcessSection";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Ahmad Ammar Musyaffa, a Fullstack Developer and AI Integration Specialist."
};

export default function AboutPage() {
    return (
        <div>
            <AboutSection />
            <ExperiencesSection />
            <EducationSection />
            <SkillsSection />
        </div>
    );
}