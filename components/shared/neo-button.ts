import { cva, type VariantProps } from "class-variance-authority";

/** Shared look for the site's chunky call-to-action links and buttons. Add padding/text size per use. */
export const neoButton = cva(
    "neo-border neo-press inline-flex items-center gap-2 font-black uppercase tracking-wider cursor-pointer",
    {
        variants: {
            tone: {
                primary: "bg-brand-blue text-black",
                secondary: "bg-background text-foreground",
            },
        },
        defaultVariants: {
            tone: "primary",
        },
    }
);

export type NeoButtonVariants = VariantProps<typeof neoButton>;
