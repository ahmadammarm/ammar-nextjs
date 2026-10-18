import { type ReactElement } from "react";
import { cn } from "@/lib/utils";
import { type Portfolio } from "@/types/portfolio";

// Divider classes per cell so the grid reads correctly at 2 and 4 columns.
const cellDividers = [
    "",
    "border-l-0 sm:border-l-2 pl-0 sm:pl-4",
    "border-l-0 md:border-l-2 pl-0 md:pl-4",
    "border-l-0 sm:border-l-2 pl-0 sm:pl-4",
] as const;

export function ProjectMetaGrid({ project }: { project: Portfolio }): ReactElement {
    const items = [
        { label: "Year", value: project.year },
        { label: "Role", value: project.role },
        { label: "Platform", value: project.platform },
        { label: "Technologies", value: `${project.technologies.length} Stack Tools` },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 md:p-6 bg-background neo-border neo-shadow mb-14">
            {items.map((item, index) => (
                <div
                    key={item.label}
                    className={cn("flex flex-col border-black/15 dark:border-white/15", cellDividers[index])}
                >
                    <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                        {item.label}
                    </span>
                    <span className="text-lg md:text-xl font-black text-foreground mt-1">{item.value}</span>
                </div>
            ))}
        </div>
    );
}
