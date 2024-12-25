"use client"

import React from "react";
import { profile } from "@/constants/profile";
import { DownloadIcon } from "lucide-react";

function HeroSection(): React.JSX.Element {
    const { nama, role, CV, foto } = profile[0];


    return (
        <div className="flex flex-col justify-center items-center p-4">
            <div className="max-w-7xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center">

                {/* Content Start */}
                <div className="transform translate-y-10 transition-all duration-700 flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left p-4">
                    <p className="text-gray-700 dark:text-gray-400 text-lg">Hii..👋</p>
                    <h2 className="text-4xl font-bold mb-4">Im <span className="text-4xl text-teal-500">{nama}</span></h2>
                    <div className="text-md md:text-lg lg:text-xl mb-14">
                        {role}
                    </div>
                    <a
                        href={CV}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={`CV_Ahmad_Ammar`}
                        className="flex flex-row bg-teal-500 text-white px-4 py-3 lg:px-6 lg:py-4 rounded hover:bg-teal-600 transition duration-200 ease-in-out"
                    >
                        <DownloadIcon className="mr-1" /> Download CV
                    </a>
                </div>
                {/* Content End */}

                {/* Image Content Start */}
                <div className="transform translate-y-10 transition-all duration-700 flex justify-center lg:w-1/2 p-4 mb-8 lg:mb-0">
                    <img
                        src={foto[0]}
                        alt={nama}
                        className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-teal-500"
                        loading="lazy"
                    />
                </div>
                {/* Image Content End */}

            </div>
        </div>
    );
};

export default HeroSection;
