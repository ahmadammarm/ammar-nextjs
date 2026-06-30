"use client"

import { education } from '@/constants/education'
import { motion } from 'framer-motion'

function EducationSection() {
    return (
        <section id="educations" className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
                    >
                        Education Background
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                        className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Here are my educational journey and background
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Timeline Vertical Line */}
                    <div className="absolute left-[11px] md:left-[15px] top-4 bottom-4 w-px bg-gray-300 dark:bg-gray-800"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8 md:space-y-12">
                        {education.map((edu, index) => (
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
                                    <div className="p-5 md:p-8 flex flex-col md:flex-row gap-6 md:items-start">
                                        
                                        {/* Content Column */}
                                        <div className="flex-grow">
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                                <div className="space-y-1.5">
                                                    {/* Institution Name */}
                                                    <h3 className="text-xl md:text-2xl font-bold text-brand-blue">
                                                        {edu.nama}
                                                    </h3>
                                                    {/* Major / Studies */}
                                                    <div className="text-lg font-medium text-foreground">
                                                        {edu.jurusan}
                                                    </div>
                                                    <div className="flex flex-wrap items-center gap-1.5 text-sm md:text-base text-gray-500 dark:text-gray-400">
                                                        <span>Malang, Indonesia</span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                                                    {/* Date Range */}
                                                    <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue ring-1 ring-inset ring-brand-blue/20">
                                                        {edu.tahun}
                                                    </div>
                                                </div>
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

export default EducationSection;