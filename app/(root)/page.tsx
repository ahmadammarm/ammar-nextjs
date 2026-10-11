"use client";

import HeroSection from "@/components/Sections/HeroSection";
import { about } from "@/constants/about";
import { portfolio } from "@/constants/portfolio";
import { contact } from "@/constants/contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
    const { deskripsi } = about[0];
    const whatsappContact = contact.find((c) => c.nama === "WhatsApp");
    const waLink = whatsappContact ? whatsappContact.link : "https://wa.me/6281217952403";

    const marqueeKeywords = [
        "NEXT.JS",
        "GO (GOLANG)",
        "LARAVEL",
        "FASTAPI",
        "TYPESCRIPT",
        "SPRING BOOT",
        "POSTGRESQL",
        "DOCKER",
        "REACT",
        "REDIS",
        "TAILWIND CSS",
        "RESTFUL APIS",
        "CLEAN ARCHITECTURE",
        "FULLSTACK DEVELOPMENT",
    ];

    const stats = [
        {
            number: "2+",
            label: "Years Experience",
            subtext: "In web & backend engineering",
        },
        {
            number: "10+",
            label: "Projects Built",
            subtext: "Fullstack apps & production tools",
        },
        {
            number: "2+",
            label: "Companies & Teams",
            subtext: "Professional collaborations",
        },
        {
            number: "5+",
            label: "Core Technologies",
            subtext: "Languages, runtimes & frameworks",
        },
    ];

    return (
        <div className="w-full bg-background">
            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. Running Marquee Ticker */}
            <div className="w-full bg-brand-blue text-black border-b-2 border-black dark:border-white py-3 overflow-hidden select-none">
                <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
                    {[...marqueeKeywords, ...marqueeKeywords].map((keyword, index) => (
                        <div key={index} className="flex items-center gap-6">
                            <span className="text-xs md:text-sm font-black uppercase tracking-widest">
                                {keyword}
                            </span>
                            <span className="text-black text-xs font-black">★</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. About Snippet & Stats Section */}
            <section className="relative w-full py-16 md:py-20 lg:py-24 border-b-2 border-black dark:border-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        {/* Left Column: Story & Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 flex flex-col"
                        >
                            <div className="inline-block px-3.5 py-1 bg-brand-blue text-black text-xs md:text-sm font-black uppercase tracking-wider border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mb-4 w-fit">
                                About Me
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-tight mb-6">
                                Engineering <span className="text-brand-blue">Reliable</span> Web Systems
                            </h2>

                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                                {deskripsi}
                            </p>

                            <div>
                                <Link
                                    href="/about"
                                    className="group px-6 py-3.5 bg-background text-foreground border-2 border-black dark:border-white font-black text-xs md:text-sm uppercase tracking-wider shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all inline-flex items-center gap-2 cursor-pointer"
                                >
                                    <span>Read Full Story &amp; Skills</span>
                                    <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column: 4 Neobrutalist Stats Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-5 md:p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-hover dark:hover:shadow-neo-hover-dark"
                                >
                                    <span className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                                        {stat.number}
                                    </span>
                                    <div className="mt-3 pt-3 border-t-2 border-black/10 dark:border-white/10">
                                        <h4 className="text-xs md:text-sm font-black uppercase tracking-wider text-foreground">
                                            {stat.label}
                                        </h4>
                                        <p className="text-[11px] text-muted-foreground mt-0.5">
                                            {stat.subtext}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Featured Projects Section */}
            <section className="relative w-full py-16 md:py-20 lg:py-24 border-b-2 border-black dark:border-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
                    >
                        <div className="inline-block px-3.5 py-1 bg-brand-blue text-black text-xs md:text-sm font-black uppercase tracking-wider border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mb-4">
                            Portfolio
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
                            Featured <span className="text-brand-blue">Projects</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground mt-3">
                            A curated selection of web applications, platforms, and fullstack solutions engineered for scale and performance.
                        </p>
                    </motion.div>

                    {/* Project Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                        {portfolio.map((port, index) => {
                            const formattedCategory = port.category
                                .split("-")
                                .map((word) => word.toUpperCase())
                                .join(" ");

                            return (
                                <motion.div
                                    key={port.slug || index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group h-full flex flex-col"
                                >
                                    <div className="relative h-full bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark flex flex-col overflow-hidden transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-hover dark:hover:shadow-neo-hover-dark">
                                        {/* Image Container with Badges */}
                                        <div className="relative w-full h-52 sm:h-56 md:h-60 border-b-2 border-black dark:border-white overflow-hidden bg-muted">
                                            {/* Category Sticker */}
                                            <div className="absolute top-3 right-3 z-10 bg-brand-blue text-black border-2 border-black text-[11px] font-black uppercase px-2.5 py-1 tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                {formattedCategory}
                                            </div>

                                            {/* Year Sticker */}
                                            {port.year && (
                                                <div className="absolute top-3 left-3 z-10 bg-background text-foreground border-2 border-black dark:border-white text-[11px] font-mono font-black px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                                    {port.year}
                                                </div>
                                            )}

                                            <Image
                                                src={port.gambar}
                                                alt={port.nama}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-5 md:p-6 flex flex-col flex-grow">
                                            {/* Title */}
                                            <h3 className="text-xl md:text-2xl font-black text-foreground group-hover:text-brand-blue transition-colors line-clamp-1">
                                                {port.nama}
                                            </h3>

                                            {/* Divider */}
                                            <div className="w-10 h-0.5 bg-black dark:bg-white my-3 group-hover:w-16 transition-all duration-300" />

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-5">
                                                {port.deskripsi}
                                            </p>

                                            {/* Tech Stack Badges */}
                                            <div className="flex flex-wrap items-center gap-1.5 mb-6 mt-auto">
                                                {port.teknologi.map((tech, i) => {
                                                    const techName = tech.split("/").pop()?.split(".")[0] || "Tech";
                                                    const isDarkLogo =
                                                        tech.includes("nextjs") ||
                                                        tech.includes("expressjs") ||
                                                        tech.includes("github");

                                                    return (
                                                        <div
                                                            key={i}
                                                            className={`w-7 h-7 p-1 flex items-center justify-center border border-black dark:border-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] ${
                                                                isDarkLogo ? "bg-white" : "bg-background"
                                                            }`}
                                                            title={techName}
                                                        >
                                                            <Image
                                                                src={tech}
                                                                alt={techName}
                                                                width={20}
                                                                height={20}
                                                                className="w-full h-full object-contain"
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Action Buttons Row */}
                                            <div className="flex items-center gap-2 pt-2 border-t border-black/10 dark:border-white/10">
                                                <Link
                                                    href={`/portfolio/${port.slug}`}
                                                    className="flex-1 py-2.5 px-3 bg-brand-blue text-black border-2 border-black dark:border-white font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                                                >
                                                    <span>View Details</span>
                                                    <FaArrowRight className="w-3 h-3" />
                                                </Link>

                                                {port.link && (
                                                    <Link
                                                        href={port.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title="Live Preview"
                                                        className="p-2.5 bg-background text-foreground border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center cursor-pointer"
                                                    >
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Section Footer CTA */}
                    <div className="flex justify-center">
                        <Link
                            href="/portfolio"
                            className="group px-8 py-4 bg-background text-foreground border-2 border-black dark:border-white font-black text-sm md:text-base uppercase tracking-wider shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all inline-flex items-center gap-3 cursor-pointer"
                        >
                            <span>Explore All Projects</span>
                            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. Bottom Contact CTA Banner */}
            <section className="relative w-full py-16 md:py-20 lg:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-background border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-8 sm:p-12 lg:p-16 relative overflow-hidden"
                    >
                        {/* Eyebrow Stamp */}
                        <div className="inline-block px-3.5 py-1 bg-brand-blue text-black text-xs font-black uppercase tracking-wider border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mb-4">
                            Let&apos;s Connect
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground leading-[1.1] mb-5 max-w-4xl">
                            Have A Project In Mind? <span className="text-brand-blue">Let&apos;s Build It Together.</span>
                        </h2>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            Whether you need a scalable fullstack web application, custom backend APIs, database architecture, or have an exciting engineering opportunity, let&apos;s discuss how we can collaborate.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/contact"
                                className="group px-8 py-4 bg-brand-blue text-black border-2 border-black dark:border-white font-black text-sm md:text-base uppercase tracking-wider shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all inline-flex items-center gap-2 cursor-pointer"
                            >
                                <Mail className="w-4 h-4" />
                                <span>Send Me A Message</span>
                                <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-4 bg-background text-foreground border-2 border-black dark:border-white font-black text-sm md:text-base uppercase tracking-wider shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all inline-flex items-center gap-2 cursor-pointer"
                            >
                                <MessageCircle className="w-4 h-4 text-emerald-500" />
                                <span>WhatsApp Chat</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
