"use client"

import Loading from '@/components/Loading'
import { fullPortfolio } from '@/constants/portfolio'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Page() {
    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState<any[]>([])
    const [hasMore, setHasMore] = useState(true)

    const ITEMS_PER_LOAD = 4

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
            setItems(fullPortfolio.slice(0, ITEMS_PER_LOAD))
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    const fetchMoreData = () => {
        if (items.length >= fullPortfolio.length) {
            setHasMore(false)
            return
        }

        const nextItems = fullPortfolio.slice(items.length, items.length + ITEMS_PER_LOAD)
        setTimeout(() => {
            setItems([...items, ...nextItems])
        }, 1000)
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="w-full py-28">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-5">Portfolio</h2>
                <p className="text-gray-700 dark:text-gray-500 mx-4">
                    Here are some of the projects I have worked on, including collaborations with the teams. Click the detail button to learn more about each project.
                </p>
            </div>

            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<p className="text-center text-gray-500 py-5 mt-5">Please wait...</p>}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
                    {items.map((port, index) => (
                        <div key={index} className="shadow-xl p-5 rounded-md dark:bg-slate-900">
                            <div className="w-full mb-4">
                                <Image src={port.gambar} alt={port.nama} className="w-full h-full rounded-md object-cover" width={400} height={250} />
                            </div>
                            <div className="w-full p-5">
                                <h3 className="text-2xl font-semibold text-teal-500 mb-3">{port.nama}</h3>
                                <p className='text-gray-700 dark:text-gray-400'>{port.deskripsi}</p>
                                <div className='flex gap-4 mt-4'>
                                    <Link
                                        href={`/portfolio/${port.slug}`}
                                        className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-300 flex flex-row'
                                    >
                                        <FaInfoCircle className='mt-1 mr-2' /> Detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}
