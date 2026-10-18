import { type ReactElement } from "react";
import { FrameworkSkillsPanel } from "@/components/about/FrameworkSkillsPanel";
import { SkillPanel } from "@/components/about/SkillPanel";
import { Reveal } from "@/components/motion/Reveal";
import { Highlight, SectionHeading } from "@/components/shared/SectionHeading";
import { skillGroups } from "@/constants/skills";

export function SkillsSection(): ReactElement {
    return (
        <section id="skills" className="w-full py-16 md:py-20 lg:py-24 border-t-2 border-black dark:border-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <Reveal preset="fadeDown" className="mb-12 md:mb-16">
                    <SectionHeading
                        eyebrow="Capabilities"
                        eyebrowVariant="raised"
                        title={
                            <>
                                Skills &amp; <Highlight>Technologies</Highlight>
                            </>
                        }
                        subtitle="The programming languages, frameworks, and developer tools I work with"
                    />
                </Reveal>

                <div className="space-y-10 md:space-y-12">
                    <FrameworkSkillsPanel />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <SkillPanel
                            title="AI & Machine Learning"
                            description="Machine learning frameworks, neural networks, LLM APIs, and intelligent data processing workflows."
                            skills={skillGroups.ai}
                        />
                        <SkillPanel
                            title="Tools & Workflow"
                            description="Version control, development environments, and deployment tools used throughout project lifecycles."
                            skills={skillGroups.tools}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
