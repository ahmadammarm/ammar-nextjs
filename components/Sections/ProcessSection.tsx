"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { processes } from '@/constants/process';

const ProcessSection = () => {
    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter inline-block px-4 py-2 bg-brand-blue border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark">
                        My Process
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
                        How I turn ideas into high-quality digital solutions through a structured workflow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="h-full p-6 bg-white dark:bg-zinc-900 border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark flex flex-col items-start rounded-md transform transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-hover dark:hover:shadow-neo-hover-dark active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-active dark:active:shadow-neo-active-dark cursor-default">
                                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-brand-blue border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark font-black text-xl">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-black mb-3 uppercase tracking-tight">
                                    {process.title}
                                </h3>
                                <p className="text-muted-foreground font-medium">
                                    {process.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
