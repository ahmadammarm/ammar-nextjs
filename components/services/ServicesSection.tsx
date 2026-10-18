import { type ReactElement } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/constants/services";
import { staggerDelay } from "@/lib/motion";

export function ServicesSection(): ReactElement {
    return (
        <div className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto mt-16">
            <Reveal trigger="mount" className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Services</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    I build intelligent, high-performance web solutions tailored to your business needs.
                </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <Reveal
                        key={service.title}
                        trigger="mount"
                        preset="scaleIn"
                        delay={staggerDelay(index)}
                        className="h-full"
                    >
                        <ServiceCard service={service} />
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
