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
            <div className='relative min-h-screen flex flex-col justify-center items-center px-4 py-16 md:py-20 lg:py-24 overflow-hidden'>
                {/* Minimal Background Decoration - Simplified */}
                <div className="absolute top-20 left-10 w-72 h-72 border-4 border-brand-blue/10 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 border-4 border-brand-blue/10 rounded-full"></div>

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative z-10 mb-12 md:mb-16 lg:mb-20"
                >
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-3'>
                        About Me
                    </h2>
                </motion.div>

                {/* Content Container */}
                <div className='relative z-10 max-w-6xl w-full mx-auto px-4'>
                    <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-10'>

                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='w-full lg:w-5/12 flex justify-center lg:justify-start'
                        >
                            <div className='relative group w-80 h-96'>
                                {/* Image container */}
                                <div className='relative h-full'>
                                    <div className='relative bg-background p-2 border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark rounded-md h-full'>
                                        <Image
                                            src={foto}
                                            alt={nama}
                                            className='w-full h-full rounded-md object-cover transform group-hover:scale-[1.02] transition-transform duration-500 border-2 border-black dark:border-white'
                                            loading="lazy"
                                            width={320}
                                            height={384}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Content Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className='w-full lg:w-7/12'
                        >
                            <div className='bg-background rounded-md p-6 md:p-8 shadow-neo dark:shadow-neo-dark border-2 border-black dark:border-white'>

                                {/* Greeting */}
                                <div className='mb-6 md:mb-8'>
                                    <p className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight'>
                                        Hi, Im{' '}
                                        <span className='relative inline-block'>
                                            <span className='relative z-10 text-brand-blue'>{nama}</span>
                                        </span>
                                    </p>
                                </div>

                                {/* Separator with style */}
                                <div className='relative mb-6 md:mb-8'>
                                    <Separator className="bg-black dark:bg-white h-[2px]" />
                                    <div className='absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-blue border-2 border-black dark:border-white rounded-full'></div>
                                    <div className='absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-blue border-2 border-black dark:border-white rounded-full'></div>
                                </div>

                                {/* Description */}
                                <div className='mb-8'>
                                    <p className='text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
                                        {deskripsi}
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
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