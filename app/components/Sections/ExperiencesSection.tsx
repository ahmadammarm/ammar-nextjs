"use client"

import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { experiences } from '@/constants/experiences';

function ExperienceSectionComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(window.innerWidth >= 1024 ? 2 : 1);
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.ceil(experiences.length / slidesPerView) ? prevIndex : prevIndex + 1));
  };

  return (
    <div id="experiences" className="w-full py-28">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-teal-500">Experiences</h2>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold">Pengalaman Kerja⌛</h3>
          <p className="text-gray-700 dark:text-gray-500">
            Saya juga berpengalaman dalam beberapa pengembangan situs web yang saya pelajari selama lebih dari 1 tahun akan dijelaskan di bawah ini.
          </p>
        </div>

        {/* Experience Carousel Start */}
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            {/* Carousel Content */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100 / slidesPerView}%)` }}
              >
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-full ${slidesPerView === 2 ? 'md:w-1/2' : ''} p-4`}
                    style={{ minWidth: slidesPerView === 2 ? '50%' : '100%' }}
                  >
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl dark:shadow-black">
                      <h4 className="text-3xl lg:text-4xl font-semibold text-teal-500 mb-5">{exp.jabatan}</h4>
                      <p className="text-base text-teal-700 dark:text-teal-500 mb-5">
                        {exp.nama}<span className="text-base text-black dark:text-white mb-5"> | {exp.kontrak}</span>
                      </p>
                      <div className='flex flex-row m-1'>
                        {exp.logo.map((logo, index) => (
                          <img key={index} src={logo} alt={exp.nama} className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] m-2' />
                        ))}
                      </div>
                      <p className="text-sm dark:text-gray-400 text-gray-500 mb-5">{exp.tahun}</p>
                      <p className="text-sm text-gray-700 dark:text-white mb-5">{exp.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Experience Carousel End */}

        {/* Navigation Buttons Start */}
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            className={`p-2 text-teal-500 bg-white border border-teal-500 dark:bg-gray-800 rounded-md mx-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <BsChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={handleNextClick}
            disabled={currentIndex === Math.ceil(experiences.length / slidesPerView) - 1}
            className={`p-2 text-teal-500 bg-white border border-teal-500 dark:bg-gray-800 rounded-md mx-2 ${currentIndex === Math.ceil(experiences.length / slidesPerView) - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <BsChevronRight className="w-8 h-8" />
          </button>
        </div>
        {/* Navigation Buttons End */}
      </div>
    </div>
  );
}

export default ExperienceSectionComponent;
