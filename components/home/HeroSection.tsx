import { type ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, DownloadIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Highlight } from "@/components/shared/SectionHeading";
import { WindowFrame } from "@/components/shared/WindowFrame";
import { neoButton } from "@/components/shared/neo-button";
import { heroTech } from "@/constants/home";
import { profile } from "@/constants/profile";
import { cn } from "@/lib/utils";

export function HeroSection(): ReactElement {
    return (
        <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-4 py-12 md:py-16 lg:py-20 overflow-hidden border-b-2 border-black dark:border-white">
            <div className="relative z-10 max-w-7xl w-full mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14 xl:gap-16">
                    <Reveal
                        trigger="mount"
                        preset="slideLeft"
                        className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground leading-[1.05] mb-5">
                            Hi, I&apos;m <Highlight>{profile.name}</Highlight>
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-6">
                            {profile.heroBio}
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
                            {heroTech.map((name) => (
                                <span
                                    key={name}
                                    className="px-2.5 py-1 bg-background text-foreground border border-black dark:border-white text-xs font-bold neo-shadow-xs"
                                >
                                    {name}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <Link href="/portfolio" className={cn(neoButton(), "group px-6 py-3.5 text-sm md:text-base")}>
                                <span>Explore Projects</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href={profile.cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                download={profile.cvFileName}
                                className={cn(neoButton({ tone: "secondary" }), "group px-6 py-3.5 text-sm md:text-base")}
                            >
                                <DownloadIcon className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                <span>Download CV</span>
                            </Link>
                        </div>
                    </Reveal>

                    <Reveal
                        trigger="mount"
                        preset="slideRight"
                        delay={0.2}
                        className="w-full lg:w-2/5 flex justify-center lg:justify-end"
                    >
                        <WindowFrame className="w-full max-w-sm sm:max-w-md p-3 sm:p-4">
                            <div className="relative w-full aspect-[4/5] bg-muted neo-border overflow-hidden">
                                <Image
                                    src={profile.photo}
                                    alt={profile.photoAlt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 420px"
                                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </WindowFrame>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
