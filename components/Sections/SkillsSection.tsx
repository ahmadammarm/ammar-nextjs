"use client"

import { aiSkills, techStack, tools } from '@/constants/skill';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

function SkillsSection() {
    const [activeTab, setActiveTab] = useState('tech-stack');

    return (
        <div className="w-full py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                        Tech Stacks & Tools
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                        Here are some of the technologies and tools that I have been working with recently
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="inline-flex rounded-md p-1.5 gap-2 flex-wrap justify-center">
                        <Button
                            className={`px-6 md:px-8 py-2.5 md:py-3 font-bold text-sm md:text-base rounded-md transition-all duration-300 ${
                                activeTab === 'tech-stack'
                                    ? 'bg-primary text-primary-foreground border-2 border-black dark:border-white shadow-neo'
                                    : 'bg-transparent text-foreground hover:bg-accent border-2 border-transparent'
                            }`}
                            onClick={() => setActiveTab('tech-stack')}
                        >
                            Tech Stacks
                        </Button>
                        <Button
                            className={`px-6 md:px-8 py-2.5 md:py-3 font-bold text-sm md:text-base rounded-md transition-all duration-300 ${
                                activeTab === 'ai-integration'
                                    ? 'bg-primary text-primary-foreground border-2 border-black dark:border-white shadow-neo'
                                    : 'bg-transparent text-foreground hover:bg-accent border-2 border-transparent'
                            }`}
                            onClick={() => setActiveTab('ai-integration')}
                        >
                            AI Integration
                        </Button>
                        <Button
                            className={`px-6 md:px-8 py-2.5 md:py-3 font-bold text-sm md:text-base rounded-md transition-all duration-300 ${
                                activeTab === 'tools'
                                    ? 'bg-primary text-primary-foreground border-2 border-black dark:border-white shadow-neo'
                                    : 'bg-transparent text-foreground hover:bg-accent border-2 border-transparent'
                            }`}
                            onClick={() => setActiveTab('tools')}
                        >
                            Tools
                        </Button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative">
                    {activeTab === 'tech-stack' && (
                        <div className="animate-fadeIn">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
                                {techStack.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="group relative flex flex-col items-center justify-center p-4 md:p-6 bg-background rounded-md shadow-neo dark:shadow-neo-dark border-2 border-black dark:border-white"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className={`mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300 p-2 rounded-md ${
                                                skill.gambar.includes('nextjs') || skill.gambar.includes('expressjs') 
                                                ? 'bg-white shadow-sm' 
                                                : ''
                                            }`}>
                                                <Image
                                                    src={skill.gambar}
                                                    alt={skill.nama}
                                                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                                                    width={80}
                                                    height={80}
                                                />
                                            </div>
                                            <h4 className="text-xs md:text-sm lg:text-base font-semibold text-brand-blue text-center leading-tight">
                                                {skill.nama}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'ai-integration' && (
                        <div className="animate-fadeIn">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
                                {aiSkills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="group relative flex flex-col items-center justify-center p-4 md:p-6 bg-background rounded-md shadow-neo dark:shadow-neo-dark border-2 border-black dark:border-white"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className="mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300 p-2 rounded-md">
                                                <Image
                                                    src={skill.gambar}
                                                    alt={skill.nama}
                                                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                                                    width={80}
                                                    height={80}
                                                />
                                            </div>
                                            <h4 className="text-xs md:text-sm lg:text-base font-semibold text-brand-blue text-center leading-tight">
                                                {skill.nama}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'tools' && (
                        <div className="animate-fadeIn">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
                                {tools.map((tool, index) => (
                                    <div
                                        key={index}
                                        className="group relative flex flex-col items-center justify-center p-4 md:p-6 bg-background rounded-md shadow-neo dark:shadow-neo-dark border-2 border-black dark:border-white"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className={`mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300 p-2 rounded-md ${
                                                tool.gambar.includes('nextjs') || tool.gambar.includes('expressjs') 
                                                ? 'bg-white shadow-sm' 
                                                : ''
                                            }`}>
                                                <Image
                                                    src={tool.gambar}
                                                    alt={tool.nama}
                                                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                                                    width={80}
                                                    height={80}
                                                />
                                            </div>
                                            <h4 className="text-xs md:text-sm lg:text-base font-bold text-brand-blue text-center leading-tight">
                                                {tool.nama}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    );
}

export default SkillsSection;