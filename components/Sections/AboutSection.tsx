"use client";

import { about } from '@/constants/about';
import React from 'react';
import { Separator } from '@/components/ui/separator';



function AboutSection(): React.ReactElement {
    const { nama, deskripsi, foto } = about[0];


    return (
        <div className='min-h-screen flex flex-col justify-center items-center p-3 py-20'>
            <h2
                className='text-5xl font-bold mb-[5rem]'
            >
                About Me
            </h2>

            <div className='max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center'>
                <div className='flex justify-center lg:w-1/2 p-4 mb-8 lg:mb-0'
                >
                    <img
                        src={foto}
                        alt='Ammar'
                        className='w-64 h-64 lg:w-80 lg:h-96 rounded-md object-cover border-4 border-teal-500'
                        width={30}
                        height={30}
                        loading="lazy"
                    />
                </div>

                <div className='flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left p-4 lg:flex lg:flex-col'
                >
                    <p className='text-gray-700 dark:text-gray-400 text-3xl font-bold mb-[1.5rem]'>
                        Hii..👋 Im <span className='text-3xl text-teal-500'>{nama}</span>
                    </p>
                    <p className='text-md lg:text-lg mb-6'>
                        {deskripsi}
                    </p>
                    <Separator className="mb-10" />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
