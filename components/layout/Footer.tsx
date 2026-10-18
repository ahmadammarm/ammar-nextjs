import { type ReactElement } from "react";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { profile } from "@/constants/profile";

export function Footer(): ReactElement {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-brand-blue text-black py-10 px-4 md:px-8 border-t-2 border-black dark:border-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="font-black text-lg uppercase tracking-tight">{profile.name}</p>
                    <p className="text-xs md:text-sm font-bold tracking-wide text-black/80 mt-1">
                        &copy; {currentYear} All Rights Reserved.
                    </p>
                </div>
                <SocialLinks variant="footer" />
            </div>
        </footer>
    );
}
