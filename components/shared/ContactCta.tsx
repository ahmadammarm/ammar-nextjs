import { type ReactElement } from "react";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Highlight } from "@/components/shared/SectionHeading";
import { neoButton } from "@/components/shared/neo-button";
import { WHATSAPP_URL } from "@/constants/contact";
import { cn } from "@/lib/utils";

/** Full-width "Let's build it together" banner closing the home page. */
export function ContactCtaBanner(): ReactElement {
    return (
        <section className="relative w-full py-16 md:py-20 lg:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <Reveal className="bg-background neo-border neo-shadow-lg p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                    <Eyebrow className="mb-4 md:text-xs">Let&apos;s Connect</Eyebrow>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground leading-[1.1] mb-5 max-w-4xl">
                        Have A Project In Mind? <Highlight>Let&apos;s Build It Together.</Highlight>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                        Whether you need a scalable fullstack web application, custom backend APIs, database
                        architecture, or have an exciting engineering opportunity, let&apos;s discuss how we can
                        collaborate.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/contact" className={cn(neoButton(), "group px-8 py-4 text-sm md:text-base")}>
                            <Mail className="w-4 h-4" />
                            <span>Send Me A Message</span>
                            <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(neoButton({ tone: "secondary" }), "px-6 py-4 text-sm md:text-base")}
                        >
                            <MessageCircle className="w-4 h-4 text-emerald-500" />
                            <span>WhatsApp Chat</span>
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/** Compact sidebar callout used on project detail pages. */
export function ContactCtaCard(): ReactElement {
    return (
        <div className="bg-background neo-border neo-shadow-md p-6 md:p-8">
            <Eyebrow variant="compact" className="mb-3">
                Collaborate
            </Eyebrow>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-foreground mb-3">
                Need a similar application?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                I build end-to-end fullstack systems, robust APIs, and performant web interfaces tailored to your
                requirements.
            </p>
            <Link href="/contact" className={cn(neoButton(), "w-full py-3.5 px-4 text-xs justify-center")}>
                <span>Get In Touch</span>
            </Link>
        </div>
    );
}
