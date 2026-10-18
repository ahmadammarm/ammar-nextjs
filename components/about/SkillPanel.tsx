import { type ReactElement } from "react";
import { SkillCard } from "@/components/about/SkillCard";
import { type TechId } from "@/types/tech";

type SkillPanelProps = {
    title: string;
    description: string;
    skills: TechId[];
};

export function SkillPanel({ title, description, skills }: SkillPanelProps): ReactElement {
    return (
        <div className="bg-background neo-border neo-shadow p-6 md:p-8 flex flex-col justify-between">
            <div>
                <div className="mb-6 pb-4 border-b-2 border-black dark:border-white">
                    <h3 className="text-xl md:text-2xl font-black text-foreground">{title}</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">{description}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((id, index) => (
                    <SkillCard key={id} id={id} index={index} />
                ))}
            </div>
        </div>
    );
}
