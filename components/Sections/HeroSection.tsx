"use client"

import React from "react";
import { profile } from "@/constants/profile";
import { DownloadIcon, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function HeroSection(): React.JSX.Element {
    const { nama, role, CV, foto } = profile[0];

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Minimal Background Decoration */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-teal-500/3 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl w-full mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Greeting */}
                        <div className="mb-6 md:mb-8">
                            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-2 font-medium animate-fade-in">
                                Hi there!
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 leading-tight animate-fade-in-up">
                                Im{' '}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-teal-500 hover:text-teal-600 transition-colors duration-300">
                                        {nama}
                                    </span>
                                </span>
                            </h2>
                        </div>

                        {/* Role/Title with typing effect style */}
                        <div className="mb-8 md:mb-10 lg:mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full border border-gray-200 dark:border-slate-700 shadow-sm">
                                <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 font-medium">
                                    {role}
                                </p>
                            </div>
                        </div>

                        {/* CTA Button with enhanced hover */}
                        <Link
                            href={CV}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={`CV_Ahmad_Ammar`}
                            className="group relative inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base shadow-lg hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 overflow-hidden hover:-translate-y-1"
                        >
                            {/* Button gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>

                            {/* Button content */}
                            <DownloadIcon className="relative z-10 w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                            <span className="relative z-10">Download CV</span>
                            <ArrowRight className="relative z-10 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />

                            {/* Shine effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                        </Link>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
                        <div className="relative group">
                            
                            {/* Main border with gradient */}
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full opacity-75 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500"></div>

                                {/* Image container */}
                                <div className="relative bg-white dark:bg-slate-900 p-2 rounded-full">
                                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden">
                                        <Image
                                            src={foto[0]}
                                            alt={nama}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                            width={448}
                                            height={448}
                                            priority
                                        />
                                        {/* Overlay gradient on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white dark:bg-slate-900 px-4 py-3 md:px-6 md:py-4 rounded-full shadow-xl border-2 border-teal-500 group-hover:scale-110 transition-transform duration-300">
                                <div className="flex items-center gap-2">
                                    <span className="text-teal-500 font-bold text-sm md:text-base">Available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }

                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }

                .animate-spin-reverse {
                    animation: spin-reverse 15s linear infinite;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default HeroSection;