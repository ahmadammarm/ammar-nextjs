import { type ReactElement } from "react";
import { AvailabilityCard } from "@/components/contact/AvailabilityCard";
import { ContactChannelCard } from "@/components/contact/ContactChannelCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Highlight, SectionHeading } from "@/components/shared/SectionHeading";
import { WindowFrame } from "@/components/shared/WindowFrame";
import { contactChannels } from "@/constants/contact";

export function ContactSection(): ReactElement {
    return (
        <div className="w-full min-h-screen py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <Reveal trigger="mount" preset="fadeDown" className="mb-12 md:mb-16">
                    <SectionHeading
                        level="page"
                        eyebrow="Communication Protocol"
                        title={
                            <>
                                Let&apos;s Start a <Highlight>Conversation</Highlight>
                            </>
                        }
                        subtitle="Have a project inquiry, collaboration proposal, or technical question? Reach out directly via the direct channels or send a transmission through the form below."
                    />
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <Reveal trigger="mount" preset="slideLeft" delay={0.1} className="lg:col-span-5 space-y-6">
                        <AvailabilityCard />

                        <div className="space-y-4">
                            <Eyebrow variant="compact">Direct Channels</Eyebrow>
                            {contactChannels.map((channel) => (
                                <ContactChannelCard key={channel.name} channel={channel} />
                            ))}
                        </div>

                        <div className="bg-background neo-border neo-shadow p-5">
                            <span className="text-xs font-black uppercase tracking-wider text-muted-foreground block mb-3">
                                Social Networks &amp; Code Repositories
                            </span>
                            <SocialLinks variant="card" />
                        </div>
                    </Reveal>

                    <Reveal trigger="mount" preset="slideRight" delay={0.2} className="lg:col-span-7">
                        <WindowFrame
                            title="DISPATCH_STATION_v2.EXE"
                            className="p-4 sm:p-6 md:p-8"
                            barClassName="pb-4 mb-6"
                        >
                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground mb-2">
                                    Send Direct Transmission
                                </h2>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Fill in your project brief or contact details. All incoming dispatches are forwarded
                                    directly to my primary inbox.
                                </p>
                            </div>
                            <ContactForm />
                        </WindowFrame>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
