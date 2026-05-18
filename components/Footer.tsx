import React from 'react';

function Footer(): React.ReactElement {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-blue text-black py-8 px-4 border-t-2 border-black dark:border-white">
            <div className="max-w-6xl mx-auto">
                <p className="text-center text-sm lg:text-base font-bold tracking-wide">
                    &copy; {currentYear} Created by <span className="underline decoration-2">Ahmad Ammar Musyaffa</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;