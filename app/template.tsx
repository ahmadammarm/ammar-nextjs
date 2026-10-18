import { type ReactElement, type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/** Fades each page in on navigation. */
export default function Template({ children }: { children: ReactNode }): ReactElement {
    return (
        <Reveal trigger="mount">
            {children}
        </Reveal>
    );
}
