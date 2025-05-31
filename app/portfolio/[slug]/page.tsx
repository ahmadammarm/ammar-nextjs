"use client"

import { fullPortfolio } from '@/constants/portfolio'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Loading from '@/components/Loading'
import Link from 'next/link'
import { Calendar, Code, ExternalLink, EyeIcon, Github } from 'lucide-react'


export default function PortfolioDetail() {
    const params = useParams();
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
            <div className="px-5 md:px-20">
                <h1 className="text-4xl font-bold text-teal-500">
                    {portfolio.nama}
                </h1>
                <p className="text-gray-700 dark:text-gray-400 mb-10 mt-10 text-lg">
                    {portfolio.deskripsi2}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10 mt-10">
                    {/* Tech Stack Card */}
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-teal-500 rounded-xl">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Tech Stack</h2>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {portfolio.teknologi.map((tekno: string, index: number) => (
                                <div
                                    key={index}
                                    className="group relative p-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-600 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <img
                                        src={tekno}
                                        alt={`Technology ${index + 1}`}
                                        className="w-12 h-12 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                                        loading='lazy'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Year & Links Card */}
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-teal-500 rounded-xl">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Project Info</h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Year</p>
                                <p className="text-2xl font-bold text-gray-800 dark:text-white">{portfolio.year}</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                {portfolio.link && (
                                    <Link
                                        href={portfolio.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex-1 bg-teal-500 text-white px-6 py-3 rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <EyeIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="font-medium">Visit Website</span>
                                        <ExternalLink className="w-4 h-4 opacity-70" />
                                    </Link>
                                )}

                                {portfolio.source && (
                                    <Link
                                        href={portfolio.source}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex-1 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white px-6 py-3 rounded-xl hover:from-gray-800 hover:to-gray-950 dark:hover:from-gray-700 dark:hover:to-gray-900 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="font-medium">Source Code</span>
                                        <ExternalLink className="w-4 h-4 opacity-70" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <img
                        src={portfolio.gambar}
                        alt={portfolio.nama}
                        className="w-full h-full object-cover rounded-lg shadow-lg mb-10 border hover:border-teal-500 transition-all duration-300"
                        loading='lazy'
                    />
                </div>
                <div className="mb-8">
                    <img
                        src={portfolio.gambar2}
                        alt={portfolio.nama}
                        className="w-full h-full object-cover rounded-lg shadow-lg mb-10 border hover:border-teal-500 transition-all duration-300"
                        loading='lazy'
                    />
                </div>
                <div className="mb-8">
                    <img
                        src={portfolio.gambar3}
                        alt={portfolio.nama}
                        className="w-full h-full object-cover rounded-lg shadow-lg mb-10 border hover:border-teal-500 transition-all duration-300"
                        loading='lazy'
                    />
                </div>
            </div>
        </div>
    )
}