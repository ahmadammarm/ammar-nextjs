"use client";

import { fullPortfolio } from "@/constants/portfolio";
import { PortfolioCategory } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion, AnimatePresence } from "framer-motion";

type PortfolioTab = "all" | PortfolioCategory;

const categories: { key: PortfolioTab; label: string }[] = [
    { key: "all", label: "All Projects" },
    { key: "web-app", label: "Web Apps" },
    { key: "landing-page", label: "Landing Pages" },
    { key: "company-profile", label: "Company Profiles" },
];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState<PortfolioTab>("all");
    const [items, setItems] = useState<(typeof fullPortfolio)[number][]>([]);
    const [hasMore, setHasMore] = useState(true);

    const ITEMS_PER_LOAD = 6;

    const filteredPortfolio = useMemo(() => {
        return activeCategory === "all"
            ? fullPortfolio
            : fullPortfolio.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    useEffect(() => {
        setItems(filteredPortfolio.slice(0, ITEMS_PER_LOAD));
        setHasMore(filteredPortfolio.length > ITEMS_PER_LOAD);
    }, [filteredPortfolio]);

    const fetchMoreData = () => {
        if (items.length >= filteredPortfolio.length) {
            setHasMore(false);
            return;
        }

        const nextItems = filteredPortfolio.slice(
            items.length,
            items.length + ITEMS_PER_LOAD
        );

        setTimeout(() => {
            setItems((prevItems) => [...prevItems, ...nextItems]);
            if (items.length + nextItems.length >= filteredPortfolio.length) {
                setHasMore(false);
            }
        }, 400);
    };

    return (
        <div className="w-full min-h-screen py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
                >
                    <div className="inline-block px-3.5 py-1 bg-brand-blue text-black text-xs md:text-sm font-black uppercase tracking-wider border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mb-4">
                        Archive &amp; Showcase
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-[1.05]">
                        Selected <span className="text-brand-blue">Projects</span>
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed">
                        A curated archive of fullstack web applications, REST services, landing platforms, and digital products I have built and contributed to.
                    </p>

                    {/* Tactile Push-down Filter Tabs */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {categories.map((tab) => {
                            const isActive = activeCategory === tab.key;
                            return (
                                <button
                                    key={tab.key}
                                    type="button"
                                    onClick={() => setActiveCategory(tab.key)}
                                    className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-black dark:border-white transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                                        isActive
                                            ? "bg-brand-blue text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] translate-x-[2px] translate-y-[2px]"
                                            : "bg-background text-foreground shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-muted"
                                    }`}
                                >
                                    <span
                                        className={`w-2 h-2 border border-black dark:border-white ${
                                            isActive ? "bg-black" : "bg-muted-foreground"
                                        }`}
                                    />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Infinite Scroll Grid */}
                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={
                        <div className="flex justify-center py-10">
                            <span className="px-5 py-2 bg-muted border-2 border-black dark:border-white text-xs font-black uppercase tracking-wider text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                Loading More Projects...
                            </span>
                        </div>
                    }
                >
                    <AnimatePresence mode="popLayout">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {items.map((port, index) => {
                                const formattedCategory = port.category
                                    .split("-")
                                    .map((word) => word.toUpperCase())
                                    .join(" ");

                                return (
                                    <motion.div
                                        key={port.slug || index}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
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
                                                        const techName =
                                                            tech.split("/").pop()?.split(".")[0] || "Tech";
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

                                                    {port.source && (
                                                        <Link
                                                            href={port.source}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            title="Source Code"
                                                            className="p-2.5 bg-background text-foreground border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center cursor-pointer"
                                                        >
                                                            <FaGithub className="w-4 h-4" />
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </AnimatePresence>
                </InfiniteScroll>
            </div>
        </div>
    );
}
