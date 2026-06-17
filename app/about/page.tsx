"use client"

import AboutSection from "@/components/Sections/AboutSection";
import EducationSection from "@/components/Sections/EducationSection";
import ExperiencesSection from "@/components/Sections/ExperiencesSection";
import SkillsSection from "@/components/Sections/SkillsSection";

export default function AboutPage() {
    return (
        <div>
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            {/* <ExperiencesSection /> */}
        </div>
    );
}