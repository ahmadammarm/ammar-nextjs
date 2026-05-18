"use client"

import { fullPortfolio } from '@/constants/portfolio'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Loading from '@/components/Loading'
import Link from 'next/link'
import { Calendar, Code, ExternalLink, EyeIcon, Github, Star, ArrowLeft } from 'lucide-react'
import Image from 'next/image'


export default function PortfolioDetailClient() {
    const params = useParams();
    const [portfolio, setPortfolio] = useState<typeof fullPortfolio[0] | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [activeImage, setActiveImage] = useState(0)

    useEffect(() => {
        setIsLoading(true)

        const found = fullPortfolio.find((item) => item.slug === params.slug)

        if (!found) {
            notFound()
        }

        const loadingTimer = setTimeout(() => {
            setPortfolio(found)
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(loadingTimer)
    }, [params.slug])

    if (isLoading) {
        return <Loading />
    }

    if (!portfolio) {
        notFound()
    }

    const images = [portfolio.gambar, portfolio.gambar2, portfolio.gambar3, portfolio.gambar4, portfolio.gambar5].filter((img): img is string => Boolean(img))
    const techLabels: Record<string, string> = {
        "/assets/skills/php.png": "PHP",
        "/assets/skills/laravel.png": "Laravel",
        "/assets/skills/mysql.png": "MySQL",
        "/assets/skills/ts.png": "TypeScript",
        "/assets/skills/nextjs.png": "Next.js",
        "/assets/skills/tailwind.png": "Tailwind CSS",
        "/assets/skills/postgresql.png": "PostgreSQL",
        "/assets/skills/docker.png": "Docker",
        "/assets/skills/go.png": "Go",
        "/assets/skills/react.png": "React",
        "/assets/skills/expressjs.svg": "Express.js",
    };

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: portfolio.nama,
        description: portfolio.deskripsi2,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        creator: {
            "@type": "Person",
            name: "Ahmad Ammar Musyaffa",
            url: "https://ahmadammar.my.id",
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://ahmadammar.my.id",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Portfolio",
                item: "https://ahmadammar.my.id/portfolio",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: portfolio.nama,
                item: `https://ahmadammar.my.id/portfolio/${portfolio.slug}`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className="relative min-h-screen bg-background">
                {/* Subtle Background pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
                     style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20 pt-28">

                    {/* Top Navigation & Category */}
                    <div className="flex items-center justify-between mb-16">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-foreground font-bold hover:text-brand-blue transition-all duration-300 group bg-background border-2 border-black dark:border-white p-2 px-4 rounded-md shadow-neo dark:shadow-neo-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                            <span className="text-sm uppercase tracking-widest">Back</span>
                        </Link>
                        <div className="bg-brand-blue text-black border-2 border-black px-4 py-1.5 rounded-md text-xs font-black uppercase tracking-tighter shadow-neo">
                            {portfolio.category.replace(/-/g, ' ')}
                        </div>
                    </div>

                    {/* Massive Project Title */}
                    <div className="mb-20">
                        <h1 className="text-5xl sm:text-7xl lg:text-[10rem] font-black text-foreground leading-[0.9] tracking-tighter mb-12">
                            {portfolio.nama}
                        </h1>

                        {/* Summary Description */}
                        <div className="max-w-3xl ml-auto">
                            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-12">
                                {portfolio.deskripsi2}
                            </p>

                            {/* Primary Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                {portfolio.link && (
                                    <Link
                                        href={portfolio.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn relative bg-brand-blue text-black px-8 py-4 rounded-md border-2 border-black transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                                    >
                                        <span className="font-black uppercase tracking-tighter text-lg">Live Preview</span>
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                )}
                                {portfolio.source && (
                                    <Link
                                        href={portfolio.source}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn relative bg-background text-foreground px-8 py-4 rounded-md border-2 border-black dark:border-white transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-neo dark:shadow-neo-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                                    >
                                        <span className="font-black uppercase tracking-tighter text-lg">Source Code</span>
                                        <Github className="w-5 h-5" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Metadata Grid Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t-2 border-b-2 border-black dark:border-white mb-20 bg-gray-50/50 dark:bg-white/5">
                        <div className="px-4">
                            <span className="block text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-2">Year</span>
                            <span className="text-xl font-bold text-foreground">{portfolio.year}</span>
                        </div>
                        <div className="px-4 border-l-2 border-black/10 dark:border-white/10">
                            <span className="block text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-2">Role</span>
                            <span className="text-xl font-bold text-foreground">{portfolio.role}</span>
                        </div>
                        <div className="px-4 border-l-2 border-black/10 dark:border-white/10">
                            <span className="block text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-2">Platform</span>
                            <span className="text-xl font-bold text-foreground">{portfolio.platform}</span>
                        </div>
                        <div className="px-4 border-l-2 border-black/10 dark:border-white/10">
                            <span className="block text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-2">Tech</span>
                            <span className="text-xl font-bold text-foreground">{portfolio.teknologi.length} Stack</span>
                        </div>
                    </div>

                    {/* Main Full-width Image Showcase */}
                    <div className="mb-32">
                        <div className="relative group bg-background p-2 border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark rounded-md overflow-hidden mb-12">
                            <div className="relative aspect-video lg:aspect-[21/9]">
                                <Image
                                    src={images[activeImage]!}
                                    alt={portfolio.nama}
                                    className="w-full h-full object-cover"
                                    width={2400}
                                    height={1200}
                                    priority
                                />
                            </div>
                        </div>

                        {/* Thumbnail Selector */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`group relative w-24 h-24 sm:w-32 sm:h-32 rounded-md overflow-hidden border-2 transition-all duration-500 ${activeImage === index
                                            ? 'border-brand-blue shadow-neo scale-110 z-10'
                                            : 'border-black/20 dark:border-white/20 grayscale hover:grayscale-0 hover:border-black dark:hover:border-white'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        width={160}
                                        height={160}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Content Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

                        {/* Features List */}
                        <div className="lg:col-span-7 space-y-12">
                            <div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                                    <span className="w-12 h-1 bg-brand-blue border border-black"></span>
                                    Core Features
                                </h2>
                                <div className="space-y-6">
                                    {portfolio.features?.map((feature: string, index: number) => (
                                        <div key={index} className="group flex items-start gap-6 p-6 bg-white dark:bg-white/5 border-2 border-black dark:border-white rounded-md transition-all">
                                            <div className="p-3 bg-brand-blue border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                                                <Star className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-foreground mb-1">Feature {index + 1}</h4>
                                                <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{feature}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack Sidebar */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-24 space-y-12">
                                <div>
                                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                                        <span className="w-12 h-1 bg-brand-blue border border-black"></span>
                                        Tech Stack
                                    </h2>
                                    <div className="flex flex-wrap gap-4">
                                        {portfolio.teknologi.map((tekno: string, index: number) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 p-4 px-6 bg-background border-2 border-black dark:border-white rounded-md shadow-neo dark:shadow-neo-dark"
                                            >
                                                <Image src={tekno} alt="tech" className="w-8 h-8 object-contain" width={32} height={32} />
                                                <span className="font-black uppercase tracking-tighter text-sm text-foreground">
                                                    {techLabels[tekno] || "Tech"}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Additional Call to action */}
                                <div className="p-10 bg-brand-blue border-2 border-black rounded-md shadow-neo text-black">
                                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Interested?</h3>
                                    <p className="font-bold mb-8 text-black/70">Let&apos;s build something similar together.</p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center w-full py-4 bg-white border-2 border-black text-black font-black uppercase tracking-widest shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                                    >
                                        Start Project
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
