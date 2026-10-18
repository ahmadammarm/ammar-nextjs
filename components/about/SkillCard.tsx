import { type ReactElement } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { tech } from "@/constants/tech";
import { cn } from "@/lib/utils";
import { type TechId, type TechInfo } from "@/types/tech";

type SkillCardProps = {
    id: TechId;
    index: number;
};

export function SkillCard({ id, index }: SkillCardProps): ReactElement {
    const { name, icon, needsLightBackground }: TechInfo = tech[id];

    return (
        <Reveal
            preset="fadeUpSm"
            duration={0.35}
            delay={index * 0.03}
            className="group bg-background neo-border neo-press p-4 md:p-5 flex flex-col items-center justify-center cursor-default"
        >
            <div
                className={cn(
                    "relative w-12 h-12 md:w-16 md:h-16 p-2 mb-3 flex items-center justify-center neo-border neo-shadow-sm group-hover:scale-105 transition-transform",
                    needsLightBackground ? "bg-white" : "bg-muted/40"
                )}
            >
                <Image src={icon} alt={name} width={48} height={48} className="w-full h-full object-contain" />
            </div>
            <h4 className="text-sm md:text-base font-bold text-center text-foreground group-hover:text-brand-blue transition-colors">
                {name}
            </h4>
        </Reveal>
    );
}
