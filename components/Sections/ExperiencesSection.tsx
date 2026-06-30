"use client"

import { experiences } from '@/constants/experiences'
import { Badge } from '@/components/ui/badge'
import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const ExperiencesSection = () => {
    return (
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                    >
                        Work Experience
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                        className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Here are some of my work experiences that I have gained
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Timeline Vertical Line */}
                    <div className="absolute left-[11px] md:left-[15px] top-4 bottom-4 w-px bg-gray-300 dark:bg-gray-800"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-10 md:pl-16"
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1 top-6 transform -translate-y-1/2 z-20">
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-background border-2 border-brand-blue rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 md:w-3 md:h-3 bg-brand-blue rounded-full"></div>
                                    </div>
                                </div>

                                {/* Timeline Card */}
                                <div className="group relative bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md">
                                    <div className="p-5 md:p-8">
                                        {/* Header area */}
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                            <div className="space-y-1.5">
                                                {/* Role */}
                                                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                                    {exp.jabatan}
                                                </h3>
                                                {/* Company & Location */}
                                                <div className="flex flex-wrap items-center gap-1.5 text-sm md:text-base text-gray-500 dark:text-gray-400">
                                                    <span className="font-medium text-gray-700 dark:text-gray-300">{exp.nama}</span>
                                                    <span>·</span>
                                                    <span>Malang, Indonesia</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                                                {/* Date Range */}
                                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                    {exp.tahun}
                                                </div>
                                                {/* Badge */}
                                                <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue ring-1 ring-inset ring-brand-blue/20">
                                                    {exp.kontrak}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Job Description Points */}
                                        <ul className="space-y-3 md:space-y-4 mb-6">
                                            {exp.deskripsi.map((item, itemIndex) => (
                                                <li
                                                    key={itemIndex}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="text-gray-400 dark:text-gray-500 font-bold mt-0.5">•</span>
                                                    <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack Badges */}
                                        {exp.logo && exp.logo.length > 0 && (
                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800/50">
                                                {exp.logo.map((tech, i) => {
                                                    const techName = tech.split('/').pop()?.split('.')[0] || 'Tech stack';
                                                    return (
                                                        <div 
                                                            key={i} 
                                                            className="flex items-center justify-center p-1.5 bg-gray-50 dark:bg-[#1A1A1A] rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-[#222] transition-colors"
                                                            title={techName}
                                                        >
                                                            <Image src={tech} alt={techName} width={20} height={20} className="w-5 h-5 object-contain" />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperiencesSection