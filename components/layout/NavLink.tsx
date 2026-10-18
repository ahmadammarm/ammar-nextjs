import { type ReactElement } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { type NavItem } from "@/types/navigation";

type NavLinkProps = {
    item: NavItem;
    isActive: boolean;
    variant: "desktop" | "mobile";
    onNavigate?: () => void;
};

const variantClasses = {
    desktop: {
        base: "px-4 py-2",
        idle: "border-transparent hover:border-black dark:hover:border-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo dark:hover:shadow-neo-dark active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-active dark:active:shadow-neo-active-dark",
    },
    mobile: {
        base: "block px-4 py-3",
        idle: "border-black dark:border-white neo-press",
    },
} as const;

export function NavLink({ item, isActive, variant, onNavigate }: NavLinkProps): ReactElement {
    const classes = variantClasses[variant];

    return (
        <Link
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
                "text-sm font-black uppercase tracking-wider border-2 transition-all duration-200 cursor-pointer",
                classes.base,
                isActive
                    ? "bg-brand-blue text-black border-black dark:border-white neo-pressed"
                    : cn("bg-background text-foreground", classes.idle)
            )}
        >
            {item.label}
        </Link>
    );
}
