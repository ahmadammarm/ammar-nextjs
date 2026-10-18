import { type ReactElement } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Highlight, SectionHeading } from "@/components/shared/SectionHeading";
import { Timeline, TimelineItem } from "@/components/shared/Timeline";
import { education } from "@/constants/education";
import { type Education } from "@/types/education";

function EducationCard({ entry }: { entry: Education }): ReactElement {
    return (
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 bg-white p-2 neo-border neo-shadow flex items-center justify-center">
                <Image
                    src={entry.logo}
                    alt={`${entry.institution} logo`}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-black text-foreground">{entry.institution}</h3>
                        <p className="text-base sm:text-lg font-bold text-brand-blue mt-0.5">{entry.major}</p>
                        <p className="flex items-center gap-1.5 text-sm text-muted-foreground font-semibold mt-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{entry.location}</span>
                        </p>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 bg-brand-blue text-black font-bold text-xs neo-border neo-shadow-sm">
                        {entry.period}
                    </span>
                </div>
            </div>
        </div>
    );
}

export function EducationSection(): ReactElement {
    return (
        <section
            id="educations"
            className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-muted/20 border-t-2 border-black dark:border-white"
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                <Reveal preset="fadeDown" className="mb-12 md:mb-16">
                    <SectionHeading
                        eyebrow="Education"
                        eyebrowVariant="raised"
                        title={
                            <>
                                Academic <Highlight>Background</Highlight>
                            </>
                        }
                        subtitle="My formal academic education and informatics degree"
                    />
                </Reveal>

                <Timeline>
                    {education.map((entry, index) => (
                        <TimelineItem key={entry.institution} index={index}>
                            <EducationCard entry={entry} />
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
}
