"use client"

import React, { useEffect } from "react";
import { profile } from "@/constants/profile";
import { DownloadIcon } from "lucide-react";

function HomeSection(): React.JSX.Element {
    const { nama, role, CV, deskripsi, foto } = profile[0];

    useEffect(() => {
        document.getElementById("content")?.classList.add("fade-in");
        document.getElementById("image")?.classList.add("fade-in");
    }, []);

    return (
        <div id="home" className="min-h-screen flex flex-col justify-center items-center p-4 pt-28 lg:pt-16">
            <div className="max-w-7xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center">
                
                {/* Content Start */}
                <div id="content" className="opacity-0 transform translate-y-10 transition-all duration-700 flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left p-4">
                    <p className="text-gray-700 dark:text-gray-400 text-lg">Haii..👋</p>
                    <h1 className="text-4xl font-bold mb-4">Saya <span className="text-4xl text-teal-500">{nama}</span></h1>
                    <p className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-400">Sebagai</p>
                    <div className="text-3xl font-semibold mb-4 italic text-teal-500">
                        {role}  🧑🏻‍💻
                    </div>
                    <p className="text-xl mb-6 text-gray-700 dark:text-gray-400">{deskripsi}</p>
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
                <div id="image" className="opacity-0 transform translate-y-10 transition-all duration-700 flex justify-center lg:w-1/2 p-4 mb-8 lg:mb-0">
                    <img
                        src={foto[0]}
                        alt={nama}
                        className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-teal-500"
                    />
                </div>
                {/* Image Content End */}

            </div>
        </div>
    );
};

export default HomeSection;
