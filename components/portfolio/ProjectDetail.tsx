import { type ReactElement } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { FeatureList } from "@/components/portfolio/FeatureList";
import { type GalleryScreen, ProjectGallery } from "@/components/portfolio/ProjectGallery";
import { ProjectPager } from "@/components/portfolio/ProjectPager";
import { ContactCtaCard } from "@/components/shared/ContactCta";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { TechIcon } from "@/components/shared/TechIcon";
import { neoButton } from "@/components/shared/neo-button";
import { PORTFOLIO_CATEGORIES } from "@/constants/portfolio";
import { getAdjacentProjects, screenLabel } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { type Portfolio } from "@/types/portfolio";

const subheadingClass = "text-2xl sm:text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-6 md:mb-8";
const actionClass = "justify-center px-6 py-3.5 text-sm";

/** Address shown in the gallery window: the demo host, else the repository path, else the project name. */
function windowAddress({ name, link, source }: Portfolio): string {
    const url = link ?? source;
    if (!url) return name;
    const { host, pathname } = new URL(url);
    return pathname === "/" ? host : `${host}${pathname}`;
}

export function ProjectDetail({ project }: { project: Portfolio }): ReactElement {
    const { name, slug, category, year, platform, images, longDescription, features, technologies, link, source } = project;
    const [cover, ...rest] = images;
    const screens: [GalleryScreen, ...GalleryScreen[]] = [
        { src: cover, label: screenLabel(cover) },
        ...rest.map((src) => ({ src, label: screenLabel(src) })),
    ];
    const adjacent = getAdjacentProjects(slug);
    const facts = [
        { label: "Year", value: year },
        { label: "Platform", value: platform },
    ];

    return (
        <div className="w-full min-h-screen py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14">
                    <Link href="/portfolio" className={cn(neoButton({ tone: "secondary" }), "px-4 py-2 text-xs")}>
                        <ArrowLeft className="w-4 h-4" />
                        <span>All Projects</span>
                    </Link>
                    <Eyebrow className="py-1.5 md:text-xs">{PORTFOLIO_CATEGORIES[category].label}</Eyebrow>
                </div>

                <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-end mb-10 md:mb-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="lg:col-span-8 min-w-0">
                        <h1 className="text-[clamp(2.5rem,9vw,6rem)] font-black uppercase tracking-tight leading-[0.95] text-foreground break-words">
                            {name}
                        </h1>
                        <p className="mt-5 md:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                            {longDescription}
                        </p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <dl className="bg-background neo-border neo-shadow divide-y-2 divide-black dark:divide-white">
                            {facts.map((fact) => (
                                <div key={fact.label} className="flex items-baseline justify-between gap-4 px-4 py-3">
                                    <dt className="font-mono text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                                        {fact.label}
                                    </dt>
                                    <dd className="font-black text-foreground text-right">{fact.value}</dd>
                                </div>
                            ))}
                        </dl>
                        {(link || source) && (
                            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                                {link && (
                                    <Link
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(neoButton(), actionClass)}
                                    >
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
                        )}
                    </div>
                </header>

                <ProjectGallery name={name} address={windowAddress(project)} screens={screens} />

                <section className="mb-16 md:mb-20">
                    <Eyebrow variant="compact" className="mb-3">
                        Features
                    </Eyebrow>
                    <h2 className={subheadingClass}>Key Features</h2>
                    <FeatureList features={features} />
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    <section className="lg:col-span-7">
                        <Eyebrow variant="compact" className="mb-3">
                            Technology
                        </Eyebrow>
                        <h2 className={subheadingClass}>Built With</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {technologies.map((id) => (
                                <TechIcon key={id} id={id} variant="labeled" />
                            ))}
                        </div>
                    </section>
                    <div className="lg:col-span-5">
                        <ContactCtaCard />
                    </div>
                </div>

                {adjacent && <ProjectPager previous={adjacent.previous} next={adjacent.next} />}
            </div>
        </div>
    );
}
