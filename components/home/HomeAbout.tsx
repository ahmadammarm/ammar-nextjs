import { type ReactElement } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Highlight } from "@/components/shared/SectionHeading";
import { StatCard } from "@/components/shared/StatCard";
import { neoButton } from "@/components/shared/neo-button";
import { profile } from "@/constants/profile";
import { stats } from "@/constants/stats";
import { cn } from "@/lib/utils";

export function HomeAbout(): ReactElement {
    return (
        <section className="relative w-full py-16 md:py-20 lg:py-24 border-b-2 border-black dark:border-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    <Reveal preset="slideLeft" className="lg:col-span-7 flex flex-col">
                        <Eyebrow className="mb-4">About Me</Eyebrow>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-tight mb-6">
                            Engineering <Highlight>Reliable</Highlight> Web Systems
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">{profile.aboutBio}</p>
                        <div>
                            <Link
                                href="/about"
                                className={cn(neoButton({ tone: "secondary" }), "group px-6 py-3.5 text-xs md:text-sm")}
                            >
                                <span>Read Full Story &amp; Skills</span>
                                <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </Reveal>

                    <Reveal
                        preset="slideRight"
                        delay={0.15}
                        className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
                    >
                        {stats.map((stat) => (
                            <StatCard key={stat.label} stat={stat} variant="compact" />
                        ))}
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
