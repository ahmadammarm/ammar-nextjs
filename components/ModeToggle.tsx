"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
        const isDark = resolvedTheme === "dark";
        const nextTheme = isDark ? "light" : "dark";

        // Fallback for browsers without View Transitions API or if user prefers reduced motion
        if (
            typeof document === "undefined" ||
            !("startViewTransition" in document) ||
            typeof document.startViewTransition !== "function" ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            setTheme(nextTheme);
            return;
        }

        // Calculate ripple origin from click coordinates or button center
        let x = event.clientX;
        let y = event.clientY;

        if ((!x && !y) || (x === 0 && y === 0)) {
            const rect = buttonRef.current?.getBoundingClientRect();
            if (rect) {
                x = rect.left + rect.width / 2;
                y = rect.top + rect.height / 2;
            } else {
                x = window.innerWidth / 2;
                y = window.innerHeight / 2;
            }
        }

        // Calculate radius to the furthest corner of the viewport
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        // Execute View Transition with circular clip-path reveal
        const transition = document.startViewTransition(() => {
            flushSync(() => {
                setTheme(nextTheme);
            });
        });

        transition.ready
            .then(() => {
                const clipPath = [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`,
                ];

                document.documentElement.animate(
                    {
                        clipPath,
                    },
                    {
                        duration: 500,
                        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                        pseudoElement: "::view-transition-new(root)",
                    }
                );
            })
            .catch(() => {
                // Ignore rejection if transition is interrupted
            });
    };

    if (!mounted) {
        return (
            <button
                type="button"
                aria-label="Toggle theme"
                className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border-2 border-black dark:border-white bg-background text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
            >
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
            title={resolvedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="group relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center p-0 border-2 border-black dark:border-white bg-background text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] hover:bg-muted transition-all cursor-pointer"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0 group-hover:rotate-45" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100 group-hover:-rotate-12" />
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
