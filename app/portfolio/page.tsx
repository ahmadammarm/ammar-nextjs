"use client"

import Loading from '@/components/Loading'
import { fullPortfolio } from '@/constants/portfolio'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'

export default function Page() {
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
        <div className="w-full py-28">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-5">Portfolio</h2>
                <p className="text-gray-700 dark:text-gray-500">
                    Here are some of the projects I created 🧑🏻‍💻.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
                {fullPortfolio.map((port, index) => (
                    <div key={index} className="shadow-xl p-5 rounded-md dark:bg-slate-900">
                        <div className="w-full mb-4">
                            <img src={port.gambar} alt={port.nama} className="w-full h-full rounded-md object-cover" />
                        </div>
                        <div className="w-full p-5">
                            <h3 className="text-2xl font-semibold text-teal-500 mb-3">{port.nama}</h3>
                            <p className='text-gray-700 dark:text-gray-400'>{port.deskripsi}</p>
                            <div className='flex gap-4 mt-4'>
                                <Link
                                    href={`/portfolio/${port.slug}`}
                                    className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-300 flex flex-row'
                                >
                                    <FaInfoCircle className='mt-1 mr-2' /> DetailP
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}