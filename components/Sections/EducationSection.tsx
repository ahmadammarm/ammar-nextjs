"use client"

import { Card, CardHeader, CardDescription } from '@/components/ui/card';
import { education } from '@/constants/education';
import { motion } from 'framer-motion';

function EducationSection() {
    return (
        <div id="educations" className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent"
                    >
                        Education Background
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                        className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Here are some of my education background
                    </motion.p>
                </div>

                {/* Education Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeOut',
                                delay: 0.2 * (index + 1)
                            }}
                            whileHover={{ y: -8 }}
                            className="h-full"
                        >
                            <Card className="relative h-full group overflow-hidden bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 hover:border-teal-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-teal-500/20">
                                {/* Card Content */}
                                <div className="relative z-10 p-6 md:p-8 flex flex-col items-center text-center h-full">
                                    {/* Icon/Logo placeholder with background */}
                                    <div className="mb-6 relative">
                                        <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-teal-500/10 to-teal-600/10 rounded-full flex items-center justify-center border-2 border-teal-500/30 group-hover:border-teal-500 group-hover:scale-110 transition-all duration-300">
                                            {/* Icon - you can replace with actual logo */}
                                            <svg
                                                className="w-10 h-10 md:w-12 md:h-12 text-teal-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* School/University Name */}
                                    <CardHeader className="p-0 mb-4">
                                        <h3 className="text-xl md:text-2xl font-bold text-teal-500 group-hover:text-teal-600 transition-colors duration-300 leading-tight">
                                            {edu.nama}
                                        </h3>
                                    </CardHeader>

                                    {/* Divider */}
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent mb-4 group-hover:w-24 transition-all duration-300"></div>

                                    {/* Major/Program */}
                                    <CardDescription className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                                        {edu.jurusan}
                                    </CardDescription>

                                    {/* Year with icon */}
                                    <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400 mt-auto pt-4">
                                        <svg
                                            className="w-5 h-5 text-teal-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <span className="font-semibold">{edu.tahun}</span>
                                    </div>

                                    {/* Decorative corner element */}
                                    <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-teal-500/20 rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Optional: Timeline connector for larger screens */}
                {education.length > 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent -z-10"></div>
                )}
            </div>
        </div>
    );
}

export default EducationSection;