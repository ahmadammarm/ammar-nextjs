"use client"

import Loading from "@/components/loading/Loading";
import AboutSection from "@/components/Sections/AboutSection";
import EducationSection from "@/components/Sections/EducationSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import { useEffect, useState } from "react";


export default function Page() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000);

        return () => clearTimeout(timer)
    }, []);

    if(isLoading) {
        return <Loading />
    }
    return (
        <div>
            <AboutSection />
            <EducationSection />
            <SkillsSection />
        </div>
    )
}