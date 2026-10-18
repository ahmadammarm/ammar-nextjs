import { type ReactElement } from "react";
import { Bot, Check, Cpu, Layout, type LucideIcon, MessageCircle } from "lucide-react";
import { neoButton } from "@/components/shared/neo-button";
import { whatsappLink } from "@/constants/contact";
import { cn } from "@/lib/utils";
import { type Service, type ServiceIcon } from "@/types/service";

const icons: Record<ServiceIcon, LucideIcon> = {
    layout: Layout,
    bot: Bot,
    cpu: Cpu,
};

export function ServiceCard({ service }: { service: Service }): ReactElement {
    const Icon = icons[service.icon];

    return (
        <div className="bg-background border-4 border-black dark:border-white p-8 neo-press flex flex-col h-full cursor-default">
            <div className="bg-brand-blue p-4 border-2 border-black inline-block w-fit mb-6 shadow-neo-sm">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{service.description}</p>
            <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-brand-blue" />
                        <span className="font-medium">{feature}</span>
                    </li>
                ))}
            </ul>
            <a
                href={whatsappLink(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(neoButton(), "py-4 px-6 justify-center font-bold normal-case tracking-normal")}
            >
                <MessageCircle className="w-5 h-5" />
                Book Now
            </a>
        </div>
    );
}
