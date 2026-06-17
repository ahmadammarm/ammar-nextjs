"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Projects Delivered", value: "10+" },
    { label: "AI Integrations", value: "5+" },
    { label: "On-time Delivery", value: "100%" },
];

const StatsSection = () => {
    return (
        <section className="py-12 md:py-16 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="bg-brand-blue p-8 border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark rounded-md flex flex-col items-center justify-center text-center transform transition-all duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-neo-hover dark:group-hover:shadow-neo-hover-dark">
                                <h3 className="text-4xl md:text-5xl font-black text-black mb-2">
                                    {stat.value}
                                </h3>
                                <p className="text-sm md:text-base font-bold text-black/80 uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
