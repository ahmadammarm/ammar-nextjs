import { type ReactElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type EyebrowVariant = "default" | "raised" | "compact";

const variantClasses: Record<EyebrowVariant, string> = {
    default: "px-3.5 py-1 text-xs md:text-sm font-black neo-shadow-sm",
    raised: "px-4 py-1.5 text-xs md:text-sm font-bold neo-shadow",
    compact: "px-3 py-1 text-xs font-black neo-shadow-sm",
};

type EyebrowProps = {
    children: ReactNode;
    variant?: EyebrowVariant;
    className?: string;
};

/** Small blue label stamped above headings. */
export function Eyebrow({ children, variant = "default", className }: EyebrowProps): ReactElement {
    return (
        <div
            className={cn(
                "inline-block w-fit bg-brand-blue text-black uppercase tracking-wider neo-border",
                variantClasses[variant],
                className
            )}
        >
            {children}
        </div>
    );
}
