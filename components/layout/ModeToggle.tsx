"use client";

import { type MouseEvent, type ReactElement, useRef } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { runCircularTransition } from "@/lib/theme-transition";

const buttonClass =
    "relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border-2 border-black dark:border-white bg-background text-foreground";

export function ModeToggle(): ReactElement {
    const { setTheme, resolvedTheme } = useTheme();
    const mounted = useMounted();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const isDark = resolvedTheme === "dark";

    const getRippleOrigin = (event: MouseEvent<HTMLButtonElement>): { x: number; y: number } => {
        // Keyboard activation reports (0, 0); fall back to the button centre.
        if (event.clientX !== 0 || event.clientY !== 0) {
            return { x: event.clientX, y: event.clientY };
        }
        const rect = buttonRef.current?.getBoundingClientRect();
        return rect
            ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
            : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    };

    const toggleTheme = (event: MouseEvent<HTMLButtonElement>): void => {
        const nextTheme = isDark ? "light" : "dark";
        runCircularTransition(getRippleOrigin(event), () => {
            flushSync(() => setTheme(nextTheme));
        });
    };

    if (!mounted) {
        return (
            <button type="button" aria-label="Toggle theme" className={`${buttonClass} neo-shadow-sm`}>
                <span className="w-5 h-5" />
            </button>
        );
    }

    return (
        <button
            ref={buttonRef}
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className={`group p-0 neo-press-sm cursor-pointer ${buttonClass}`}
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0 group-hover:rotate-45" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100 group-hover:-rotate-12" />
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
