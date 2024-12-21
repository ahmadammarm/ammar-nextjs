"use client"

import Loading from "@/components/Loading";
import HeroSection from "@/components/Sections/HeroSection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { about } from "@/constants/about";
import { contact } from "@/constants/contact";
import { footer } from "@/constants/footer";
import { portfolio } from "@/constants/portfolio";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";


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
            <div className='min-h-screen flex flex-col justify-center items-center p-3 py-20'>
                <h2
                    className='text-5xl font-bold mb-[5rem] mt-[5rem]'
                >
                    About Me
                </h2>

                <div className='max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center'>
                    <div
                        className='flex justify-center lg:w-1/2 p-4 mb-8 lg:mb-0'
                    >
                        <img
                            src={foto}
                            alt='Ammar'
                            className='w-64 h-64 lg:w-80 lg:h-96 rounded-md object-cover border-4 border-teal-500'
                        />
                    </div>

                    <div
                        className='flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left p-4 lg:flex lg:flex-col'
                    >
                        <p className='text-gray-700 dark:text-gray-400 text-3xl font-bold mb-[1.5rem]'>
                            Hii..👋 Im <span className='text-3xl text-teal-500'>{nama}</span>
                        </p>
                        <p className='text-md lg:text-lg mb-6'>
                            {deskripsi}
                        </p>
                        <Separator className="mb-10" />
                        <Link href={'/about'}>
                            <Button className="bg-teal-500 dark:text-white">
                                More About Me
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* About Section End */}


            {/* Portfolio Section Start */}
            <div className="w-full">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-5 mt-8">Portfolio</h2>
                    <p className="text-gray-700 dark:text-gray-500">
                        Here are all the projects I created while I was learning about website development. 🧑🏻‍💻.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                    {portfolio.map((port, index) => (
                        <div key={index} className="shadow-xl p-5 rounded-md dark:bg-slate-900">
                            <div className="w-full mb-4">
                                <img src={port.gambar} alt={port.nama} className="w-full h-full rounded-md object-cover" />
                            </div>
                            <div className="w-full p-5">
                                <h3 className="text-2xl font-semibold text-teal-500 mb-3">{port.nama}</h3>
                                <div className="flex flex-row mb-3">
                                    {port.teknologi.map((tekno, index) => (
                                        <img key={index} src={tekno} alt={port.nama} className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] m-2" />
                                    ))}
                                </div>
                                <p className='text-gray-700 dark:text-gray-400'>{port.deskripsi}</p>
                                <div className='flex gap-4 mt-4'>
                                    <a href={port.link} target='_blank' rel='noreferrer' className='bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-all duration-300 flex flex-row'><FaEye className='mt-1 mr-2' /> Demo</a>
                                    {/* <a href={port.source} target='_blank' rel='noreferrer' className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 flex flex-row'><FaGithub className='mt-1 mr-2' /> Source</a> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex mt-10 justify-center items-center">
                    <Link href={'/portfolio'}>
                        <Button className="bg-teal-500 dark:text-white">
                            More Projects
                        </Button>
                    </Link>
                </div>
            </div>
            {/* Portfolio Section End */}


            {/* Contact Section Start */}
            <div className="w-full py-20">
                <div className="text-center mb-10 mt-10">
                    <h2 className="text-5xl font-bold">Contact</h2>
                </div>
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-semibold mb-7">
                            Contact Me Through The Media Below 📩
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contact.map((item, index) => (
                            <div key={index} className="flex items-center justify-center">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-full"
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.nama}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                    />
                                    <div className="flex flex-col items-center md:items-start">
                                        <span className="text-2xl font-bold">{item.nama}</span>
                                        <span className="text-base text-gray-600 dark:text-gray-400">
                                            {item.detail}
                                        </span>
                                        <span className="text-lg text-teal-500 font-bold">
                                            Send me a message
                                        </span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="container mx-auto flex justify-center space-x-4 mt-5">
                        {footer.map((foot, index) => (
                            <div key={index} className="flex items-center justify-center mt-5 mb-5">
                                <a
                                    href={foot.link}
                                    className="text-teal-500 hover:text-white hover:bg-teal-500 hover:border-white transition duration-300 p-2 lg:p-3 bg-white border border-teal-500 rounded-md dark:bg-slate-900 dark:hover:bg-teal-500 dark:hover:border-gray-700 dark:hover:text-slate-900"
                                    target='_blank'
                                >
                                    {React.createElement(foot.logo, { className: "w-10 h-10" })}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Contact Section End */}
        </>
    );
}
