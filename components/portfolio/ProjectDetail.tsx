import { type ReactElement } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { FeatureList } from "@/components/portfolio/FeatureList";
import { ProjectGallery } from "@/components/portfolio/ProjectGallery";
import { ProjectMetaGrid } from "@/components/portfolio/ProjectMetaGrid";
import { ContactCtaCard } from "@/components/shared/ContactCta";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { TechIcon } from "@/components/shared/TechIcon";
import { neoButton } from "@/components/shared/neo-button";
import { PORTFOLIO_CATEGORIES } from "@/constants/portfolio";
import { cn } from "@/lib/utils";
import { type Portfolio } from "@/types/portfolio";

const subheadingClass = "text-2xl sm:text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8";
const actionClass = "group px-7 py-3.5 text-sm";

export function ProjectDetail({ project }: { project: Portfolio }): ReactElement {
    const { name, slug, category, images, longDescription, features, technologies, link, source } = project;

    return (
        <div className="w-full min-h-screen py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b-2 border-black dark:border-white">
                    <Link href="/portfolio" className={cn(neoButton({ tone: "secondary" }), "px-4 py-2 text-xs")}>
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Projects</span>
                    </Link>
                    <Eyebrow className="py-1.5 md:text-xs">{PORTFOLIO_CATEGORIES[category].label}</Eyebrow>
                </div>

                <Reveal trigger="mount" preset="fadeDown" className="mb-12">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground uppercase tracking-tight leading-[1.05] mb-6">
                        {name}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mb-8">
                        {longDescription}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        {link && (
                            <Link href={link} target="_blank" rel="noopener noreferrer" className={cn(neoButton(), actionClass)}>
                                <span>Live Demo</span>
                                <ExternalLink className="w-4 h-4" />
                            </Link>
                        )}
                        {source && (
                            <Link
                                href={source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(neoButton({ tone: "secondary" }), actionClass)}
                            >
                                <Github className="w-4 h-4" />
                                <span>Source Code</span>
                            </Link>
                        )}
                    </div>
                </Reveal>

                <ProjectMetaGrid project={project} />
                <ProjectGallery name={name} slug={slug} images={images} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    <div className="lg:col-span-7">
                        <Eyebrow variant="compact" className="mb-3">
                            Features
                        </Eyebrow>
                        <h2 className={subheadingClass}>Core Features &amp; Capabilities</h2>
                        <FeatureList features={features} />
                    </div>

                    <div className="lg:col-span-5 space-y-10">
                        <div>
                            <Eyebrow variant="compact" className="mb-3">
                                Technology
                            </Eyebrow>
                            <h2 className={subheadingClass}>Built With</h2>
                            <div className="grid grid-cols-2 gap-3">
                                {technologies.map((id) => (
                                    <TechIcon key={id} id={id} variant="labeled" />
                                ))}
                            </div>
                        </div>
                        <ContactCtaCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
