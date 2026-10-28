import { type ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { TechIcon } from "@/components/shared/TechIcon";
import { neoButton } from "@/components/shared/neo-button";
import { PORTFOLIO_CATEGORIES } from "@/constants/portfolio";
import { cn } from "@/lib/utils";
import { type Portfolio } from "@/types/portfolio";

type ProjectCardProps = {
    project: Portfolio;
    showSource?: boolean;
};

const iconLinkClass = cn(neoButton({ tone: "secondary" }), "p-2.5 justify-center");

export function ProjectCard({ project, showSource = false }: ProjectCardProps): ReactElement {
    const { name, slug, category, images, description, technologies, year, link, source } = project;

    return (
        <div className="group relative h-full bg-background neo-border neo-press flex flex-col overflow-hidden cursor-default">
            <div className="relative w-full h-52 sm:h-56 md:h-60 border-b-2 border-black dark:border-white overflow-hidden bg-muted">
                <div className="absolute top-3 right-3 z-10 bg-brand-blue text-black border-2 border-black text-[11px] font-black uppercase px-2.5 py-1 tracking-wider shadow-neo-sm">
                    {PORTFOLIO_CATEGORIES[category].label}
                </div>
                <div className="absolute top-3 left-3 z-10 bg-background text-foreground neo-border text-[11px] font-mono font-black px-2 py-0.5 neo-shadow-sm">
                    {year}
                </div>
                <Image
                    src={images[0]}
                    alt={name}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-black text-foreground group-hover:text-brand-blue transition-colors line-clamp-1">
                    {name}
                </h3>
                <div className="w-10 h-0.5 bg-black dark:bg-white my-3 group-hover:w-16 transition-all duration-300" />
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-5">
                    {description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 mb-6 mt-auto">
                    {technologies.map((id) => (
                        <TechIcon key={id} id={id} />
                    ))}
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-black/10 dark:border-white/10">
                    <Link
                        href={`/portfolio/${slug}`}
                        className={cn(neoButton(), "flex-1 py-2.5 px-3 text-xs justify-center text-center")}
                    >
                        <span>View Details</span>
                        <FaArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {link && (
                        <Link href={link} target="_blank" rel="noopener noreferrer" title="Live Preview" className={iconLinkClass}>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    )}
                    {showSource && source && (
                        <Link href={source} target="_blank" rel="noopener noreferrer" title="Source Code" className={iconLinkClass}>
                            <FaGithub className="w-4 h-4" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
