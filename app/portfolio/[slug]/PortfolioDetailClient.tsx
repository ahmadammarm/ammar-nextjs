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
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                     style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 pt-24">
                    {/* Header Navigation */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-foreground font-bold hover:text-brand-blue transition-all duration-300 group bg-background border-2 border-black dark:border-white p-2 px-4 rounded-md shadow-neo dark:shadow-neo-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                            <span className="text-sm">Back to Portfolio</span>
                        </Link>

                        <div className="flex flex-wrap gap-3">
                            <span className="bg-brand-blue text-black border-2 border-black px-4 py-1 rounded-md text-sm font-bold shadow-neo">
                                {portfolio.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </span>
                            <span className="bg-background text-foreground border-2 border-black dark:border-white px-4 py-1 rounded-md text-sm font-bold shadow-neo dark:shadow-neo-dark">
                                {portfolio.year}
                            </span>
                        </div>
                    </div>

                    {/* Main Title Section */}
                    <div className="max-w-4xl mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
                            {portfolio.nama}
                        </h1>
                        <div className="w-24 h-2 bg-brand-blue border-2 border-black mb-8"></div>
                        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                            {portfolio.deskripsi2}
                        </p>
                    </div>

                    {/* Image Gallery - Polished with Browser Frame */}
                    {images.length > 0 && (
                        <div className="mb-20">
                            {/* Main Image Viewport with Browser Frame */}
                            <div className="relative group mb-8 bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark rounded-md overflow-hidden">
                                {/* Browser Top Bar */}
                                <div className="bg-background border-b-2 border-black dark:border-white px-4 py-3 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full border border-black bg-[#FF5F57]"></div>
                                        <div className="w-3 h-3 rounded-full border border-black bg-[#FFBD2E]"></div>
                                        <div className="w-3 h-3 rounded-full border border-black bg-[#28C840]"></div>
                                    </div>
                                    <div className="mx-auto bg-gray-100 dark:bg-slate-900 border border-black rounded px-4 py-0.5 text-[10px] text-gray-500 font-bold truncate max-w-[200px] md:max-w-md uppercase tracking-wider">
                                        {portfolio.nama.toLowerCase().replace(/\s+/g, '-')}.app
                                    </div>
                                </div>
                                
                                {/* Image Content */}
                                <div className="relative aspect-video">
                                    <Image
                                        src={images[activeImage]!}
                                        alt={`${portfolio.nama} - Image ${activeImage + 1}`}
                                        className="w-full h-full object-cover"
                                        width={1920}
                                        height={1080}
                                        priority
                                    />
                                    
                                    {/* Navigation Arrows on Hover */}
                                    {images.length > 1 && (
                                        <>
                                            <button 
                                                onClick={() => setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-2 rounded-md shadow-neo opacity-0 group-hover:opacity-100 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                                            >
                                                <ArrowLeft className="w-5 h-5 text-black" />
                                            </button>
                                            <button 
                                                onClick={() => setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-2 rounded-md shadow-neo opacity-0 group-hover:opacity-100 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                                            >
                                                <div className="rotate-180">
                                                    <ArrowLeft className="w-5 h-5 text-black" />
                                                </div>
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Thumbnail Track */}
                            {images.length > 1 && (
                                <div className="flex flex-wrap justify-center gap-4">
                                    {images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveImage(index)}
                                            className={`group relative flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-md overflow-hidden border-2 transition-all duration-300 ${activeImage === index
                                                    ? 'border-black dark:border-white shadow-neo scale-105 z-10'
                                                    : 'border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white hover:scale-105'
                                                }`}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${portfolio.nama} - Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-300"
                                                width={120}
                                                height={120}
                                            />
                                            {activeImage !== index && (
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                        {/* Features & Content (Left Column) */}
                        <div className="lg:col-span-8 space-y-8">
                            {/* Key Features Card */}
                            {portfolio.features && (
                                <div className="bg-background rounded-md p-8 shadow-neo dark:shadow-neo-dark border-2 border-black dark:border-white">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-brand-blue border-2 border-black rounded-md shadow-neo">
                                            <Star className="w-6 h-6 text-black" />
                                        </div>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Key Features</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {portfolio.features.map((feature: string, index: number) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 p-4 bg-background border-2 border-black dark:border-white rounded-md transition-all duration-300 hover:bg-gray-50 dark:hover:bg-slate-900"
                                            >
                                                <div className="w-2 h-2 bg-brand-blue border border-black rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-relaxed">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Full Tech Stack */}
                            <div className="bg-background rounded-md p-8 shadow-neo dark:shadow-neo-dark border-2 border-black dark:border-white">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-brand-blue border-2 border-black rounded-md shadow-neo">
                                        <Code className="w-6 h-6 text-black" />
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Technologies Used</h2>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {portfolio.teknologi.map((tekno: string, index: number) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-3 px-5 bg-background border-2 border-black dark:border-white rounded-md transition-all duration-300 hover:bg-gray-50 dark:hover:bg-slate-900"
                                        >
                                            <div className="relative w-8 h-8 flex-shrink-0">
                                                <Image
                                                    src={tekno}
                                                    alt={techLabels[tekno] || "Tech"}
                                                    className="w-full h-full object-contain"
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                            <span className="font-bold text-sm text-foreground whitespace-nowrap">
                                                {techLabels[tekno] || "Tech"}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Actions & Meta (Right Column) */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-background rounded-md p-8 shadow-neo dark:shadow-neo-dark border-2 border-black dark:border-white sticky top-24">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-brand-blue border-2 border-black rounded-md shadow-neo">
                                        <Calendar className="w-6 h-6 text-black" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">Project Links</h2>
                                </div>

                                <div className="space-y-4">
                                    {portfolio.link && (
                                        <Link
                                            href={portfolio.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn relative bg-brand-blue text-black px-6 py-4 rounded-md border-2 border-black dark:border-white transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-neo dark:shadow-neo-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none w-full"
                                        >
                                            <EyeIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300 relative z-10" />
                                            <span className="font-bold relative z-10 text-lg">Live Preview</span>
                                            <ExternalLink className="w-4 h-4 opacity-70 relative z-10" />
                                        </Link>
                                    )}

                                    {portfolio.source && (
                                        <Link
                                            href={portfolio.source}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn relative bg-background text-foreground px-6 py-4 rounded-md border-2 border-black dark:border-white transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-neo dark:shadow-neo-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none w-full"
                                        >
                                            <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300 relative z-10" />
                                            <span className="font-bold relative z-10 text-lg">Source Code</span>
                                            <ExternalLink className="w-4 h-4 opacity-70 relative z-10" />
                                        </Link>
                                    )}

                                    {!portfolio.link && !portfolio.source && (
                                        <div className="p-4 bg-gray-100 dark:bg-slate-900 border-2 border-black dark:border-white rounded-md border-dashed text-center">
                                            <p className="text-gray-500 font-medium italic">Links not available for this project</p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 pt-8 border-t-2 border-black dark:border-white border-dashed">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">Platform</span>
                                        <span className="font-bold text-foreground">Web Application</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">Role</span>
                                        <span className="font-bold text-foreground">Fullstack Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
