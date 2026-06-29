"use client"

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { fullPortfolio } from '@/constants/portfolio'
import { PortfolioCategory } from '@/types/portfolio'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useMemo } from 'react'
import { FaInfoCircle, FaArrowRight } from 'react-icons/fa'
import InfiniteScroll from 'react-infinite-scroll-component'
import { motion } from 'framer-motion'

type PortfolioTab = 'all' | PortfolioCategory

export default function Page() {
    const [activeCategory, setActiveCategory] = useState<PortfolioTab>('all')
    const [items, setItems] = useState<(typeof fullPortfolio)[number][]>([])
    const [hasMore, setHasMore] = useState(true)

    const ITEMS_PER_LOAD = 4

    const filteredPortfolio = useMemo(() => 
        activeCategory === 'all'
            ? fullPortfolio
            : fullPortfolio.filter((item) => item.category === activeCategory),
    [activeCategory])

    useEffect(() => {
        setItems(filteredPortfolio.slice(0, ITEMS_PER_LOAD))
        setHasMore(filteredPortfolio.length > ITEMS_PER_LOAD)
    }, [filteredPortfolio])

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

    return (
        <div className="w-full py-28">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold mb-5 text-foreground">Portfolio</h1>
                <p className="text-gray-700 dark:text-gray-400 mx-4 max-w-2xl mx-auto">
                    Here are some of the projects I have worked on, including collaborations with the teams. Click the detail button to learn more about each project.
                </p>

                <div className='mt-8 flex justify-center'>
                    <Tabs value={activeCategory} onValueChange={(value) => setActiveCategory(value as PortfolioTab)}>
                        <TabsList className='h-auto flex flex-wrap justify-center gap-4 bg-transparent p-0'>
                            {['all', 'landing-page', 'web-app', 'company-profile'].map((tab) => (
                                <TabsTrigger
                                    key={tab}
                                    value={tab}
                                    className='rounded-md border-2 border-black dark:border-white px-4 py-2 text-sm font-bold bg-background text-foreground data-[state=active]:bg-brand-blue data-[state=active]:text-black shadow-neo data-[state=active]:shadow-neo-hover transition-all'
                                >
                                    {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>
            </motion.div>

            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<p className="text-center text-gray-500 py-5 mt-5">Please wait...</p>}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
                    {items.map((port, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative shadow-neo dark:shadow-neo-dark p-5 rounded-md dark:bg-slate-900 bg-background border-2 border-black dark:border-white"
                        >

                            {/* Image Container */}
                            <div className="relative w-full mb-4 overflow-hidden rounded-md border-2 border-black dark:border-white shadow-neo">
                                <Image
                                    src={port.gambar}
                                    alt={port.nama}
                                    className="w-full h-full rounded-md object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    width={400}
                                    height={250}
                                />
                            </div>

                            {/* Content */}
                            <div className="relative w-full p-5">
                                {/* Title with hover effect */}
                                <h3 className="text-2xl font-bold text-brand-blue mb-3">
                                    {port.nama}
                                </h3>

                                {/* Animated divider */}
                                <div className="w-12 h-1 bg-black dark:bg-white mb-3 group-hover:w-20 transition-all duration-300"></div>

                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {port.teknologi.map((tech, i) => {
                                        const techName = tech.split('/').pop()?.split('.')[0] || 'Tech stack';
                                        return (
                                            <div 
                                                key={i} 
                                                className="flex items-center justify-center p-1.5 bg-gray-100 dark:bg-slate-800 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                                                title={techName}
                                            >
                                                <Image src={tech} alt={techName} width={20} height={20} className="w-5 h-5 object-contain" />
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Description */}
                                <p className='text-gray-700 dark:text-gray-400 mb-4'>
                                    {port.deskripsi}
                                </p>

                                {/* Button with Neobrutalist interaction */}
                                <div className='flex gap-4 mt-4'>
                                    <Link
                                        href={`/portfolio/${port.slug}`}
                                        className='group/btn relative bg-brand-blue text-black px-6 py-2 rounded-md border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-y-[2px] hover:translate-x-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex flex-row items-center font-bold'
                                    >
                                        <FaInfoCircle className='relative z-10 mt-0.5 mr-2 group-hover/btn:scale-110 transition-transform duration-300' />
                                        <span className='relative z-10'>Detail</span>
                                        <FaArrowRight className='relative z-10 ml-1 text-sm opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300' />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}