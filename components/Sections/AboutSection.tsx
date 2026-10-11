"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { about } from "@/constants/about";
import { Download, MapPin, ArrowRight } from "lucide-react";

export default function AboutSection(): React.ReactElement {
    const { nama, negara, role, CV, deskripsi, foto } = about[0];

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Section Header */}
            <div className="relative z-10 max-w-7xl w-full mx-auto mb-12 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="inline-block px-4 py-1.5 bg-brand-blue text-black text-xs md:text-sm font-bold uppercase tracking-wider border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark mb-4">
                        About Me
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground">
                        Get to Know <span className="text-brand-blue">Me Better</span>
                    </h1>
                </motion.div>
            </div>

            {/* Content Layout */}
            <div className="relative z-10 max-w-7xl w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Photo Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex justify-center"
                    >
                        <div className="relative w-full max-w-sm md:max-w-md">
                            {/* Color Accent Underlay */}
                            <div className="absolute inset-0 bg-brand-blue border-2 border-black dark:border-white translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" />

                            {/* Main Photo Card */}
                            <div className="relative bg-background border-2 border-black dark:border-white p-3 md:p-4 shadow-neo dark:shadow-neo-dark">
                                <div className="relative w-full aspect-[4/5] overflow-hidden border-2 border-black dark:border-white bg-muted">
                                    <Image
                                        src={foto}
                                        alt={nama}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        className="object-cover object-center"
                                        priority
                                    />
                                </div>

                                {/* Photo Card Bottom Strip */}
                                <div className="mt-3 pt-3 border-t-2 border-black dark:border-white flex items-center justify-between text-xs md:text-sm font-bold text-foreground">
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="text-brand-blue w-4 h-4" />
                                        {negara}, Indonesia
                                    </span>
                                    <span className="text-muted-foreground font-semibold">
                                        Fullstack Dev
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-6 md:p-8 lg:p-10">
                            {/* Greeting */}
                            <div className="mb-6">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
                                    Hi, I&apos;m{" "}
                                    <span className="text-brand-blue">{nama}</span>
                                </h2>
                                <p className="text-base sm:text-lg font-bold text-muted-foreground mt-2">
                                    {role}
                                </p>
                            </div>

                            {/* Solid Divider */}
                            <div className="w-16 h-1.5 bg-brand-blue border-2 border-black dark:border-white mb-6" />

                            {/* Narrative Bio */}
                            <div className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed">
                                <p>{deskripsi}</p>
                            </div>

                            {/* Key Highlights Grid */}
                            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t-2 border-black dark:border-white">
                                <div className="p-3 bg-muted/40 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] cursor-default">
                                    <p className="text-xs font-bold text-muted-foreground uppercase">
                                        Location
                                    </p>
                                    <p className="font-bold text-sm text-foreground mt-0.5">
                                        {negara}, ID
                                    </p>
                                </div>
                                <div className="p-3 bg-muted/40 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] cursor-default">
                                    <p className="text-xs font-bold text-muted-foreground uppercase">
                                        Education
                                    </p>
                                    <p className="font-bold text-sm text-foreground mt-0.5">
                                        Informatics Eng. UM
                                    </p>
                                </div>
                                <div className="p-3 bg-muted/40 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] cursor-default">
                                    <p className="text-xs font-bold text-muted-foreground uppercase">
                                        Core Stack
                                    </p>
                                    <p className="font-bold text-sm text-foreground mt-0.5 truncate">
                                        Next.js, Laravel, Go
                                    </p>
                                </div>
                                <div className="p-3 bg-muted/40 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] cursor-default">
                                    <p className="text-xs font-bold text-muted-foreground uppercase">
                                        Specialization
                                    </p>
                                    <p className="font-bold text-sm text-foreground mt-0.5">
                                        Software Engineering &amp; Fullstack
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href={CV}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-blue text-black font-bold text-base border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-hover dark:hover:shadow-neo-hover-dark active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-active dark:active:shadow-neo-active-dark transition-all duration-200 cursor-pointer"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download Resume</span>
                                </a>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-background text-foreground font-bold text-base border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-hover dark:hover:shadow-neo-hover-dark active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-active dark:active:shadow-neo-active-dark transition-all duration-200 cursor-pointer"
                                >
                                    <span>Contact Me</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
