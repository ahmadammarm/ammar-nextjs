"use client";

import { type KeyboardEvent, type ReactElement, type UIEvent, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { neoButton } from "@/components/shared/neo-button";
import { cn } from "@/lib/utils";

export type GalleryScreen = {
    src: string;
    label: string;
};

type ProjectGalleryProps = {
    name: string;
    /** Shown in the window's address bar, e.g. the live demo host. */
    address: string;
    screens: [GalleryScreen, ...GalleryScreen[]];
};

const hiddenScrollbar = "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
const stepButtonClass =
    "w-10 h-10 flex items-center justify-center bg-background text-foreground neo-border neo-press-sm cursor-pointer disabled:opacity-40 disabled:pointer-events-none";
const viewerStepClass =
    "w-11 h-11 items-center justify-center bg-white text-black border-2 border-black shadow-neo-sm cursor-pointer disabled:opacity-30";

function scrollBehavior(instant: boolean): ScrollBehavior {
    return instant || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

/** Screen switcher: named tabs, a swipeable window stage, and a fullscreen viewer. */
export function ProjectGallery({ name, address, screens }: ProjectGalleryProps): ReactElement {
    const [activeIndex, setActiveIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const tabListRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const dialogRef = useRef<HTMLDialogElement>(null);

    const count = screens.length;
    const lastIndex = count - 1;
    const active = screens[activeIndex] ?? screens[0];
    const position = `${activeIndex + 1} / ${count}`;

    const goTo = useCallback(
        (index: number, instant = false) => {
            const target = Math.min(Math.max(index, 0), lastIndex);
            setActiveIndex(target);
            const track = trackRef.current;
            track?.scrollTo({ left: target * track.clientWidth, behavior: scrollBehavior(instant) });
        },
        [lastIndex]
    );

    // Keep the active tab in view inside the horizontally scrolling tab row without moving the page.
    useEffect(() => {
        const list = tabListRef.current;
        const tab = tabRefs.current[activeIndex];
        if (!list || !tab) return;
        list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior: scrollBehavior(false) });
    }, [activeIndex]);

    const handleTrackScroll = (event: UIEvent<HTMLDivElement>): void => {
        const track = event.currentTarget;
        const index = Math.min(Math.max(Math.round(track.scrollLeft / track.clientWidth), 0), lastIndex);
        if (index !== activeIndex) setActiveIndex(index);
    };

    const handleArrowKeys = (event: KeyboardEvent<HTMLElement>, instant: boolean): void => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(activeIndex - 1, instant);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            goTo(activeIndex + 1, instant);
        }
    };

    const openViewer = (): void => {
        dialogRef.current?.showModal();
        document.documentElement.style.overflow = "hidden";
    };

    const closeViewer = (): void => dialogRef.current?.close();

    return (
        <section aria-label={`${name} screenshots`} className="mb-16 md:mb-20">
            {count > 1 && (
                <div
                    ref={tabListRef}
                    className={cn("relative flex gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pt-1 pb-4", hiddenScrollbar)}
                >
                    {screens.map((screen, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                                key={screen.src}
                                ref={(element) => {
                                    tabRefs.current[index] = element;
                                }}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() => goTo(index)}
                                className={cn(
                                    "shrink-0 px-4 py-2 font-mono text-xs font-black uppercase tracking-wider whitespace-nowrap neo-border cursor-pointer",
                                    isActive
                                        ? "bg-brand-blue text-black neo-pressed"
                                        : "bg-background text-foreground neo-press-sm"
                                )}
                            >
                                {screen.label}
                            </button>
                        );
                    })}
                </div>
            )}

            <div className="bg-background neo-border neo-shadow-lg">
                <div className="flex items-center gap-3 px-3 py-2.5 bg-brand-blue text-black border-b-2 border-black dark:border-white">
                    <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                        <span className="w-3 h-3 bg-red-500 border-2 border-black" />
                        <span className="w-3 h-3 bg-yellow-400 border-2 border-black" />
                        <span className="w-3 h-3 bg-emerald-500 border-2 border-black" />
                    </div>
                    <span className="flex-1 min-w-0 truncate bg-white border-2 border-black px-3 py-1 font-mono text-[11px] sm:text-xs font-bold text-center">
                        {address}
                    </span>
                    <span className="hidden sm:block shrink-0 font-mono text-xs font-black tabular-nums">{position}</span>
                </div>

                <div
                    ref={trackRef}
                    onScroll={handleTrackScroll}
                    onKeyDown={(event) => handleArrowKeys(event, false)}
                    tabIndex={0}
                    aria-label={`${active.label}, screen ${position}. Use the arrow keys to switch screens.`}
                    className={cn(
                        "flex overflow-x-auto snap-x snap-mandatory focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-brand-blue",
                        hiddenScrollbar
                    )}
                >
                    {screens.map((screen, index) => (
                        <div key={screen.src} className="relative w-full shrink-0 snap-center aspect-video bg-muted">
                            <Image
                                src={screen.src}
                                alt={`${name}: ${screen.label}`}
                                fill
                                quality={100}
                                sizes="(max-width: 1280px) 100vw, 1280px"
                                priority={index === 0}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between gap-3 px-3 py-3 border-t-2 border-black dark:border-white">
                    <div className="flex items-center gap-2">
                        {count > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={() => goTo(activeIndex - 1)}
                                    disabled={activeIndex === 0}
                                    aria-label="Previous screen"
                                    className={stepButtonClass}
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => goTo(activeIndex + 1)}
                                    disabled={activeIndex === lastIndex}
                                    aria-label="Next screen"
                                    className={stepButtonClass}
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </>
                        )}
                        <span className="ml-1 font-mono text-xs font-black uppercase tracking-wider text-foreground truncate">
                            {active.label}
                        </span>
                    </div>
                    <button
                        type="button"
                        onClick={openViewer}
                        className={cn(neoButton({ tone: "secondary" }), "shrink-0 px-3 sm:px-4 py-2 text-xs")}
                    >
                        <Maximize2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Fullscreen</span>
                        <span className="sr-only sm:hidden">Open fullscreen</span>
                    </button>
                </div>
            </div>

            <dialog
                ref={dialogRef}
                aria-label={`${name} screenshots, fullscreen`}
                onClose={() => {
                    document.documentElement.style.overflow = "";
                }}
                onKeyDown={(event) => handleArrowKeys(event, true)}
                className="m-0 p-0 w-screen max-w-none h-[100dvh] max-h-none bg-black text-white backdrop:bg-black/80 open:flex flex-col"
            >
                <div className="flex items-center justify-between gap-4 px-4 py-3 border-b-2 border-white">
                    <p className="min-w-0 truncate font-mono text-xs sm:text-sm font-black uppercase tracking-widest">
                        {active.label}
                        <span className="ml-3 text-white/60 tabular-nums">{position}</span>
                    </p>
                    <button
                        type="button"
                        onClick={closeViewer}
                        aria-label="Close fullscreen"
                        className="w-10 h-10 shrink-0 flex items-center justify-center bg-brand-blue text-black border-2 border-white cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="relative flex-1 min-h-0">
                    <Image
                        src={active.src}
                        alt={`${name}: ${active.label}`}
                        fill
                        quality={100}
                        sizes="100vw"
                        className="object-contain p-3 sm:p-8"
                    />
                    {count > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={() => goTo(activeIndex - 1, true)}
                                disabled={activeIndex === 0}
                                aria-label="Previous screen"
                                className={cn(viewerStepClass, "hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2")}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                type="button"
                                onClick={() => goTo(activeIndex + 1, true)}
                                disabled={activeIndex === lastIndex}
                                aria-label="Next screen"
                                className={cn(viewerStepClass, "hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2")}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}
                </div>

                {/* On phones the arrows sit below the image so they never cover it. */}
                {count > 1 && (
                    <div className="sm:hidden flex items-center justify-between px-4 py-3 border-t-2 border-white">
                        <button
                            type="button"
                            onClick={() => goTo(activeIndex - 1, true)}
                            disabled={activeIndex === 0}
                            aria-label="Previous screen"
                            className={cn(viewerStepClass, "flex")}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <span className="font-mono text-xs font-black tabular-nums">{position}</span>
                        <button
                            type="button"
                            onClick={() => goTo(activeIndex + 1, true)}
                            disabled={activeIndex === lastIndex}
                            aria-label="Next screen"
                            className={cn(viewerStepClass, "flex")}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                )}
            </dialog>
        </section>
    );
}
