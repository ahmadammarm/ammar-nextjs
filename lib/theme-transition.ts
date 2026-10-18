type Point = {
    x: number;
    y: number;
};

const supportsViewTransition = (): boolean =>
    typeof document !== "undefined" &&
    typeof document.startViewTransition === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Applies a theme change with a circular reveal expanding from `origin`.
 * Falls back to an instant change when the View Transitions API is unavailable
 * or the user prefers reduced motion.
 */
export function runCircularTransition(origin: Point, applyChange: () => void): void {
    if (!supportsViewTransition()) {
        applyChange();
        return;
    }

    const { x, y } = origin;
    const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = document.startViewTransition(applyChange);

    transition.ready
        .then(() => {
            document.documentElement.animate(
                {
                    clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
                },
                {
                    duration: 500,
                    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        })
        .catch(() => {
            // The transition was interrupted; the theme has already been applied.
        });
}
