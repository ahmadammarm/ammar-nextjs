import { type ReactElement } from "react";
import Image from "next/image";
import { tech } from "@/constants/tech";
import { cn } from "@/lib/utils";
import { type TechId, type TechInfo } from "@/types/tech";

type TechIconProps = {
    id: TechId;
    /** "badge": small square on cards. "tile": bordered chip in timelines. "labeled": badge plus name. */
    variant?: "badge" | "tile" | "labeled";
};

export function TechIcon({ id, variant = "badge" }: TechIconProps): ReactElement {
    const { name, icon, needsLightBackground }: TechInfo = tech[id];

    const badge = (
        <div
            className={cn(
                "w-7 h-7 p-1 flex items-center justify-center border border-black dark:border-white neo-shadow-xs",
                needsLightBackground ? "bg-white" : "bg-background"
            )}
            title={name}
        >
            <Image src={icon} alt={name} width={20} height={20} className="w-full h-full object-contain" />
        </div>
    );

    if (variant === "tile") {
        return (
            <div
                className="flex items-center justify-center p-1.5 bg-muted/50 neo-border neo-shadow-sm"
                title={name}
            >
                <Image src={icon} alt={name} width={20} height={20} className="w-5 h-5 object-contain" />
            </div>
        );
    }

    if (variant === "labeled") {
        return (
            <div className="flex items-center gap-3 p-3 bg-background neo-border neo-press-sm cursor-default">
                {badge}
                <span className="font-black text-xs uppercase tracking-wider text-foreground line-clamp-1">
                    {name}
                </span>
            </div>
        );
    }

    return badge;
}
