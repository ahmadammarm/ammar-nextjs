import { portfolio } from '@/constants/portfolio'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


function PortfolioSection() {
    return (
        <div id='portfolio' className='flex w-full py-28'>
            <div className='container mx-auto'>
                <div className='text-center mb-28'>
                    <h2 className='text-5xl font-bold mb-5'>Portfolio</h2>
                    <p className='text-gray-700 dark:text-gray-500'>
                        Berikut adalah beberapa proyek yang saya buat ketika saya sedang belajar tentang pengembangan website.
                    </p>
                </div>

                {/* Portfolio Content Start */}
                <div>
                    {portfolio.map((port, index) => (
                        <div key={index} className='flex flex-col md:flex-row gap-4 items-center justify-center mb-10 shadow-xl p-5 rounded-md dark:bg-slate-900'>
                            <div className='w-full md:w-1/2'>
                                <img src={port.gambar} alt={port.nama} className='w-full h-64 rounded-md object-cover' />
                            </div>
                            <div className='w-full md:w-1/2'>
                                <h3 className='text-2xl font-semibold text-teal-500'>{port.nama}</h3>
                                <div className='flex flex-row m-1'>
                                    {port.teknologi.map((tekno, index) => (
                                        <img key={index} src={tekno} alt={port.nama} className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] m-2' />
                                    ))}
                                </div>
                                <p className='text-gray-700 dark:text-gray-400'>{port.deskripsi}</p>
                                <div className='flex gap-4 mt-4'>
                                    <a href={port.link} target='_blank' rel='noreferrer' className='bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-all duration-300 flex flex-row'><FaEye className='mt-1 mr-2' /> Demo</a>
                                    <a href={port.source} target='_blank' rel='noreferrer' className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 flex flex-row'><FaGithub className='mt-1 mr-2' /> Source</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Portfolio Content End */}

                {/* All Projects Link Start */}
                <div className='text-center mt-20'>
                    <a href='/portfolio' className='bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-all duration-300'>Lihat Semua Project</a>
                </div>
                {/* All Projects Link End */}
            </div>
        </div>
    )
}

export default PortfolioSection