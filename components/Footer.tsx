import React from "react";
import { footer } from "@/constants/footer";
import Link from "next/link";

function Footer(): React.ReactElement {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-brand-blue text-black py-10 px-4 md:px-8 border-t-2 border-black dark:border-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Brand / Copyright */}
                <div className="text-center md:text-left">
                    <p className="font-black text-lg uppercase tracking-tight">
                        Ahmad Ammar Musyaffa
                    </p>
                    <p className="text-xs md:text-sm font-bold tracking-wide text-black/80 mt-1">
                        &copy; {currentYear} All Rights Reserved.
                    </p>
                </div>

                {/* Social Links Row */}
                <div className="flex items-center gap-3">
                    {footer.map((item, index) => {
                        const Icon = item.logo;
                        return (
                            <Link
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center cursor-pointer"
                                aria-label="Social Link"
                            >
                                <Icon className="w-5 h-5" />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
