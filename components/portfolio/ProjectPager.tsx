import { type ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Portfolio } from "@/types/portfolio";

type PagerLinkProps = {
    project: Portfolio;
    direction: "previous" | "next";
};

function PagerLink({ project, direction }: PagerLinkProps): ReactElement {
    const isNext = direction === "next";
    const Arrow = isNext ? ArrowRight : ArrowLeft;

    return (
        <Link
            href={`/portfolio/${project.slug}`}
            className={cn(
                "group flex items-center gap-4 p-3 sm:p-4 bg-background neo-border neo-press",
                isNext && "flex-row-reverse text-right"
            )}
        >
            <div className="relative w-24 sm:w-32 aspect-video shrink-0 bg-muted neo-border overflow-hidden">
                <Image src={project.images[0]} alt="" fill quality={100} sizes="128px" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
                <span
                    className={cn(
                        "flex items-center gap-1.5 font-mono text-[11px] font-black uppercase tracking-widest text-muted-foreground",
                        isNext && "justify-end"
                    )}
                >
                    {!isNext && <Arrow className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />}
                    {isNext ? "Next project" : "Previous project"}
                    {isNext && <Arrow className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />}
                </span>
                <span className="block mt-1 text-lg sm:text-xl font-black uppercase tracking-tight text-foreground truncate group-hover:text-brand-blue transition-colors">
                    {project.name}
                </span>
            </div>
        </Link>
    );
}

export function ProjectPager({ previous, next }: { previous: Portfolio; next: Portfolio }): ReactElement {
    return (
        <nav
            aria-label="More projects"
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-16 md:mt-20 pt-10 border-t-2 border-black dark:border-white"
        >
            {previous.slug !== next.slug && <PagerLink project={previous} direction="previous" />}
            <PagerLink project={next} direction="next" />
        </nav>
    );
}
