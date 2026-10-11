"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    {
        value: "2+",
        label: "Years Experience",
        detail: "Software Engineering & Fullstack",
    },
    {
        value: "10+",
        label: "Projects Shipped",
        detail: "SaaS, E-Learning, & Web Apps",
        featured: true,
    },
    {
        value: "5+",
        label: "AI Integrations",
        detail: "LLM APIs, Evaluators & Workflows",
    },
    {
        value: "100%",
        label: "On-time Delivery",
        detail: "Quality & Reliable Execution",
    },
];

export default function StatsSection(): React.ReactElement {
    return (
        <section className="py-12 md:py-16 bg-background relative overflow-hidden border-y-2 border-black dark:border-white">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div
                                className={`h-full p-6 md:p-8 border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark flex flex-col justify-between transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-hover dark:hover:shadow-neo-hover-dark active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-active dark:active:shadow-neo-active-dark cursor-default ${
                                    stat.featured
                                        ? "bg-brand-blue text-black"
                                        : "bg-background text-foreground"
                                }`}
                            >
                                <div>
                                    <p
                                        className={`text-4xl sm:text-5xl font-black tracking-tight mb-2 ${
                                            stat.featured ? "text-black" : "text-brand-blue"
                                        }`}
                                    >
                                        {stat.value}
                                    </p>
                                    <h3
                                        className={`text-lg font-bold ${
                                            stat.featured ? "text-black" : "text-foreground"
                                        }`}
                                    >
                                        {stat.label}
                                    </h3>
                                </div>

                                <p
                                    className={`text-xs sm:text-sm mt-3 pt-3 border-t-2 border-black dark:border-white ${
                                        stat.featured ? "text-black/80 font-semibold" : "text-muted-foreground"
                                    }`}
                                >
                                    {stat.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
