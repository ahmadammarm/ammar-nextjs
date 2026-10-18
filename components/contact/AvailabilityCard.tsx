import { type ReactElement } from "react";
import { Clock, type LucideIcon, MapPin } from "lucide-react";
import { availability } from "@/constants/contact";
import { type AvailabilityItem } from "@/types/contact";

const icons: Record<AvailabilityItem["icon"], LucideIcon> = {
    location: MapPin,
    clock: Clock,
};

export function AvailabilityCard(): ReactElement {
    return (
        <div className="bg-background neo-border neo-shadow p-5 md:p-6">
            <div className="flex items-center gap-2.5 pb-3 border-b-2 border-black dark:border-white mb-4">
                <span className="w-3 h-3 bg-emerald-500 border border-black dark:border-white animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider text-foreground">
                    Current Availability: Open
                </span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm font-medium">
                {availability.map((item) => {
                    const Icon = icons[item.icon];
                    return (
                        <div key={item.label} className="flex items-start gap-3">
                            <Icon className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-foreground">{item.label}</p>
                                <p className="text-muted-foreground">{item.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
