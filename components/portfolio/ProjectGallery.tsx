"use client";

import { type ReactElement, useState } from "react";
import Image from "next/image";
import { WindowFrame } from "@/components/shared/WindowFrame";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
    name: string;
    slug: string;
    images: [string, ...string[]];
};

export function ProjectGallery({ name, slug, images }: ProjectGalleryProps): ReactElement {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeImage = images[activeIndex] ?? images[0];

    return (
        <div className="mb-16">
            <WindowFrame
                title={`${slug.toUpperCase()}_PREVIEW_${activeIndex + 1}.PNG`}
                className="w-full p-3 md:p-4 mb-6"
            >
                <div className="relative aspect-video w-full bg-muted neo-border overflow-hidden">
                    <Image
                        src={activeImage}
                        alt={name}
                        fill
                        quality={100}
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-cover"
                        priority
                    />
                </div>
            </WindowFrame>

            {images.length > 1 && (
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {images.map((image, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                                key={image}
                                type="button"
                                aria-label={`Show preview ${index + 1}`}
                                aria-pressed={isActive}
                                onClick={() => setActiveIndex(index)}
                                className={cn(
                                    "relative w-20 h-14 sm:w-28 sm:h-20 border-2 overflow-hidden cursor-pointer",
                                    isActive
                                        ? "border-brand-blue neo-pressed transition-all duration-200"
                                        : "border-black dark:border-white neo-press-sm opacity-75 hover:opacity-100"
                                )}
                            >
                                <Image src={image} alt={`Preview ${index + 1}`} fill quality={100} sizes="120px" className="object-cover" />
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
