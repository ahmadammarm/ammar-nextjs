import { type ReactElement } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { Highlight, SectionHeading } from "@/components/shared/SectionHeading";
import { neoButton } from "@/components/shared/neo-button";
import { staggerDelay } from "@/lib/motion";
import { getFeaturedProjects } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function FeaturedProjects(): ReactElement {
    const projects = getFeaturedProjects();

    return (
        <section className="relative w-full py-16 md:py-20 lg:py-24 border-b-2 border-black dark:border-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <Reveal preset="fadeDown" className="mb-12 md:mb-16">
                    <SectionHeading
                        eyebrow="Portfolio"
                        title={
                            <>
                                Featured <Highlight>Projects</Highlight>
                            </>
                        }
                        subtitle="A curated selection of web applications, platforms, and fullstack solutions engineered for scale and performance."
                    />
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                    {projects.map((project, index) => (
                        <Reveal key={project.slug} duration={0.45} delay={staggerDelay(index)} className="h-full flex flex-col">
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="/portfolio"
                        className={cn(neoButton({ tone: "secondary" }), "group px-8 py-4 gap-3 text-sm md:text-base")}
                    >
                        <span>Explore All Projects</span>
                        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
