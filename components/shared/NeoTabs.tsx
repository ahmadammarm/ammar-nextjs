"use client";

import { type ReactElement } from "react";
import { cn } from "@/lib/utils";

type Tab<T extends string> = {
    value: T;
    label: string;
};

type NeoTabsProps<T extends string> = {
    tabs: readonly Tab<T>[];
    value: T;
    onChange: (value: T) => void;
    className?: string;
    tabClassName?: string;
};

/** Push-down toggle buttons used for the portfolio filters and skills tabs. */
export function NeoTabs<T extends string>({
    tabs,
    value,
    onChange,
    className,
    tabClassName,
}: NeoTabsProps<T>): ReactElement {
    return (
        <div className={cn("flex flex-wrap gap-3", className)}>
            {tabs.map((tab) => {
                const isActive = tab.value === value;
                return (
                    <button
                        key={tab.value}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => onChange(tab.value)}
                        className={cn(
                            "px-5 py-2.5 font-black uppercase tracking-wider neo-border flex items-center gap-2 cursor-pointer",
                            isActive
                                ? "bg-brand-blue text-black neo-pressed transition-all duration-200"
                                : "bg-background text-foreground neo-press",
                            tabClassName
                        )}
                    >
                        <span
                            className={cn(
                                "w-2 h-2 border border-black dark:border-white",
                                isActive ? "bg-black" : "bg-muted-foreground"
                            )}
                        />
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}
