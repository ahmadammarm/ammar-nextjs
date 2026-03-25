"use client"

import { techStack, tools } from '@/constants/skill';
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
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                        Tech Stacks & Tools
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Here are some of the technologies and tools that I have been working with recently
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="inline-flex bg-gray-100 dark:bg-slate-800 rounded-full p-1.5 gap-2 shadow-inner">
                        <Button
                            className={`px-6 md:px-8 py-2.5 md:py-3 font-semibold text-sm md:text-base rounded-full transition-all duration-300 ${
                                activeTab === 'tech-stack'
                                    ? 'bg-white dark:bg-slate-900 text-teal-500 shadow-lg scale-105'
                                    : 'bg-transparent text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400'
                            }`}
                            onClick={() => setActiveTab('tech-stack')}
                        >
                            Tech Stacks
                        </Button>
                        <Button
                            className={`px-6 md:px-8 py-2.5 md:py-3 font-semibold text-sm md:text-base rounded-full transition-all duration-300 ${
                                activeTab === 'tools'
                                    ? 'bg-white dark:bg-slate-900 text-teal-500 shadow-lg scale-105'
                                    : 'bg-transparent text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400'
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
                                        className="group relative flex flex-col items-center justify-center p-4 md:p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-xl hover:shadow-teal-500/20 dark:hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-800 hover:border-teal-500/30"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        {/* Glow effect on hover */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/0 to-teal-600/0 group-hover:from-teal-500/5 group-hover:to-teal-600/5 transition-all duration-300" />

                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className="mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                                <Image
                                                    src={skill.gambar}
                                                    alt={skill.nama}
                                                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                                                    width={80}
                                                    height={80}
                                                />
                                            </div>
                                            <h4 className="text-xs md:text-sm lg:text-base font-semibold text-teal-500 text-center leading-tight">
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
                                        className="group relative flex flex-col items-center justify-center p-4 md:p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-xl hover:shadow-teal-500/20 dark:hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-800 hover:border-teal-500/30"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        {/* Glow effect on hover */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/0 to-teal-600/0 group-hover:from-teal-500/5 group-hover:to-teal-600/5 transition-all duration-300" />

                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className="mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                                <Image
                                                    src={tool.gambar}
                                                    alt={tool.nama}
                                                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                                                    width={80}
                                                    height={80}
                                                />
                                            </div>
                                            <h4 className="text-xs md:text-sm lg:text-base font-semibold text-teal-500 text-center leading-tight">
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