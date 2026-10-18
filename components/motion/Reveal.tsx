"use client";

import { type ReactElement, type ReactNode } from "react";
import { motion } from "framer-motion";
import { type MotionPreset, motionPresets } from "@/lib/motion";

type RevealProps = {
    children: ReactNode;
    className?: string;
    preset?: MotionPreset;
    delay?: number;
    duration?: number;
    /** "inView" animates once when scrolled into view; "mount" animates immediately. */
    trigger?: "inView" | "mount";
};

/** Client-side entry animation wrapper so the content around it can stay a Server Component. */
export function Reveal({
    children,
    className,
    preset = "fadeUp",
    delay = 0,
    duration = 0.5,
    trigger = "inView",
}: RevealProps): ReactElement {
    const animation =
        trigger === "inView" ? { whileInView: "visible", viewport: { once: true } } : { animate: "visible" };

    return (
        <motion.div
            variants={motionPresets[preset]}
            initial="hidden"
            {...animation}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
