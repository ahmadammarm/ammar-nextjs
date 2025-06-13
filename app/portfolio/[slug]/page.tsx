"use client"

import { fullPortfolio } from '@/constants/portfolio'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Loading from '@/components/Loading'
import Link from 'next/link'
import { Calendar, Code, ExternalLink, EyeIcon, Github, Star, ArrowLeft, Sparkles } from 'lucide-react'


export default function PortfolioDetail() {
    const params = useParams();
    const [portfolio, setPortfolio] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [activeImage, setActiveImage] = useState(0)


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

    const images = [portfolio.gambar, portfolio.gambar2, portfolio.gambar3].filter(Boolean)

    return (
        <div className="min-h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-teal-100/20 via-transparent to-transparent dark:from-teal-900/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-teal-100/20 via-transparent to-transparent dark:from-teal-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 pt-20">
                {/* Back Button */}
                <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="text-sm font-medium">Back to Portfolio</span>
                </Link>

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 via-teal-500 to-teal-500 dark:from-teal-500 dark:via-teal-500 dark:to-teal-500 bg-clip-text text-transparent mb-6">
                        {portfolio.nama}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {portfolio.deskripsi2}
                    </p>
                </div>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {/* Tech Stack Card */}
                    <div className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/40 dark:border-slate-700/40 hover:shadow-3xl hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-700 hover:-translate-y-3 hover:rotate-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-500 rounded-2xl blur-sm opacity-75"></div>
                                <div className="relative p-4 bg-gradient-to-r from-teal-500 to-teal-500 rounded-2xl">
                                    <Code className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">Tech Stack</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Technologies used</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {portfolio.teknologi.map((tekno: string, index: number) => (
                                <div
                                    key={index}
                                    className="group/tech relative p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl hover:scale-110 hover:rotate-3 transition-all duration-500 shadow-lg hover:shadow-2xl cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                                    <img
                                        src={tekno}
                                        alt={`Technology ${index + 1}`}
                                        className="relative w-12 h-12 object-contain filter group-hover/tech:drop-shadow-2xl transition-all duration-300 mx-auto"
                                        loading='lazy'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Features Card */}
                    {portfolio.features && (
                        <div className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/40 dark:border-slate-700/40 hover:shadow-3xl hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-700 hover:-translate-y-3 hover:-rotate-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-500 rounded-2xl blur-sm opacity-75"></div>
                                    <div className="relative p-4 bg-gradient-to-r from-teal-500 to-teal-500 rounded-2xl">
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">Key Features</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Main functionalities</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {portfolio.features.map((feature: string, index: number) => (
                                    <div
                                        key={index}
                                        className="group/feature flex items-start gap-4 p-4 bg-gradient-to-r from-teal-50/50 to-teal-50/50 dark:from-slate-700/30 dark:to-slate-600/30 rounded-xl hover:from-teal-100/70 hover:to-teal-100/70 dark:hover:from-slate-600/50 dark:hover:to-slate-500/50 transition-all duration-400 hover:scale-[1.02] hover:shadow-lg"
                                    >
                                        <div className="w-3 h-3 bg-gradient-to-br from-teal-500 to-teal-500 rounded-full mt-1.5 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-300"></div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Project Info Card */}
                    <div className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/40 dark:border-slate-700/40 hover:shadow-3xl hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-700 hover:-translate-y-3 hover:rotate-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-500 rounded-2xl blur-sm opacity-75"></div>
                                <div className="relative p-4 bg-gradient-to-r from-teal-500 to-teal-500 rounded-2xl">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">Project Info</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Details & links</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-4 bg-gradient-to-r from-teal-50 to-teal-50 dark:from-slate-700/30 dark:to-slate-600/30 rounded-xl">
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Development Year</p>
                                <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-600 dark:from-teal-400 dark:to-teal-400 bg-clip-text text-transparent">{portfolio.year}</p>
                            </div>

                            <div className="space-y-3">
                                {portfolio.link && (
                                    <Link
                                        href={portfolio.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/btn relative overflow-hidden bg-gradient-to-r from-teal-500 to-teal-500 text-white px-6 py-4 rounded-2xl hover:from-teal-600 hover:to-teal-600 transition-all duration-500 inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:-translate-y-1 w-full"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                        <EyeIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300 relative z-10" />
                                        <span className="font-semibold relative z-10">Visit Website</span>
                                        <ExternalLink className="w-4 h-4 opacity-70 relative z-10" />
                                    </Link>
                                )}

                                {portfolio.source && (
                                    <Link
                                        href={portfolio.source}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/btn relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white px-6 py-4 rounded-2xl hover:from-gray-800 hover:to-gray-950 dark:hover:from-gray-700 dark:hover:to-gray-900 transition-all duration-500 inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:-translate-y-1 w-full"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                        <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300 relative z-10" />
                                        <span className="font-semibold relative z-10">Source Code</span>
                                        <ExternalLink className="w-4 h-4 opacity-70 relative z-10" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Gallery */}
                {images.length > 0 && (
                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2">Project Gallery</h3>
                            <p className="text-gray-600 dark:text-gray-400">Visual showcase of the project</p>
                        </div>

                        {/* Main Image */}
                        <div className="relative group mb-6">
                            <img
                                src={images[activeImage]}
                                alt={`${portfolio.nama} - Image ${activeImage + 1}`}
                                className="w-full h-auto rounded-3xl shadow-lg transition-transform duration-500"
                                loading='lazy'
                            />
                        </div>

                        {/* Thumbnail Navigation */}
                        {images.length > 1 && (
                            <div className="flex justify-center gap-4 overflow-x-auto pb-2">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`group relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${activeImage === index
                                            ? 'border-teal-500 shadow-lg scale-110'
                                            : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600 hover:scale-105'
                                            }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`${portfolio.nama} - Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            loading='lazy'
                                        />
                                        {activeImage !== index && (
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}