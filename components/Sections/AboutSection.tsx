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
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-3'>
                    About Me
                </h1>
            </div>

            {/* Content Container */}
            <div className='relative z-10 max-w-7xl w-full mx-auto'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16'>

                    {/* Image Section */}
                    <div className='w-full lg:w-5/12 xl:w-2/5 flex justify-center lg:justify-end'>
                        <div className='relative group'>
                            {/* Image container with Neobrutalist styling */}
                            <div className='relative'>
                                <div className='relative bg-background p-2 border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark rounded-md'>
                                    <Image
                                        src={foto}
                                        alt={nama}
                                        className='w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-[28rem] xl:w-[26rem] xl:h-[32rem] rounded-md object-cover transform group-hover:scale-[1.02] transition-transform duration-500 border-2 border-black dark:border-white'
                                        width={416}
                                        height={512}
                                        loading="lazy"
                                        priority={false}
                                    />
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className='absolute -bottom-4 -right-4 bg-primary px-6 py-3 rounded-md shadow-neo dark:shadow-neo-dark border-2 border-black dark:border-white'>
                                <span className='text-primary-foreground font-bold text-sm md:text-base'>Hello!</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Section */}
                    <div className='w-full lg:w-7/12 xl:w-3/5 flex flex-col justify-center'>
                        <div className='bg-background rounded-md p-6 md:p-8 lg:p-10 shadow-neo dark:shadow-neo-dark border-2 border-black dark:border-white'>

                            {/* Greeting */}
                            <div className='mb-6 md:mb-8'>
                                <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight'>
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