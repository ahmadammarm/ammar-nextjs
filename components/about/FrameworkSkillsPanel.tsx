"use client";

import { type ReactElement, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SkillCard } from "@/components/about/SkillCard";
import { NeoTabs } from "@/components/shared/NeoTabs";
import { skillGroups } from "@/constants/skills";

type FrameworkTab = "frontend" | "backend";

const tabs: readonly { value: FrameworkTab; label: string; description: string }[] = [
    {
        value: "frontend",
        label: "Frontend",
        description: "Client-side libraries, frameworks, and responsive UI engineering",
    },
    {
        value: "backend",
        label: "Backend",
        description: "Server-side runtimes, APIs, databases, and backend services",
    },
];

export function FrameworkSkillsPanel(): ReactElement {
    const [activeTab, setActiveTab] = useState<FrameworkTab>("frontend");
    const activeDescription = tabs.find((tab) => tab.value === activeTab)?.description;

    return (
        <div className="bg-background neo-border neo-shadow p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b-2 border-black dark:border-white">
                <div>
                    <h3 className="text-xl md:text-2xl font-black text-foreground">Frameworks &amp; Languages</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{activeDescription}</p>
                </div>
                <NeoTabs
                    tabs={tabs}
                    value={activeTab}
                    onChange={setActiveTab}
                    className="items-center"
                    tabClassName="text-xs md:text-sm"
                />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
                >
                    {skillGroups[activeTab].map((id, index) => (
                        <SkillCard key={id} id={id} index={index} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
