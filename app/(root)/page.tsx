import { type ReactElement } from "react";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeAbout } from "@/components/home/HomeAbout";
import { TechMarquee } from "@/components/home/TechMarquee";
import { ContactCtaBanner } from "@/components/shared/ContactCta";

export default function HomePage(): ReactElement {
    return (
        <div className="w-full bg-background">
            <HeroSection />
            <TechMarquee />
            <HomeAbout />
            <FeaturedProjects />
            <ContactCtaBanner />
        </div>
    );
}
