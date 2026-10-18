import { type ReactElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type WindowFrameProps = {
    children: ReactNode;
    title?: string;
    className?: string;
    barClassName?: string;
};

/** Neobrutalist "app window" with traffic-light dots and an optional title. */
export function WindowFrame({ children, title, className, barClassName }: WindowFrameProps): ReactElement {
    return (
        <div className={cn("relative bg-background neo-border neo-shadow-lg", className)}>
            <div className={cn("flex items-center justify-between pb-3 mb-3 border-b-2 border-black dark:border-white", barClassName)}>
                <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-red-500 border border-black dark:border-white inline-block" />
                    <span className="w-3 h-3 bg-yellow-400 border border-black dark:border-white inline-block" />
                    <span className="w-3 h-3 bg-emerald-500 border border-black dark:border-white inline-block" />
                </div>
                {title && (
                    <span className="font-mono text-xs font-black uppercase tracking-widest text-muted-foreground">
                        {title}
                    </span>
                )}
            </div>
            {children}
        </div>
    );
}
