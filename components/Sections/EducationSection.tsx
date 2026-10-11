"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { education } from "@/constants/education";
import { MapPin } from "lucide-react";

export default function EducationSection(): React.ReactElement {
    return (
        <section id="educations" className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-muted/20 border-t-2 border-black dark:border-white">
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
                            Education
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
                            Academic <span className="text-brand-blue">Background</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
                            My formal academic education and informatics degree
                        </p>
                    </motion.div>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Timeline Track */}
                    <div className="absolute left-[16px] md:left-[24px] top-6 bottom-6 w-[3px] bg-black dark:bg-white" />

                    {/* Timeline Items */}
                    <div className="space-y-8 md:space-y-12">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-12 md:pl-20"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1 md:left-3 top-7 transform -translate-y-1/2 z-20">
                                    <div className="w-6 h-6 md:w-7 md:h-7 bg-brand-blue border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark" />
                                </div>

                                {/* Education Card */}
                                <div className="bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-6 md:p-8 transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-hover dark:hover:shadow-neo-hover-dark active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-active dark:active:shadow-neo-active-dark cursor-default">
                                    <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                                        {/* Institution Logo */}
                                        {edu.logo && (
                                            <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 bg-white p-2 border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark flex items-center justify-center">
                                                <Image
                                                    src={edu.logo}
                                                    alt={`${edu.nama} logo`}
                                                    width={56}
                                                    height={56}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="flex-grow">
                                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                                <div>
                                                    <h3 className="text-xl sm:text-2xl font-black text-foreground">
                                                        {edu.nama}
                                                    </h3>
                                                    <p className="text-base sm:text-lg font-bold text-brand-blue mt-0.5">
                                                        {edu.jurusan}
                                                    </p>
                                                    <p className="flex items-center gap-1.5 text-sm text-muted-foreground font-semibold mt-1">
                                                        <MapPin className="w-3.5 h-3.5" />
                                                        <span>Malang, East Java, Indonesia</span>
                                                    </p>
                                                </div>

                                                <span className="self-start sm:self-auto px-3 py-1 bg-brand-blue text-black font-bold text-xs border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                                    {edu.tahun}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
