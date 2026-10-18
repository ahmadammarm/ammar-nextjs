import { type ReactElement } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Highlight, SectionHeading } from "@/components/shared/SectionHeading";
import { TechIcon } from "@/components/shared/TechIcon";
import { Timeline, TimelineItem } from "@/components/shared/Timeline";
import { experiences } from "@/constants/experiences";
import { type Experience } from "@/types/experience";

function ExperienceCard({ experience }: { experience: Experience }): ReactElement {
    const { company, position, companyLogo, location, period, employmentType, workMode, highlights, techStack } =
        experience;

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5 pb-5 border-b-2 border-black dark:border-white">
                <div className="flex items-start gap-4">
                    {companyLogo && (
                        <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white p-1.5 neo-border neo-shadow flex items-center justify-center">
                            <Image
                                src={companyLogo}
                                alt={`${company} logo`}
                                width={56}
                                height={56}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    )}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-black text-foreground">{position}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm md:text-base font-semibold text-muted-foreground mt-1">
                            <span className="text-brand-blue font-bold">{company}</span>
                            {location && (
                                <>
                                    <span>·</span>
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {location}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center md:flex-col md:items-end gap-2 shrink-0">
                    <span className="font-bold text-xs md:text-sm text-muted-foreground">{period}</span>
                    <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-brand-blue text-black font-bold text-xs neo-border">
                            {employmentType}
                        </span>
                        <span className="px-2.5 py-0.5 bg-muted text-foreground font-bold text-xs neo-border">{workMode}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3 mb-5">
                {highlights.map((highlight) => (
                    <p key={highlight} className="text-sm md:text-base text-foreground/90 leading-relaxed">
                        {highlight}
                    </p>
                ))}
            </div>

            {techStack.length > 0 && (
                <div className="pt-4 border-t-2 border-black dark:border-white flex flex-wrap items-center gap-2">
                    {techStack.map((id) => (
                        <TechIcon key={id} id={id} variant="tile" />
                    ))}
                </div>
            )}
        </>
    );
}

export function ExperiencesSection(): ReactElement {
    return (
        <section id="experiences" className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                <Reveal preset="fadeDown" className="mb-12 md:mb-16">
                    <SectionHeading
                        eyebrow="Career Path"
                        eyebrowVariant="raised"
                        title={
                            <>
                                Work <Highlight>Experience</Highlight>
                            </>
                        }
                        subtitle="My professional journey working with tech companies, startups, and client projects"
                    />
                </Reveal>

                <Timeline>
                    {experiences.map((experience, index) => (
                        <TimelineItem key={`${experience.company}-${experience.period}`} index={index}>
                            <ExperienceCard experience={experience} />
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
}
