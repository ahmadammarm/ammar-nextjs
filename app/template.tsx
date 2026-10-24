import { type ReactElement, type ReactNode } from "react";

/**
 * Fades each page in on navigation. Pure CSS so the page is visible from first paint
 * instead of staying at opacity 0 until framer-motion hydrates.
 */
export default function Template({ children }: { children: ReactNode }): ReactElement {
    return <div className="animate-in fade-in slide-in-from-bottom-5 duration-500 ease-out">{children}</div>;
}
