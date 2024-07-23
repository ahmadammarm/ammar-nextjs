"use client"

import { about } from '@/constants/about';
import React, { useEffect, useRef } from 'react';
import { Separator } from '@/components/ui/separator';

function AboutSection(): React.ReactElement {
    const { nama, negara, role, deskripsi, foto } = about[0];

    const titleRef = useRef(null);
    const imgRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (titleRef.current) observer.observe(titleRef.current);
        if (imgRef.current) observer.observe(imgRef.current);
        if (contentRef.current) observer.observe(contentRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            if (imgRef.current) observer.unobserve(imgRef.current);
            if (contentRef.current) observer.unobserve(contentRef.current);
        };
    }, []);

    return (
        <div id='about' className=' min-h-screen flex flex-col justify-center items-center p-3 py-20'>
            <h1 ref={titleRef} className='opacity-0 transform translate-y-10 transition-all duration-700 text-5xl font-bold mb-[5rem] mt-[5rem]' id='about-title'>
                About Me
            </h1>
            <div className=' max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center'>

                {/* Image Content Start */}
                <div ref={imgRef} className='opacity-0 transform translate-y-10 transition-all duration-700 flex justify-center lg:w-1/2 p-4 mb-8 lg:mb-0' id='about-img'>
                    <img src={foto} alt='Ammar' className=' w-64 h-64 lg:w-80 lg:h-96 rounded-md object-cover border-4 border-teal-500' /> 
                </div>
                {/* Image Content End */}

                {/* Content Start */}
                <div ref={contentRef} className='opacity-0 transform translate-y-10 transition-all duration-700 flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left p-4 lg:flex lg:flex-col' id='about-content'>
                    <p className=' text-gray-700 dark:text-gray-400 text-3xl font-bold mb-[1.5rem]'>
                        Haloo..👋 saya <span className='text-3xl text-teal-500'>{nama}</span>
                    </p>
                    <p className='text-gray-700 dark:text-gray-400 text-xl font-bold mb-[4rem] italic'>
                        Seorang <span className='text-2xl text-teal-500'>{role} 🧑🏻‍💻</span> bertempat tinggal di <span className='text-2xl text-teal-500'>{negara} 🌏</span>.
                    </p>
                    <p className=' text-md lg:text-lg mb-6'>
                        {deskripsi}
                    </p>
                    <Separator className="mb-5"/>
                </div>
                {/* Content End */}
            </div>
        </div>
    );
}

export default AboutSection;
