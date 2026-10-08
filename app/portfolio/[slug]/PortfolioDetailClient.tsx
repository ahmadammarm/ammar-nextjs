"use client";

import { fullPortfolio } from "@/constants/portfolio";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Loading from "@/components/Loading";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    "/assets/skills/nestjs.svg": "Nest.js",
    "/assets/skills/vue.png": "Vue.js",
    "/assets/skills/html.png": "HTML5",
    "/assets/skills/css.png": "CSS3",
    "/assets/skills/js.png": "JavaScript",
    "/assets/skills/git.png": "Git",
    "/assets/skills/github.png": "GitHub",
    "/assets/skills/fastapi.svg": "FastAPI",
    "/assets/skills/python.png": "Python",
    "/assets/skills/redis.svg": "Redis",
    "/assets/skills/firebase.svg": "Firebase",
    "/assets/skills/springboot.svg": "Spring Boot",
    "/assets/skills/java.svg": "Java",
};

export default function PortfolioDetailClient() {
    const params = useParams();
    const [portfolio, setPortfolio] = useState<typeof fullPortfolio[0] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        setIsLoading(true);

        const found = fullPortfolio.find((item) => item.slug === params.slug);

        if (!found) {
            notFound();
        }

        const loadingTimer = setTimeout(() => {
            setPortfolio(found);
            setIsLoading(false);
        }, 400);

        return () => clearTimeout(loadingTimer);
    }, [params.slug]);

    if (isLoading) {
        return <Loading />;
    }

    if (!portfolio) {
        notFound();
    }

    const images = [
        portfolio.gambar,
        portfolio.gambar2,
        portfolio.gambar3,
        portfolio.gambar4,
        portfolio.gambar5,
    ].filter((img): img is string => Boolean(img));

    const formattedCategory = portfolio.category
        .split("-")
        .map((w) => w.toUpperCase())
        .join(" ");

    return (
        <div className="w-full min-h-screen py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Top Navigation & Category Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b-2 border-black dark:border-white">
                    <Link
                        href="/portfolio"
                        className="px-4 py-2 bg-background text-foreground border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all inline-flex items-center gap-2 font-black text-xs uppercase tracking-wider cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Projects</span>
                    </Link>

                    <div className="px-3.5 py-1.5 bg-brand-blue text-black border-2 border-black dark:border-white text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        {formattedCategory}
                    </div>
                </div>

                {/* Project Title & Overview Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground uppercase tracking-tight leading-[1.05] mb-6">
                        {portfolio.nama}
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mb-8">
                        {portfolio.deskripsi2 || portfolio.deskripsi}
                    </p>

                    {/* Primary Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                        {portfolio.link && (
                            <Link
                                href={portfolio.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-7 py-3.5 bg-brand-blue text-black border-2 border-black dark:border-white font-black text-sm uppercase tracking-wider shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all inline-flex items-center gap-2 cursor-pointer"
                            >
                                <span>Live Demo</span>
                                <ExternalLink className="w-4 h-4" />
                            </Link>
                        )}

                        {portfolio.source && (
                            <Link
                                href={portfolio.source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-7 py-3.5 bg-background text-foreground border-2 border-black dark:border-white font-black text-sm uppercase tracking-wider shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all inline-flex items-center gap-2 cursor-pointer"
                            >
                                <Github className="w-4 h-4" />
                                <span>Source Code</span>
                            </Link>
                        )}
                    </div>
                </motion.div>

                {/* Neobrutalist Metadata Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 md:p-6 bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark mb-14">
                    <div className="flex flex-col">
                        <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                            Year
                        </span>
                        <span className="text-lg md:text-xl font-black text-foreground mt-1">
                            {portfolio.year || "2024"}
                        </span>
                    </div>

                    <div className="flex flex-col border-l-0 sm:border-l-2 border-black/15 dark:border-white/15 pl-0 sm:pl-4">
                        <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                            Role
                        </span>
                        <span className="text-lg md:text-xl font-black text-foreground mt-1">
                            {portfolio.role || "Fullstack Developer"}
                        </span>
                    </div>

                    <div className="flex flex-col border-l-0 md:border-l-2 border-black/15 dark:border-white/15 pl-0 md:pl-4">
                        <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                            Platform
                        </span>
                        <span className="text-lg md:text-xl font-black text-foreground mt-1">
                            {portfolio.platform || "Web Application"}
                        </span>
                    </div>

                    <div className="flex flex-col border-l-0 sm:border-l-2 border-black/15 dark:border-white/15 pl-0 sm:pl-4">
                        <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                            Technologies
                        </span>
                        <span className="text-lg md:text-xl font-black text-foreground mt-1">
                            {portfolio.teknologi.length} Stack Tools
                        </span>
                    </div>
                </div>

                {/* Main Screenshot Showcase with Window Frame */}
                <div className="mb-16">
                    <div className="relative w-full bg-background border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-3 md:p-4 mb-6">
                        {/* Window Inspector Bar */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-black dark:border-white">
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 bg-red-500 border border-black dark:border-white inline-block" />
                                <span className="w-3 h-3 bg-yellow-400 border border-black dark:border-white inline-block" />
                                <span className="w-3 h-3 bg-emerald-500 border border-black dark:border-white inline-block" />
                            </div>
                            <span className="font-mono text-xs font-black uppercase tracking-widest text-muted-foreground">
                                {portfolio.slug.toUpperCase()}_PREVIEW_{activeImage + 1}.PNG
                            </span>
                        </div>

                        {/* Image Frame */}
                        <div className="relative aspect-video w-full bg-muted border-2 border-black dark:border-white overflow-hidden">
                            <Image
                                src={images[activeImage]!}
                                alt={portfolio.nama}
                                fill
                                sizes="(max-width: 1200px) 100vw, 1200px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Thumbnail Selector */}
                    {images.length > 1 && (
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                            {images.map((image, index) => {
                                const isActive = activeImage === index;
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setActiveImage(index)}
                                        className={`relative w-20 h-14 sm:w-28 sm:h-20 border-2 overflow-hidden transition-all cursor-pointer ${
                                            isActive
                                                ? "border-brand-blue shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] translate-x-[2px] translate-y-[2px]"
                                                : "border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 opacity-75 hover:opacity-100"
                                        }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`Preview ${index + 1}`}
                                            fill
                                            sizes="120px"
                                            className="object-cover"
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Detailed 2-Column Section: Features & Tech Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    {/* Left Column: Core Features */}
                    <div className="lg:col-span-7">
                        <div className="inline-block px-3 py-1 bg-brand-blue text-black border-2 border-black dark:border-white text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3">
                            Features
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8">
                            Core Features &amp; Capabilities
                        </h2>

                        {portfolio.features && portfolio.features.length > 0 ? (
                            <div className="space-y-4">
                                {portfolio.features.map((feature: string, index: number) => (
                                    <div
                                        key={index}
                                        className="bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-5 flex items-start gap-4 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-hover dark:hover:shadow-neo-hover-dark"
                                    >
                                        <div className="w-8 h-8 flex-shrink-0 bg-brand-blue text-black border-2 border-black font-black text-xs flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <p className="text-sm md:text-base font-bold text-foreground leading-relaxed">
                                                {feature}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">
                                Detailed feature list is available in the live demonstration and source repository.
                            </p>
                        )}
                    </div>

                    {/* Right Column: Tech Stack Matrix & Contact Callout */}
                    <div className="lg:col-span-5 space-y-10">
                        {/* Technologies Box */}
                        <div>
                            <div className="inline-block px-3 py-1 bg-brand-blue text-black border-2 border-black dark:border-white text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3">
                                Technology
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8">
                                Built With
                            </h2>

                            <div className="grid grid-cols-2 gap-3">
                                {portfolio.teknologi.map((techPath: string, index: number) => {
                                    const techName =
                                        techLabels[techPath] ||
                                        techPath.split("/").pop()?.split(".")[0]?.toUpperCase() ||
                                        "TECH";

                                    const isDarkLogo =
                                        techPath.includes("nextjs") ||
                                        techPath.includes("expressjs") ||
                                        techPath.includes("github");

                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-3 bg-background border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                                        >
                                            <div
                                                className={`w-7 h-7 p-1 flex items-center justify-center border border-black dark:border-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] ${
                                                    isDarkLogo ? "bg-white" : "bg-background"
                                                }`}
                                            >
                                                <Image
                                                    src={techPath}
                                                    alt={techName}
                                                    width={20}
                                                    height={20}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-wider text-foreground line-clamp-1">
                                                {techName}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-background border-2 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] p-6 md:p-8">
                            <div className="inline-block px-3 py-1 bg-brand-blue text-black border-2 border-black dark:border-white text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3">
                                Collaborate
                            </div>
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-foreground mb-3">
                                Need a similar application?
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                                I build end-to-end fullstack systems, robust APIs, and performant web interfaces tailored to your requirements.
                            </p>
                            <Link
                                href="/contact"
                                className="w-full py-3.5 px-4 bg-brand-blue text-black border-2 border-black dark:border-white font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span>Get In Touch</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
