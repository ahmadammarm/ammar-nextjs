import { type ReactElement } from "react";
import { cn } from "@/lib/utils";
import { type Stat } from "@/types/stat";

type StatCardProps = {
    stat: Stat;
    /** "compact" is the home page grid; "highlight" is the About strip, which colours featured stats. */
    variant: "compact" | "highlight";
};

export function StatCard({ stat, variant }: StatCardProps): ReactElement {
    if (variant === "compact") {
        return (
            <div className="bg-background neo-border neo-press p-5 md:p-6 flex flex-col justify-between cursor-default">
                <span className="text-4xl md:text-5xl font-black text-foreground tracking-tight">{stat.value}</span>
                <div className="mt-3 pt-3 border-t-2 border-black/10 dark:border-white/10">
                    <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-foreground">{stat.label}</h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{stat.detail}</p>
                </div>
            </div>
        );
    }

    const featured = stat.featured === true;

    return (
        <div
            className={cn(
                "h-full p-6 md:p-8 neo-border neo-press flex flex-col justify-between cursor-default",
                featured ? "bg-brand-blue text-black" : "bg-background text-foreground"
            )}
        >
            <div>
                <p className={cn("text-4xl sm:text-5xl font-black tracking-tight mb-2", featured ? "text-black" : "text-brand-blue")}>
                    {stat.value}
                </p>
                <h3 className={cn("text-lg font-bold", featured ? "text-black" : "text-foreground")}>{stat.label}</h3>
            </div>
            <p
                className={cn(
                    "text-xs sm:text-sm mt-3 pt-3 border-t-2 border-black dark:border-white",
                    featured ? "text-black font-semibold" : "text-muted-foreground"
                )}
            >
                {stat.detail}
            </p>
        </div>
    );
}
