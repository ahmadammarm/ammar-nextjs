import { type ReactElement } from "react";
import Link from "next/link";
import { socials } from "@/constants/socials";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
    /** "footer" sits on the blue footer; "card" sits on the page background. */
    variant: "footer" | "card";
};

const variantClasses: Record<SocialLinksProps["variant"], string> = {
    footer: "w-10 h-10 bg-white text-black border-2 border-black shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-sm-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-sm-active transition-all duration-200",
    card: "w-11 h-11 bg-background text-foreground neo-border neo-press-sm",
};

export function SocialLinks({ variant }: SocialLinksProps): ReactElement {
    return (
        <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
                <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className={cn("flex items-center justify-center cursor-pointer", variantClasses[variant])}
                >
                    <Icon className="w-5 h-5" />
                </Link>
            ))}
        </div>
    );
}
