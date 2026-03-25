import React from 'react';

function Footer(): React.ReactElement {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-teal-500 text-white py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <p className="text-center text-sm lg:text-base font-light tracking-wide">
                    &copy; {currentYear} Created by <span className="font-semibold">Ahmad Ammar Musyaffa</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;