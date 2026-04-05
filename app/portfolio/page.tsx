"use client"

import Loading from '@/components/Loading'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { fullPortfolio } from '@/constants/portfolio'
import { PortfolioCategory } from '@/types/portfolio'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaInfoCircle, FaArrowRight } from 'react-icons/fa'
import InfiniteScroll from 'react-infinite-scroll-component'

type PortfolioTab = 'all' | PortfolioCategory

export default function Page() {
    const [isLoading, setIsLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState<PortfolioTab>('all')
    const [items, setItems] = useState<(typeof fullPortfolio)[number][]>([])
    const [hasMore, setHasMore] = useState(true)

    const ITEMS_PER_LOAD = 4

    const filteredPortfolio =
        activeCategory === 'all'
            ? fullPortfolio
            : fullPortfolio.filter((item) => item.category === activeCategory)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (isLoading) return

        setItems(filteredPortfolio.slice(0, ITEMS_PER_LOAD))
        setHasMore(filteredPortfolio.length > ITEMS_PER_LOAD)
    }, [activeCategory, isLoading])

    const fetchMoreData = () => {
        if (items.length >= filteredPortfolio.length) {
            setHasMore(false)
            return
        }

        const nextItems = filteredPortfolio.slice(items.length, items.length + ITEMS_PER_LOAD)
        setTimeout(() => {
            setItems((prevItems) => [...prevItems, ...nextItems])
            if (items.length + nextItems.length >= filteredPortfolio.length) {
                setHasMore(false)
            }
        }, 1000)
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="w-full py-28">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-5">Portfolio</h1>
                <p className="text-gray-700 dark:text-gray-500 mx-4">
                    Here are some of the projects I have worked on, including collaborations with the teams. Click the detail button to learn more about each project.
                </p>

                <div className='mt-8 flex justify-center'>
                    <Tabs value={activeCategory} onValueChange={(value) => setActiveCategory(value as PortfolioTab)}>
                        <TabsList className='h-auto flex flex-wrap gap-2 bg-transparent p-0'>
                            <TabsTrigger
                                value='all'
                                className='rounded-full border border-teal-500/30 px-4 py-2 text-sm data-[state=active]:bg-teal-500 data-[state=active]:text-white data-[state=active]:border-teal-500'
                            >
                                All
                            </TabsTrigger>
                            <TabsTrigger
                                value='landing-page'
                                className='rounded-full border border-teal-500/30 px-4 py-2 text-sm data-[state=active]:bg-teal-500 data-[state=active]:text-white data-[state=active]:border-teal-500'
                            >
                                Landing Page
                            </TabsTrigger>
                            <TabsTrigger
                                value='web-app'
                                className='rounded-full border border-teal-500/30 px-4 py-2 text-sm data-[state=active]:bg-teal-500 data-[state=active]:text-white data-[state=active]:border-teal-500'
                            >
                                Web App
                            </TabsTrigger>
                            <TabsTrigger
                                value='company-profile'
                                className='rounded-full border border-teal-500/30 px-4 py-2 text-sm data-[state=active]:bg-teal-500 data-[state=active]:text-white data-[state=active]:border-teal-500'
                            >
                                Company Profile
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<p className="text-center text-gray-500 py-5 mt-5">Please wait...</p>}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
                    {items.map((port, index) => (
                        <div
                            key={index}
                            className="group relative shadow-xl p-5 rounded-md dark:bg-slate-900 bg-white border border-transparent hover:border-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:-translate-y-2"
                        >

                            {/* Image Container */}
                            <div className="relative w-full mb-4 overflow-hidden rounded-md">
                                <Image
                                    src={port.gambar}
                                    alt={port.nama}
                                    className="w-full h-full rounded-md object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    width={400}
                                    height={250}
                                />
                                {/* Image overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"></div>
                            </div>

                            {/* Content */}
                            <div className="relative w-full p-5">
                                {/* Title with hover effect */}
                                <h3 className="text-2xl font-semibold text-teal-500 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                                    {port.nama}
                                </h3>

                                {/* Animated divider */}
                                <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-transparent mb-3 group-hover:w-20 transition-all duration-300"></div>

                                {/* Description */}
                                <p className='text-gray-700 dark:text-gray-400 mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-300'>
                                    {port.deskripsi}
                                </p>

                                {/* Button with enhanced hover */}
                                <div className='flex gap-4 mt-4'>
                                    <Link
                                        href={`/portfolio/${port.slug}`}
                                        className='group/btn relative bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-teal-500 transition-all duration-300 flex flex-row items-center overflow-hidden shadow-md hover:shadow-lg hover:shadow-teal-500/30'
                                    >
                                        {/* Button gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 transform translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300"></div>

                                        {/* Button content */}
                                        <FaInfoCircle className='relative z-10 mt-0.5 mr-2 group-hover/btn:scale-110 transition-transform duration-300' />
                                        <span className='relative z-10'>Detail</span>
                                        <FaArrowRight className='relative z-10 ml-1 text-sm opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300' />
                                    </Link>
                                </div>
                            </div>

                            {/* Corner decoration on hover */}
                            <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-teal-500/30 rounded-tr-md"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}