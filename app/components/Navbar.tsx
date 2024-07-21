"use client"

import React, { useState, useEffect } from 'react';
import { ModeToggle } from './ModeToggle';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
      const section = document.getElementById(storedActiveLink.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'educations', 'skills', 'experiences', 'portfolio', 'contact'];
      let currentSection = '';
      
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = sectionId;
          }
        }
      });

      setActiveLink(currentSection.charAt(0).toUpperCase() + currentSection.slice(1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    localStorage.setItem('activeLink', link);
    setIsMobileMenuOpen(false);

    const section = document.getElementById(link.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="fixed w-full z-50">
        <nav className="bg-white shadow-lg py-6 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="/" className="flex items-center">
              <span className="self-center text-4xl font-semibold whitespace-nowrap text-teal-500">Ammar</span>
            </a>
            <div className="flex items-center lg:order-2">
              <ModeToggle />
              <button onClick={handleMobileMenuToggle} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded={isMobileMenuOpen}>
                {isMobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
              </button>
            </div>
            <div className={`items-center justify-between ${isMobileMenuOpen ? 'block slide-down' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1 transition-all duration-300 ease-in-out`} id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-lg w-full">
                {['Home', 'About', 'Educations', 'Skills', 'Experiences', 'Portfolio', 'Contact'].map((link) => (
                  <li key={link} className="w-full lg:w-auto">
                    <a href={`/#${link.toLowerCase()}`}
                      className={`block py-2 pl-3 pr-4 rounded lg:p-0 transition duration-300 ease-in-out w-full text-left lg:text-center ${
                        activeLink === link
                          ? 'text-white lg:text-teal-500 dark:text-teal-500'
                          : 'text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-500 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                      }`}
                      onClick={() => handleLinkClick(link)}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </motion.div>
  );
};
