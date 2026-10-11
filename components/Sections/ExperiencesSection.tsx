"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/constants/experiences";
import { MapPin } from "lucide-react";

export default function ExperiencesSection(): React.ReactElement {
    return (
        <section id="experiences" className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-block px-4 py-1.5 bg-brand-blue text-black text-xs md:text-sm font-bold uppercase tracking-wider border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark mb-4">
                            Career Path
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
                            Work <span className="text-brand-blue">Experience</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
                            My professional journey working with tech companies, startups, and client projects
                        </p>
                    </motion.div>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Timeline Track */}
                    <div className="absolute left-[16px] md:left-[24px] top-6 bottom-6 w-[3px] bg-black dark:bg-white" />

                    {/* Timeline Items */}
                    <div className="space-y-8 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-12 md:pl-20"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1 md:left-3 top-7 transform -translate-y-1/2 z-20">
                                    <div className="w-6 h-6 md:w-7 md:h-7 bg-brand-blue border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark" />
                                </div>

                                {/* Experience Card */}
                                <div className="bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-6 md:p-8 transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-hover dark:hover:shadow-neo-hover-dark active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-active dark:active:shadow-neo-active-dark cursor-default">
                                    {/* Header Row */}
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5 pb-5 border-b-2 border-black dark:border-white">
                                        <div className="flex items-start gap-4">
                                            {exp.companyLogo && (
                                                <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white p-1.5 border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark flex items-center justify-center">
                                                    <Image
                                                        src={exp.companyLogo}
                                                        alt={`${exp.nama} logo`}
                                                        width={56}
                                                        height={56}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-black text-foreground">
                                                    {exp.jabatan}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 text-sm md:text-base font-semibold text-muted-foreground mt-1">
                                                    <span className="text-brand-blue font-bold">{exp.nama}</span>
                                                    {exp.lokasi && (
                                                        <>
                                                            <span>·</span>
                                                            <span className="flex items-center gap-1">
                                                                <MapPin className="w-3.5 h-3.5" />
                                                                {exp.lokasi}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Date and Badges */}
                                        <div className="flex flex-wrap items-center md:flex-col md:items-end gap-2 shrink-0">
                                            <span className="font-bold text-xs md:text-sm text-muted-foreground">
                                                {exp.tahun}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                {exp.kontrak && (
                                                    <span className="px-2.5 py-0.5 bg-brand-blue text-black font-bold text-xs border-2 border-black dark:border-white">
                                                        {exp.kontrak}
                                                    </span>
                                                )}
                                                <span className="px-2.5 py-0.5 bg-muted text-foreground font-bold text-xs border-2 border-black dark:border-white">
                                                    Remote
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-3 mb-5">
                                        {exp.deskripsi.map((item, itemIndex) => (
                                            <p
                                                key={itemIndex}
                                                className="text-sm md:text-base text-foreground/90 leading-relaxed"
                                            >
                                                {item}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Tech Stack Icons */}
                                    {exp.logo && exp.logo.length > 0 && (
                                        <div className="pt-4 border-t-2 border-black dark:border-white flex flex-wrap items-center gap-2">
                                            {exp.logo.map((tech, i) => {
                                                const techName =
                                                    tech.split("/").pop()?.split(".")[0] || "Tech stack";
                                                return (
                                                    <div
                                                        key={i}
                                                        className="flex items-center justify-center p-1.5 bg-muted/50 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                                                        title={techName}
                                                    >
                                                        <Image
                                                            src={tech}
                                                            alt={techName}
                                                            width={20}
                                                            height={20}
                                                            className="w-5 h-5 object-contain"
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
