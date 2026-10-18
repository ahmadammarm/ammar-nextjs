import { type ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Highlight, SectionHeading } from "@/components/shared/SectionHeading";
import { neoButton } from "@/components/shared/neo-button";
import { profile, profileHighlights } from "@/constants/profile";
import { cn } from "@/lib/utils";

const actionClass = "px-7 py-3.5 font-bold text-base normal-case tracking-normal";

export function AboutSection(): ReactElement {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="relative z-10 max-w-7xl w-full mx-auto mb-12 md:mb-16">
                <Reveal preset="fadeDown">
                    <SectionHeading
                        level="page"
                        eyebrow="About Me"
                        eyebrowVariant="raised"
                        title={
                            <>
                                Get to Know <Highlight>Me Better</Highlight>
                            </>
                        }
                    />
                </Reveal>
            </div>

            <div className="relative z-10 max-w-7xl w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <Reveal preset="slideLeft" duration={0.6} className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-sm md:max-w-md">
                            <div className="absolute inset-0 bg-brand-blue neo-border translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" />
                            <div className="relative bg-background neo-border neo-shadow p-3 md:p-4">
                                <div className="relative w-full aspect-[4/5] overflow-hidden neo-border bg-muted">
                                    <Image
                                        src={profile.photo}
                                        alt={profile.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        className="object-cover object-center"
                                        priority
                                    />
                                </div>
                                <div className="mt-3 pt-3 border-t-2 border-black dark:border-white flex items-center justify-between text-xs md:text-sm font-bold text-foreground">
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="text-brand-blue w-4 h-4" />
                                        {profile.city}, {profile.country}
                                    </span>
                                    <span className="text-muted-foreground font-semibold">{profile.title}</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal preset="slideRight" duration={0.6} delay={0.2} className="lg:col-span-7">
                        <div className="bg-background neo-border neo-shadow p-6 md:p-8 lg:p-10">
                            <div className="mb-6">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
                                    Hi, I&apos;m <Highlight>{profile.name}</Highlight>
                                </h2>
                                <p className="text-base sm:text-lg font-bold text-muted-foreground mt-2">{profile.role}</p>
                            </div>

                            <div className="w-16 h-1.5 bg-brand-blue neo-border mb-6" />

                            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{profile.aboutBio}</p>

                            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t-2 border-black dark:border-white">
                                {profileHighlights.map((highlight) => (
                                    <div key={highlight.label} className="p-3 bg-muted/40 neo-border neo-press-sm cursor-default">
                                        <p className="text-xs font-bold text-muted-foreground uppercase">{highlight.label}</p>
                                        <p className="font-bold text-sm text-foreground mt-0.5">{highlight.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href={profile.cvUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(neoButton(), actionClass, "gap-2.5")}
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download Resume</span>
                                </a>
                                <Link href="/contact" className={cn(neoButton({ tone: "secondary" }), actionClass)}>
                                    <span>Contact Me</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
