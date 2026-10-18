import { type ReactElement } from "react";
import { marqueeKeywords } from "@/constants/home";

export function TechMarquee(): ReactElement {
    // Rendered twice so the -50% marquee animation loops seamlessly.
    const items = [...marqueeKeywords, ...marqueeKeywords];

    return (
        <div className="w-full bg-brand-blue text-black border-b-2 border-black dark:border-white py-3 overflow-hidden select-none">
            <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
                {items.map((keyword, index) => (
                    <div key={`${keyword}-${index}`} className="flex items-center gap-6" aria-hidden={index >= marqueeKeywords.length}>
                        <span className="text-xs md:text-sm font-black uppercase tracking-widest">{keyword}</span>
                        <span className="text-black text-xs font-black">★</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
