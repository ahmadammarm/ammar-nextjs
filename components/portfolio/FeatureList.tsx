import { type ReactElement } from "react";

export function FeatureList({ features }: { features: string[] }): ReactElement {
    if (features.length === 0) {
        return (
            <p className="text-sm text-muted-foreground">
                Detailed feature list is available in the live demonstration and source repository.
            </p>
        );
    }

    return (
        <ol className="space-y-4">
            {features.map((feature, index) => (
                <li
                    key={feature}
                    className="bg-background neo-border neo-press p-5 flex items-start gap-4 cursor-default"
                >
                    <span className="w-8 h-8 flex-shrink-0 bg-brand-blue text-black border-2 border-black font-black text-xs flex items-center justify-center shadow-neo-xs">
                        {index + 1}
                    </span>
                    <p className="text-sm md:text-base font-bold text-foreground leading-relaxed">{feature}</p>
                </li>
            ))}
        </ol>
    );
}
