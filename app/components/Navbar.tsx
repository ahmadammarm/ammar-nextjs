"use client"

import React, { useState } from 'react';
import { ModeToggle } from './ModeToggle';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div>
      <header className="fixed w-full top-0 z-50">
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ammar</span>
            </a>
            <div className="flex items-center lg:order-2">
              <ModeToggle />
              <button onClick={handleMobileMenuToggle} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded={isMobileMenuOpen}>
                <span className="sr-only">Open main menu</span>
                <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className={`items-center justify-between ${isMobileMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-lg">
                {['Home', 'About', 'Educations', 'Experiences', 'Skills', 'Portfolio', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`block py-2 pl-3 pr-4 rounded lg:p-0 ${
                        activeLink === link
                          ? 'text-white bg-gray-700 lg:bg-transparent lg:text-teal-500 dark:text-teal-500'
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
    </div>
  );
}

export default Navbar;
