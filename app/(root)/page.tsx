"use client"

import Loading from "@/components/Loading";
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
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000);

        return () => clearTimeout(timer)
    }, []);

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <HeroSection />

            {/* About Section Start */}
            <div className='relative min-h-screen flex flex-col justify-center items-center px-4 py-16 md:py-20 lg:py-24 overflow-hidden'>
                {/* Minimal Background Decoration */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/3 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl"></div>

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative z-10 mb-12 md:mb-16 lg:mb-20"
                >
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent mb-3'>
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
                                {/* Decorative border frame */}
                                <div className='absolute -inset-4 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>

                                {/* Image container */}
                                <div className='relative h-full'>
                                    <div className='absolute -inset-1 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300'></div>
                                    <div className='relative bg-white dark:bg-slate-900 p-2 rounded-2xl h-full'>
                                        <Image
                                            src={foto}
                                            alt={nama}
                                            className='w-full h-full rounded-xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500'
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
                            <div className='bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-slate-800'>

                                {/* Greeting */}
                                <div className='mb-6 md:mb-8'>
                                    <p className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight'>
                                        Hi, Im{' '}
                                        <span className='relative inline-block'>
                                            <span className='relative z-10 text-teal-500'>{nama}</span>
                                        </span>
                                    </p>
                                </div>

                                {/* Separator with style */}
                                <div className='relative mb-6 md:mb-8'>
                                    <Separator className="bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
                                    <div className='absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-teal-500 rounded-full'></div>
                                    <div className='absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-teal-500 rounded-full'></div>
                                </div>

                                {/* Description */}
                                <div className='mb-8'>
                                    <p className='text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
                                        {deskripsi}
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <div className='flex justify-start'>
                                    <Link href={'/about'}>
                                        <Button className="group relative bg-teal-500 hover:bg-teal-600 dark:text-white px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 overflow-hidden hover:-translate-y-1">
                                            {/* Button gradient overlay */}
                                            <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>

                                            {/* Button content */}
                                            <span className="relative z-10 flex items-center gap-2">
                                                More About Me
                                                <FaArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* About Section End */}

            {/* Portfolio Section Start */}
            <div className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden">
                {/* Minimal Background Decoration */}
                <div className="absolute top-20 right-0 w-72 h-72 bg-teal-500/3 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-0 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
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
                                <div className="relative h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 border border-gray-100 dark:border-slate-800 hover:border-teal-500/30">
                                    {/* Image Container */}
                                    <div className="relative w-full h-56 md:h-64 overflow-hidden bg-gray-100 dark:bg-slate-800">
                                        <Image
                                            src={port.gambar}
                                            alt={port.nama}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                            width={600}
                                            height={400}
                                            loading="lazy"
                                        />
                                        {/* Gradient overlay on image */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-6 md:p-7 lg:p-8">
                                        {/* Title */}
                                        <h3 className="text-xl md:text-2xl font-bold text-teal-500 group-hover:text-teal-600 mb-3 transition-colors duration-300 line-clamp-1">
                                            {port.nama}
                                        </h3>

                                        {/* Divider */}
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-transparent mb-4 group-hover:w-20 transition-all duration-300"></div>

                                        {/* Description */}
                                        <p className='text-sm md:text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3'>
                                            {port.deskripsi}
                                        </p>

                                        {/* Action Button */}
                                        <Link
                                            href={`/portfolio/${port.slug}`}
                                            className='inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-teal-500 hover:to-teal-600 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500/30 group/btn'
                                        >
                                            <FaInfoCircle className='text-base group-hover/btn:scale-110 transition-transform duration-300' />
                                            <span>View Details</span>
                                            <FaArrowRight className='text-sm opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300' />
                                        </Link>
                                    </div>

                                    {/* Subtle corner decoration */}
                                    <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-teal-500/20 rounded-tr-2xl"></div>
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
                            <Button className="group relative bg-teal-500 hover:bg-teal-600 dark:text-white px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 overflow-hidden hover:-translate-y-1">
                                {/* Button gradient overlay */}
                                <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>

                                {/* Button content */}
                                <span className="relative z-10 flex items-center gap-2">
                                    More Projects
                                    <FaArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
            {/* Portfolio Section End */}
        </>
    );
}