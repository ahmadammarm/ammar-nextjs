"use client"

import HeroSection from "@/components/Sections/HeroSection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { about } from "@/constants/about";
import { portfolio } from "@/constants/portfolio";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaInfoCircle, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
    const { nama, deskripsi, foto } = about[0];

    return (
        <>
            <HeroSection />

            {/* About Section Start */}
            <section className='relative min-h-screen flex items-center px-4 py-16 md:py-20 lg:py-24 overflow-hidden'>
                <div className='container mx-auto relative z-10 max-w-7xl'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
                        
                        {/* Left Column - Text Content */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className='flex flex-col'
                        >
                            <h2 className='text-brand-blue font-bold tracking-wider text-3xl md:text-4xl lg:text-5xl uppercase mb-6 md:mb-8'>
                                About Me
                            </h2>
                            
                            <div className='text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 mb-8'>
                                <p>
                                    {deskripsi}
                                </p>
                            </div>
                            
                            <div>
                                <Link href="/about">
                                    <Button className="group relative bg-brand-blue text-black px-8 py-6 text-base font-bold border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 hover:translate-y-[2px] hover:translate-x-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                                        More about me
                                        <FaArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column - Stats Grid */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='grid grid-cols-2 gap-4 md:gap-6'
                        >
                            {[
                                { number: "2+", label: "Years Experience" },
                                { number: "10+", label: "Projects Built" },
                                { number: "2+", label: "Companies Worked With" },
                                { number: "5+", label: "Technologies" }
                            ].map((stat, index) => (
                                <div 
                                    key={index} 
                                    className='bg-background p-6 md:p-8 flex flex-col items-center justify-center text-center border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark rounded-xl transition-transform hover:-translate-y-1'
                                >
                                    <span className='text-4xl md:text-5xl font-bold text-foreground mb-2'>
                                        {stat.number}
                                    </span>
                                    <span className='text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium'>
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* About Section End */}

            {/* Portfolio Section Start */}
            <div className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden">
                {/* Minimal Background Decoration - Simplified */}
                <div className="absolute top-20 right-0 w-72 h-72 border-4 border-brand-blue/10 rounded-full"></div>
                <div className="absolute bottom-40 left-0 w-96 h-96 border-4 border-brand-blue/10 rounded-full"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-foreground">
                            Portfolio
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed px-4">
                            Here are some of the projects I have worked on, including collaborations with teams. Click the detail button to learn more about each project.
                        </p>
                    </motion.div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12">
                        {portfolio.map((port, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group h-full"
                            >
                                <div className="relative h-full bg-background border-2 border-black dark:border-white rounded-md overflow-hidden shadow-neo dark:shadow-neo-dark">
                                    {/* Image Container */}
                                    <div className="relative w-full h-56 md:h-64 overflow-hidden bg-background border-b-2 border-black dark:border-white">
                                        <Image
                                            src={port.gambar}
                                            alt={port.nama}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                            width={600}
                                            height={400}
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-6 md:p-7 lg:p-8">
                                        {/* Title */}
                                        <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-3 line-clamp-1">
                                            {port.nama}
                                        </h3>

                                        {/* Divider */}
                                        <div className="w-12 h-1 bg-black dark:bg-white mb-4 group-hover:w-20 transition-all duration-300"></div>

                                        {/* Tech Stack Badges */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {port.teknologi.map((tech, i) => {
                                                const techName = tech.split('/').pop()?.split('.')[0] || 'Tech stack';
                                                return (
                                                    <div 
                                                        key={i} 
                                                        className="flex items-center justify-center p-1.5 bg-gray-100 dark:bg-slate-800 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                                                        title={techName}
                                                    >
                                                        <Image src={tech} alt={techName} width={20} height={20} className="w-5 h-5 object-contain" />
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Description */}
                                        <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3'>
                                            {port.deskripsi}
                                        </p>

                                        {/* Action Button */}
                                        <Link
                                            href={`/portfolio/${port.slug}`}
                                            className='inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-black rounded-md border-2 border-black dark:border-white font-bold transition-all duration-300 shadow-neo dark:shadow-neo-dark hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-y-[2px] hover:translate-x-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
                                        >
                                            <FaInfoCircle className='text-base group-hover:scale-110 transition-transform duration-300' />
                                            <span>View Details</span>
                                            <FaArrowRight className='text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300' />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* More Projects Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex justify-center items-center"
                    >
                        <Link href={'/portfolio'}>
                            <Button className="group relative bg-brand-blue text-black px-8 py-4 text-base font-bold border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 hover:translate-y-[2px] hover:translate-x-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                                More Projects
                                <FaArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
            {/* Portfolio Section End */}
        </>
    );
}