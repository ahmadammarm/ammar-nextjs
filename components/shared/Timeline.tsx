import { type ReactElement, type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { staggerDelay } from "@/lib/motion";

export function Timeline({ children }: { children: ReactNode }): ReactElement {
    return (
        <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[16px] md:left-[24px] top-6 bottom-6 w-[3px] bg-black dark:bg-white" />
            <div className="space-y-8 md:space-y-12">{children}</div>
        </div>
    );
}

type TimelineItemProps = {
    index: number;
    children: ReactNode;
};

export function TimelineItem({ index, children }: TimelineItemProps): ReactElement {
    return (
        <Reveal delay={staggerDelay(index)} className="relative pl-12 md:pl-20">
            <div className="absolute left-1 md:left-3 top-7 transform -translate-y-1/2 z-20">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-brand-blue neo-border neo-shadow" />
            </div>
            <div className="bg-background neo-border neo-shadow p-6 md:p-8">{children}</div>
        </Reveal>
    );
}
