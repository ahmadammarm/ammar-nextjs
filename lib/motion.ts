import { type Variant } from "framer-motion";

export type MotionPreset = "fadeUp" | "fadeUpSm" | "fadeDown" | "slideLeft" | "slideRight" | "scaleIn";

type PresetFrames = {
    hidden: Variant;
    visible: Variant;
};

/** Entry animations reused by <Reveal>. Values match the site's original hand-written variants. */
export const motionPresets: Record<MotionPreset, PresetFrames> = {
    fadeUp: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
    fadeUpSm: { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } },
    fadeDown: { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } },
    slideLeft: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
    slideRight: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
    scaleIn: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
};

/** Delay for the nth item of a staggered list. */
export const staggerDelay = (index: number, step = 0.1): number => index * step;
