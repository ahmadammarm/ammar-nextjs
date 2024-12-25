"use client"

import { fullPortfolio } from '@/constants/portfolio'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Loading from '@/components/Loading'
import Link from 'next/link'
import { EyeIcon } from 'lucide-react'

export default function PortfolioDetail() {
    const params = useParams()
    const [portfolio, setPortfolio] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        
        const fetchPortfolio = () => {
            const found = fullPortfolio.find((item) => item.slug === params.slug)
            
            if (!found) {
                notFound()
            }
            
            const loadingTimer = setTimeout(() => {
                setPortfolio(found)
                setIsLoading(false)
            }, 1000)

            return () => clearTimeout(loadingTimer)
        }

        fetchPortfolio()
    }, [params.slug])

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (!portfolio) {
        return notFound()
    }

    return (
        <div className="flex items-center justify-center py-20">
            <div className="px-10 md:px-20">
                <h1 className="text-4xl font-bold text-teal-500">
                    {portfolio.nama}
                </h1>
                <p className="mb-10 mt-4 text-black dark:text-white text-lg">
                    {portfolio.year}
                </p>
                <p className="text-gray-700 dark:text-gray-400 mb-20 text-lg">
                    {portfolio.deskripsi2}
                </p>
                <h1 className="text-3xl font-bold mb-5 mt-10">
                    Tech Stacks
                </h1>
                <div className="flex flex-row mb-10">
                    {portfolio.teknologi.map((tekno: string, index: number) => (
                        <img 
                            key={index} 
                            src={tekno} 
                            alt={`${portfolio.nama} technology`} 
                            className="w-[40px] h-[40px] m-2" 
                            loading='lazy'
                        />
                    ))}
                </div>
                <div className="mb-8">
                    <img 
                        src={portfolio.gambar} 
                        alt={portfolio.nama} 
                        className="w-full h-full object-cover rounded-lg shadow-lg mb-10 border"
                        loading='lazy'
                    />
                </div>
                <div className="mb-8">
                    <img 
                        src={portfolio.gambar2} 
                        alt={portfolio.nama} 
                        className="w-full h-full object-cover rounded-lg shadow-lg mb-10 border"
                        loading='lazy'
                    />
                </div>
                <div className="mb-8">
                    <img 
                        src={portfolio.gambar3} 
                        alt={portfolio.nama} 
                        className="w-full h-full object-cover rounded-lg shadow-lg mb-10 border"
                        loading='lazy'
                    />
                </div>
                {portfolio.link && (
                    <Link
                        href={portfolio.link}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-all duration-300 inline-flex items-center"
                    >
                       <EyeIcon className="mr-2" /> Visit Website
                    </Link>
                )}
            </div>
        </div>
    )
}