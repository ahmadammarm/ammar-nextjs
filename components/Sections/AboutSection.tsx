"use client";

import { about } from '@/constants/about';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';



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

                {/* Content Animation */}
                <div className='flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left p-4 lg:flex lg:flex-col'
                >
                    <p className='text-gray-700 dark:text-gray-400 text-3xl font-bold mb-[1.5rem]'>
                        Hii..👋 Im <span className='text-3xl text-teal-500'>{nama}</span>
                    </p>
                    {/* <p className='text-gray-700 dark:text-gray-400 text-xl font-bold mb-[4rem] italic'>
                        An <span className='text-2xl text-teal-500'>{role} 🧑🏻‍💻</span> and live in <span className='text-2xl text-teal-500'>{negara} 🌏</span>.
                    </p> */}
                    <p className='text-md lg:text-lg mb-6'>
                        {deskripsi}
                    </p>
                    <Separator className="mb-10" />
                </div>
            </div>

            {/* Education Animation */}
            {/* <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                className="text-md lg:text-lg mb-6 text-gray-700 dark:text-gray-400 mt-20"
            >
                Here are some of my educations background
            </motion.p>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="flex flex-col md:flex-row gap-4 items-center justify-center"
            >
                {education.map((edu, index) => (
                    <Card
                        key={index}
                        className="flex flex-col items-center p-4 mb-5 hover:shadow-teal-500 shadow-md transition-all ease-in-out duration-300"
                    >
                        <CardHeader className="text-lg font-semibold mb-2 text-teal-500">
                            {edu.nama}
                        </CardHeader>
                        <CardDescription className="text-sm text-gray-700 dark:text-gray-400">
                            {edu.jurusan}
                        </CardDescription>
                        <CardDescription className="text-sm text-gray-700 dark:text-gray-400">
                            {edu.tahun}
                        </CardDescription>
                    </Card>
                ))}
            </motion.div> */}
        </div>
    );
}

export default AboutSection;
