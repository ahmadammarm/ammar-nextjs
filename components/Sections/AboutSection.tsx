"use client";

import { about } from '@/constants/about';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

function AboutSection(): React.ReactElement {
    const { nama, deskripsi, foto } = about[0];

    return (
        <div className='relative min-h-screen flex flex-col justify-center items-center px-4 py-16 md:py-20 lg:py-24 overflow-hidden'>
            {/* Section Title */}
            <div className='relative z-10 mb-12 md:mb-16 lg:mb-20'>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent mb-3'>
                    About Me
                </h2>
            </div>

            {/* Content Container */}
            <div className='relative z-10 max-w-7xl w-full mx-auto'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16'>

                    {/* Image Section */}
                    <div className='w-full lg:w-5/12 xl:w-2/5 flex justify-center lg:justify-end'>
                        <div className='relative group'>
                            {/* Image container with enhanced styling */}
                            <div className='relative'>
                                <div className='absolute -inset-1 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300'></div>
                                <div className='relative bg-white dark:bg-slate-900 p-2 rounded-2xl'>
                                    <Image
                                        src={foto}
                                        alt={nama}
                                        className='w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-[28rem] xl:w-[26rem] xl:h-[32rem] rounded-xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500'
                                        width={416}
                                        height={512}
                                        loading="lazy"
                                        priority={false}
                                    />
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className='absolute -bottom-4 -right-4 bg-white dark:bg-slate-900 px-6 py-3 rounded-full shadow-xl border-2 border-teal-500 animate-bounce-slow'>
                                <span className='text-teal-500 font-bold text-sm md:text-base'>Hello!</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Section */}
                    <div className='w-full lg:w-7/12 xl:w-3/5 flex flex-col justify-center'>
                        <div className='bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100 dark:border-slate-800'>

                            {/* Greeting */}
                            <div className='mb-6 md:mb-8'>
                                <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight'>
                                    Hi, I'm{' '}
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
                            <div className='space-y-4'>
                                <p className='text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed'>
                                    {deskripsi}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes wave {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(20deg); }
                    75% { transform: rotate(-20deg); }
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                .animate-wave {
                    display: inline-block;
                    animation: wave 2s ease-in-out infinite;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

export default AboutSection;