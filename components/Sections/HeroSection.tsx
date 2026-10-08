"use client";

import React from "react";
import { profile } from "@/constants/profile";
import { DownloadIcon, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection(): React.JSX.Element {
    const { nama, CV, foto } = profile[0];

    return (
        <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-4 py-12 md:py-16 lg:py-20 overflow-hidden border-b-2 border-black dark:border-white">
            <div className="relative z-10 max-w-7xl w-full mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14 xl:gap-16">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-background border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mb-6">
                            <span className="w-2.5 h-2.5 bg-emerald-500 border border-black dark:border-white animate-pulse" />
                            <span className="text-xs md:text-sm font-black uppercase tracking-wider text-foreground">
                                Available for New Projects &amp; Roles
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground leading-[1.05] mb-5">
                            Hi, I&apos;m{" "}
                            <span className="text-brand-blue">
                                {nama}
                            </span>
                        </h1>

                        {/* Role & Bio Brief */}
                        <div className="mb-6 space-y-3">
                            <div className="inline-block px-3 py-1 bg-muted border-2 border-black dark:border-white text-xs md:text-sm font-black uppercase tracking-wider text-foreground">
                                Software Engineering &amp; Fullstack Development
                            </div>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                                Developing scalable backend architectures, RESTful APIs, relational databases, and high-performance, responsive web interfaces with clean engineering standards.
                            </p>
                        </div>

                        {/* Core Technologies Matrix */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
                            {["Next.js", "React", "Vue", "Laravel", "Go", "Spring Boot", "PostgreSQL"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-1 bg-background text-foreground border border-black dark:border-white text-xs font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Tactile CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="/portfolio"
                                className="group px-6 py-3.5 bg-brand-blue text-black border-2 border-black dark:border-white font-black text-sm md:text-base uppercase tracking-wider shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2 cursor-pointer"
                            >
                                <span>Explore Projects</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href={CV}
                                target="_blank"
                                rel="noopener noreferrer"
                                download="CV_Ahmad_Ammar"
                                className="group px-6 py-3.5 bg-background text-foreground border-2 border-black dark:border-white font-black text-sm md:text-base uppercase tracking-wider shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2 cursor-pointer"
                            >
                                <DownloadIcon className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                <span>Download CV</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column - Neobrutalist Rectangular Photo Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full lg:w-2/5 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-sm sm:max-w-md bg-background border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-3 sm:p-4 transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1">
                            {/* Window / Inspector Bar */}
                            <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-black dark:border-white">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-3 h-3 bg-red-500 border border-black dark:border-white inline-block" />
                                    <span className="w-3 h-3 bg-yellow-400 border border-black dark:border-white inline-block" />
                                    <span className="w-3 h-3 bg-emerald-500 border border-black dark:border-white inline-block" />
                                </div>
                                <span className="font-mono text-xs font-black uppercase tracking-widest text-muted-foreground">
                                    AMMAR_DEV.JPG
                                </span>
                            </div>

                            {/* Rectangular Portrait Photo */}
                            <div className="relative w-full aspect-[4/5] bg-muted border-2 border-black dark:border-white overflow-hidden">
                                <Image
                                    src={foto[0]}
                                    alt="Ahmad Ammar Musyaffa - Software Engineer & Fullstack Developer"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 420px"
                                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>

                            {/* Card Meta Footer */}
                            <div className="pt-3.5 flex items-center justify-between text-[11px] font-mono font-bold text-muted-foreground">
                                <span>ROLE: SOFTWARE ENGINEER</span>
                                <span>BASE: ID (UTC+7)</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
