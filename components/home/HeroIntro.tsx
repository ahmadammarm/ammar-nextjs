"use client";

import { type ReactElement, useEffect, useRef, useState } from "react";
import { type AnimationPlaybackControls, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Pencil } from "@/components/home/Pencil";

type HeroIntroProps = {
    name: string;
    bio: string;
};

type Size = {
    width: number;
    height: number;
};

// Negative insets keep the script font's swashes from being cropped.
const HIDDEN_CLIP = "inset(-25% 110% -25% -10%)";
const VISIBLE_CLIP = "inset(-25% -10% -25% -10%)";

const START_DELAY_MS = 600;
const PENCIL_TRAVEL_S = 0.25;
const WRITING_SPEED_PX_PER_S = 450;
const MIN_WORD_DURATION_S = 0.35;
const PENCIL_BOB_PX = 8;
const CIRCLE_DURATION_S = 1.4;

/** Loose hand-drawn loop that overshoots its own start, scaled to the bio box. */
function circlePath({ width, height }: Size): string {
    const point = (x: number, y: number): string => `${(x / 100) * width} ${(y / 100) * height}`;
    return [
        `M ${point(10, 28)}`,
        `C ${point(28, 2)}, ${point(82, 0)}, ${point(96, 26)}`,
        `C ${point(106, 52)}, ${point(94, 90)}, ${point(54, 96)}`,
        `C ${point(18, 100)}, ${point(-3, 78)}, ${point(2, 48)}`,
        `C ${point(5, 26)}, ${point(24, 10)}, ${point(48, 7)}`,
    ].join(" ");
}

const wait = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Hero headline and bio. A pencil writes the name in script lettering, then
 * circles the bio. Users who prefer reduced motion see the finished state.
 */
export function HeroIntro({ name, bio }: HeroIntroProps): ReactElement {
    const containerRef = useRef<HTMLDivElement>(null);
    const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const circleBoxRef = useRef<HTMLDivElement>(null);
    const circlePathRef = useRef<SVGPathElement>(null);
    const [circleSize, setCircleSize] = useState<Size | null>(null);

    const pencilX = useMotionValue(0);
    const pencilY = useMotionValue(0);
    const pencilOpacity = useMotionValue(0);
    const circleProgress = useMotionValue(0);
    // A zero-length stroke with round caps still paints a dot, so hide it until drawing starts.
    const circleOpacity = useTransform(circleProgress, (progress) => (progress > 0 ? 1 : 0));

    const words = name.split(" ");

    // Keep the circle sized to the bio box so it stays correct after resizes.
    useEffect(() => {
        const box = circleBoxRef.current;
        if (!box) return undefined;

        const observer = new ResizeObserver(([entry]) => {
            if (entry) setCircleSize({ width: entry.contentRect.width, height: entry.contentRect.height });
        });
        observer.observe(box);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        const wordElements = wordRefs.current.filter((element): element is HTMLSpanElement => element !== null);
        const showWords = (): void => {
            wordElements.forEach((element) => {
                element.style.clipPath = "none";
            });
        };

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            showWords();
            circleProgress.set(1);
            return undefined;
        }

        let cancelled = false;
        const running: AnimationPlaybackControls[] = [];

        const play = (controls: AnimationPlaybackControls): Promise<void> =>
            new Promise((resolve) => {
                running.push(controls);
                controls.then(() => resolve());
            });

        const movePencilTo = (x: number, y: number, duration: number): Promise<void[]> =>
            Promise.all([play(animate(pencilX, x, { duration })), play(animate(pencilY, y, { duration }))]);

        // Element positions relative to the container, which the pencil is placed in.
        const relativeRect = (element: Element): DOMRect => {
            const base = container.getBoundingClientRect();
            const rect = element.getBoundingClientRect();
            return new DOMRect(rect.left - base.left, rect.top - base.top, rect.width, rect.height);
        };

        const writeName = async (): Promise<void> => {
            for (const word of wordElements) {
                const rect = relativeRect(word);
                const baseline = rect.top + rect.height * 0.75;

                await movePencilTo(rect.left, baseline, PENCIL_TRAVEL_S);
                if (cancelled) return;

                const duration = Math.max(MIN_WORD_DURATION_S, rect.width / WRITING_SPEED_PX_PER_S);
                const bob = [baseline, baseline - PENCIL_BOB_PX, baseline, baseline - PENCIL_BOB_PX, baseline];

                await Promise.all([
                    play(animate(word, { clipPath: [HIDDEN_CLIP, VISIBLE_CLIP] }, { duration, ease: "linear" })),
                    play(animate(pencilX, rect.right, { duration, ease: "linear" })),
                    play(animate(pencilY, bob, { duration, ease: "easeInOut" })),
                ]);
                if (cancelled) return;
                word.style.clipPath = "none";
            }
        };

        const circleBio = async (): Promise<void> => {
            const path = circlePathRef.current;
            const box = circleBoxRef.current;
            if (!path || !box) {
                circleProgress.set(1);
                return;
            }

            const boxRect = relativeRect(box);
            const length = path.getTotalLength();
            const pointAt = (progress: number): DOMPoint => {
                const point = path.getPointAtLength(progress * length);
                return new DOMPoint(boxRect.left + point.x, boxRect.top + point.y);
            };

            const start = pointAt(0);
            await movePencilTo(start.x, start.y, 0.4);
            if (cancelled) return;

            await play(
                animate(circleProgress, 1, {
                    duration: CIRCLE_DURATION_S,
                    ease: "easeInOut",
                    onUpdate: (progress) => {
                        const point = pointAt(progress);
                        pencilX.set(point.x);
                        pencilY.set(point.y);
                    },
                })
            );
        };

        const runSequence = async (): Promise<void> => {
            await document.fonts.ready;
            await wait(START_DELAY_MS);
            if (cancelled) return;

            const first = wordElements[0];
            if (first) {
                const rect = relativeRect(first);
                pencilX.set(rect.left - 40);
                pencilY.set(rect.top + rect.height * 0.75 + 40);
            }
            await play(animate(pencilOpacity, 1, { duration: 0.2 }));
            if (cancelled) return;

            await writeName();
            if (cancelled) return;

            await circleBio();
            if (cancelled) return;

            await play(animate(pencilOpacity, 0, { duration: 0.3 }));
        };

        void runSequence();

        return () => {
            cancelled = true;
            running.forEach((controls) => controls.stop());
        };
    }, [circleProgress, pencilOpacity, pencilX, pencilY]);

    return (
        <div ref={containerRef} className="relative flex flex-col items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground leading-[1.05] mb-5">
                Hi, I&apos;m{" "}
                <span className="font-hand normal-case tracking-normal text-brand-blue text-[1.25em] leading-[0.9]">
                    {words.map((word, index) => (
                        <span key={`${word}-${index}`}>
                            <span
                                ref={(element) => {
                                    wordRefs.current[index] = element;
                                }}
                                className="inline-block"
                                style={{ clipPath: HIDDEN_CLIP }}
                            >
                                {word}
                            </span>
                            {index < words.length - 1 && " "}
                        </span>
                    ))}
                </span>
            </h1>

            <div className="relative max-w-xl mb-6">
                <p className="relative z-10 text-base sm:text-lg text-muted-foreground leading-relaxed">{bio}</p>
                <div
                    ref={circleBoxRef}
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-y-3 -inset-x-3 sm:-inset-x-5"
                >
                    {circleSize && (
                        <svg
                            width={circleSize.width}
                            height={circleSize.height}
                            viewBox={`0 0 ${circleSize.width} ${circleSize.height}`}
                            overflow="visible"
                            className="absolute inset-0"
                        >
                            <motion.path
                                ref={circlePathRef}
                                d={circlePath(circleSize)}
                                fill="none"
                                stroke="#007AFF"
                                strokeWidth={3}
                                strokeLinecap="round"
                                style={{ pathLength: circleProgress, opacity: circleOpacity }}
                            />
                        </svg>
                    )}
                </div>
            </div>

            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-20"
                style={{ x: pencilX, y: pencilY, opacity: pencilOpacity }}
            >
                <Pencil className="absolute bottom-0 left-0 w-12 h-12 sm:w-14 sm:h-14" />
            </motion.div>
        </div>
    );
}
