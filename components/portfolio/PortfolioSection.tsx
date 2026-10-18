import { type ReactElement } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { PortfolioExplorer } from "@/components/portfolio/PortfolioExplorer";
import { Highlight, SectionHeading } from "@/components/shared/SectionHeading";

export function PortfolioSection(): ReactElement {
    return (
        <div className="w-full min-h-screen py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <Reveal trigger="mount" preset="fadeDown">
                    <SectionHeading
                        level="page"
                        eyebrow="Archive & Showcase"
                        title={
                            <>
                                Selected <Highlight>Projects</Highlight>
                            </>
                        }
                        subtitle="A curated archive of fullstack web applications, REST services, landing platforms, and digital products I have built and contributed to."
                    />
                </Reveal>
                <PortfolioExplorer />
            </div>
        </div>
    );
}
