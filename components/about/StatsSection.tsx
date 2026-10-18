import { type ReactElement } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { StatCard } from "@/components/shared/StatCard";
import { stats } from "@/constants/stats";
import { staggerDelay } from "@/lib/motion";

export function StatsSection(): ReactElement {
    return (
        <section className="py-12 md:py-16 bg-background relative overflow-hidden border-y-2 border-black dark:border-white">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <Reveal key={stat.label} duration={0.4} delay={staggerDelay(index)} className="relative group">
                            <StatCard stat={stat} variant="highlight" />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
