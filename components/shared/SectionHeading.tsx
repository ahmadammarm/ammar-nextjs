import { type ReactElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow, type EyebrowVariant } from "@/components/shared/Eyebrow";

type SectionHeadingProps = {
    eyebrow: string;
    eyebrowVariant?: EyebrowVariant;
    title: ReactNode;
    subtitle?: ReactNode;
    /** "page" renders the larger h1 used at the top of a route. */
    level?: "page" | "section";
    align?: "center" | "left";
    className?: string;
};

const titleClasses = {
    page: "text-4xl sm:text-5xl md:text-6xl leading-[1.05]",
    section: "text-3xl sm:text-4xl md:text-5xl",
} as const;

const subtitleClasses = {
    page: "text-base sm:text-lg mt-4 leading-relaxed",
    section: "text-base md:text-lg mt-3",
} as const;

export function SectionHeading({
    eyebrow,
    eyebrowVariant = "default",
    title,
    subtitle,
    level = "section",
    align = "center",
    className,
}: SectionHeadingProps): ReactElement {
    const Heading = level === "page" ? "h1" : "h2";

    return (
        <div className={cn(align === "center" && "text-center max-w-3xl mx-auto", className)}>
            <Eyebrow variant={eyebrowVariant} className="mb-4">
                {eyebrow}
            </Eyebrow>
            <Heading className={cn("font-black uppercase tracking-tight text-foreground", titleClasses[level])}>
                {title}
            </Heading>
            {subtitle && <p className={cn("text-muted-foreground", subtitleClasses[level])}>{subtitle}</p>}
        </div>
    );
}

/** Brand-blue emphasis inside a heading. */
export function Highlight({ children }: { children: ReactNode }): ReactElement {
    return <span className="text-brand-blue">{children}</span>;
}
