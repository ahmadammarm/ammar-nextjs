import { footer } from '@/constants/footer';
import React from 'react';

function Footer(): React.ReactElement {
  return (
    <div className="bg-teal-500 text-white py-6">
      <div className="container mx-auto flex justify-center space-x-4">
        {footer.map((foot, index) => (
          <footer key={index} className="flex items-center justify-center mt-5 mb-5">
            <a
              href={foot.link}
              className="text-teal-500 hover:text-white hover:bg-teal-500 hover:border-white transition duration-300 p-2 lg:p-3 bg-white border border-teal-500 rounded-md dark:bg-slate-900 dark:hover:bg-teal-500 dark:hover:border-gray-700 dark:hover:text-slate-900"
              target='_blank'
            >
              {React.createElement(foot.logo, { className: "w-4 h-4 lg:w-6 lg:h-6" })}
            </a>
          </footer>
        ))}
      </div>
      {/* Copyright */}
        <div className="text-center mt-4 text-sm lg:text-base">
            <p className="dark:text-slate-900">&copy; 2024 Created by Ahmad Ammar Musyaffa. All Rights Reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
