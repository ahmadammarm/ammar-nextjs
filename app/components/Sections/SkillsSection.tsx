"use client"

import { techStack, tools } from '@/constants/skill';
import React, { useEffect, useState } from 'react';

function SkillsSection() {
  const [activeTab, setActiveTab] = useState('tech-stack');

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in');
      }, index * 150);
    });
  }, []);

  return (
    <div id="skills" className="w-full py-20">
      {/* Skills Section Title */}
      <div className="text-center mb-[5rem] mt-[5rem]">
        <h2 className="text-5xl font-bold">Skills</h2>
      </div>

      {/* Skills Section Content */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-10">
          <div className="w-full md:w-1/4 text-center md:text-right">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">Tech Stack⚙️ & Tools🛠️</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-400">Ada beberapa tech stack dan tools yang telah saya pelajari khususnya dalam pemrograman.</p>
          </div>

          {/* Skills Content Start */}
          <div className="w-full md:w-3/4 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
              <button
                className={`px-4 py-2 font-semibold text-lg ${activeTab === 'tech-stack' ? 'text-teal-500' : 'text-black dark:text-white'} transition-colors duration-200`}
                onClick={() => setActiveTab('tech-stack')}
              >
                <span className="mr-2">⚙️</span> Tech Stack
              </button>
              <button
                className={`px-4 py-2 font-semibold text-lg ${activeTab === 'tools' ? 'text-teal-500' : 'text-black dark:text-white'} transition-colors duration-200`}
                onClick={() => setActiveTab('tools')}
              >
                <span className="mr-2">🛠️</span> Tools
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'tech-stack' && (
                <div className="tab-panel fade-in-element">
                  {/* Skills Section Tech Stack Content */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {techStack.map((skill, index) => (
                      <div key={index} className="relative group flex flex-col items-center p-4 mb-5 hover:translate-y-[-10px] hover:shadow-teal-500 dark:shadow-black shadow-lg transition-all ease-in-out duration-300 rounded-lg">
                        <img src={skill.gambar} alt={skill.nama} className="w-16 h-16 md:w-20 md:h-20 mb-4" />
                        <h4 className="text-lg font-semibold mb-2 text-teal-500 text-center">{skill.nama}</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-400">{skill.tingkat}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'tools' && (
                <div className="tab-panel fade-in-element">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {tools.map((tool, index) => (
                      <div key={index} className="relative group flex flex-col items-center p-4 mb-5 hover:translate-y-[-10px] hover:shadow-teal-500 dark:shadow-black shadow-lg transition-all ease-in-out duration-300 rounded-lg">
                        <img src={tool.gambar} alt={tool.nama} className="w-16 h-16 md:w-20 md:h-20 mb-4" />
                        <h4 className="text-lg font-semibold mb-2 text-teal-500 text-center">{tool.nama}</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-400">{tool.tingkat}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Skills Content End */}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
