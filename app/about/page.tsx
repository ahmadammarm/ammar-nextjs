"use client"

import AboutSection from "@/components/Sections/AboutSection";
import StatsSection from "@/components/Sections/StatsSection";
import EducationSection from "@/components/Sections/EducationSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import ProcessSection from "@/components/Sections/ProcessSection";

export default function AboutPage() {
    return (
        <div>
            <AboutSection />
            <SkillsSection />
            <EducationSection />
        </div>
    );
}