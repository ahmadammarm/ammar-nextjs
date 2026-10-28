import { type ReactElement } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Highlight, SectionHeading } from "@/components/shared/SectionHeading";
import { homeTechRows } from "@/constants/home";
import { tech } from "@/constants/tech";
import { cn } from "@/lib/utils";
import { type TechId, type TechInfo } from "@/types/tech";

type TechRowProps = {
    ids: readonly TechId[];
    reverse?: boolean;
};

function TechRow({ ids, reverse = false }: TechRowProps): ReactElement {
    // Rendered twice so the -50% marquee animation loops seamlessly.
    const items = [...ids, ...ids];

    return (
        <div className="overflow-hidden py-3 select-none">
            <div className={cn("animate-marquee", reverse && "animate-marquee-reverse")}>
                {items.map((id, index) => {
                    const { name, icon, needsLightBackground }: TechInfo = tech[id];

                    return (
                        <div
                            key={`${id}-${index}`}
                            className="mr-4 md:mr-6 flex shrink-0 items-center gap-3 px-5 py-3 bg-background neo-border neo-shadow-sm whitespace-nowrap"
                            aria-hidden={index >= ids.length}
                        >
                            <div
                                className={cn(
                                    "w-10 h-10 p-1.5 flex items-center justify-center border border-black dark:border-white",
                                    needsLightBackground ? "bg-white" : "bg-muted/50"
                                )}
                            >
                                <Image src={icon} alt="" width={28} height={28} className="w-full h-full object-contain" />
                            </div>
                            <span className="font-black text-sm md:text-base uppercase tracking-wider text-foreground">
                                {name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function TechMarquee(): ReactElement {
    return (
        <section className="w-full py-16 md:py-20 border-b-2 border-black dark:border-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <Reveal preset="fadeDown" className="mb-10 md:mb-12">
                    <SectionHeading
                        eyebrow="Tools & Technology"
                        title={
                            <>
                                Mastering <Highlight>Development</Highlight>
                            </>
                        }
                        subtitle="The languages, frameworks and infrastructure I use to take products from idea to production."
                    />
                </Reveal>
            </div>

            <div className="flex flex-col gap-2">
                {homeTechRows.map((ids, index) => (
                    <TechRow key={index} ids={ids} reverse={index % 2 === 1} />
                ))}
            </div>
        </section>
    );
}
