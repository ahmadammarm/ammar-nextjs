import React from 'react';

function Footer(): React.ReactElement {
    return (
        <div className="bg-teal-500 text-white py-6 px-4">
            <div className="text-center text-sm lg:text-base">
                <p className="dark:text-slate-900">&copy; {new Date().getFullYear()} Created by Ahmad Ammar Musyaffa. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
