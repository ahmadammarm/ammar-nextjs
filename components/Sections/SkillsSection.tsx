"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { frontendSkills, backendSkills, tools, aiSkills } from "@/constants/skill";
import { Skill } from "@/types/skill";

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
    const isDarkLogo =
        skill.gambar.includes("nextjs") ||
        skill.gambar.includes("expressjs") ||
        skill.gambar.includes("github");

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            viewport={{ once: true }}
            className="group bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-4 md:p-5 flex flex-col items-center justify-center transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-hover dark:hover:shadow-neo-hover-dark"
        >
            {/* Logo Container */}
            <div
                className={`relative w-12 h-12 md:w-16 md:h-16 p-2 mb-3 flex items-center justify-center border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] group-hover:scale-105 transition-transform ${
                    isDarkLogo ? "bg-white" : "bg-muted/40"
                }`}
            >
                <Image
                    src={skill.gambar}
                    alt={skill.nama}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Skill Name */}
            <h4 className="text-sm md:text-base font-bold text-center text-foreground group-hover:text-brand-blue transition-colors">
                {skill.nama}
            </h4>
        </motion.div>
    );
}

export default function SkillsSection(): React.ReactElement {
    const [activeTab, setActiveTab] = useState<"frontend" | "backend">("frontend");

    const currentSkills = activeTab === "frontend" ? frontendSkills : backendSkills;

    return (
        <section id="skills" className="w-full py-16 md:py-20 lg:py-24 border-t-2 border-black dark:border-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-block px-4 py-1.5 bg-brand-blue text-black text-xs md:text-sm font-bold uppercase tracking-wider border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark mb-4">
                            Capabilities
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
                            Skills &amp; <span className="text-brand-blue">Technologies</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
                            The programming languages, frameworks, and developer tools I work with
                        </p>
                    </motion.div>
                </div>

                {/* Categorized Skills Grids */}
                <div className="space-y-10 md:space-y-12">
                    {/* Category 1: Frameworks & Languages (Tab Filter) */}
                    <div className="bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b-2 border-black dark:border-white">
                            <div>
                                <h3 className="text-xl md:text-2xl font-black text-foreground">
                                    Frameworks &amp; Languages
                                </h3>
                                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                                    {activeTab === "frontend"
                                        ? "Client-side libraries, frameworks, and responsive UI engineering"
                                        : "Server-side runtimes, APIs, databases, and backend services"}
                                </p>
                            </div>

                            {/* Neobrutalist Tab Buttons */}
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("frontend")}
                                    className={`px-5 py-2.5 text-xs md:text-sm font-black uppercase tracking-wider border-2 border-black dark:border-white transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                                        activeTab === "frontend"
                                            ? "bg-brand-blue text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] translate-x-[2px] translate-y-[2px]"
                                            : "bg-background text-foreground shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-muted"
                                    }`}
                                >
                                    <span
                                        className={`w-2 h-2 border border-black dark:border-white ${
                                            activeTab === "frontend" ? "bg-black" : "bg-muted-foreground"
                                        }`}
                                    />
                                    Frontend
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveTab("backend")}
                                    className={`px-5 py-2.5 text-xs md:text-sm font-black uppercase tracking-wider border-2 border-black dark:border-white transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                                        activeTab === "backend"
                                            ? "bg-brand-blue text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] translate-x-[2px] translate-y-[2px]"
                                            : "bg-background text-foreground shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-muted"
                                    }`}
                                >
                                    <span
                                        className={`w-2 h-2 border border-black dark:border-white ${
                                            activeTab === "backend" ? "bg-black" : "bg-muted-foreground"
                                        }`}
                                    />
                                    Backend
                                </button>
                            </div>
                        </div>

                        {/* Animated Grid Container */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.25 }}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
                            >
                                {currentSkills.map((skill, index) => (
                                    <SkillCard key={skill.nama} skill={skill} index={index} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Category 2 & 3: AI Integration & Tools */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* AI & Machine Learning */}
                        <div className="bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-6 md:p-8 flex flex-col justify-between">
                            <div>
                                <div className="mb-6 pb-4 border-b-2 border-black dark:border-white">
                                    <h3 className="text-xl md:text-2xl font-black text-foreground">
                                        AI &amp; Machine Learning
                                    </h3>
                                </div>
                                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                                    Machine learning frameworks, neural networks, LLM APIs, and intelligent data processing workflows.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {aiSkills.map((skill, index) => (
                                    <SkillCard key={skill.nama} skill={skill} index={index} />
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-6 md:p-8 flex flex-col justify-between">
                            <div>
                                <div className="mb-6 pb-4 border-b-2 border-black dark:border-white">
                                    <h3 className="text-xl md:text-2xl font-black text-foreground">
                                        Tools &amp; Workflow
                                    </h3>
                                </div>
                                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                                    Version control, development environments, and deployment tools used throughout project lifecycles.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {tools.map((skill, index) => (
                                    <SkillCard key={skill.nama} skill={skill} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
