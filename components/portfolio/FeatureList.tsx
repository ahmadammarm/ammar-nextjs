import { type ReactElement } from "react";

export function FeatureList({ features }: { features: string[] }): ReactElement {
    if (features.length === 0) {
        return (
            <p className="text-sm text-muted-foreground">
                Detailed feature list is available in the live demonstration and source repository.
            </p>
        );
    }

    // The 2px gap over an ink background draws the dividers, so they stay correct for any item count.
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-black dark:bg-white neo-border neo-shadow">
            {features.map((feature) => (
                <li
                    key={feature}
                    className="bg-background p-5 md:p-6 flex items-start gap-4 md:[&:nth-child(odd):last-child]:col-span-2"
                >
                    <span
                        className="mt-1.5 w-3 h-3 shrink-0 bg-brand-blue border-2 border-black dark:border-white"
                        aria-hidden="true"
                    />
                    <p className="text-sm md:text-base font-semibold text-foreground leading-relaxed">{feature}</p>
                </li>
            ))}
        </ul>
    );
}
