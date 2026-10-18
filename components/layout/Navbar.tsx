"use client";

import { type ReactElement, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/layout/ModeToggle";
import { NavLink } from "@/components/layout/NavLink";
import { navItems } from "@/constants/navigation";
import { type NavItem } from "@/types/navigation";

const isActivePath = (pathname: string, item: NavItem): boolean =>
    pathname === item.href || (item.matchNested === true && pathname.startsWith(`${item.href}/`));

export function Navbar(): ReactElement {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-background border-b-2 border-black dark:border-white fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link
                        href="/"
                        className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground hover:text-brand-blue transition-colors"
                    >
                        Musyaffa<span className="text-brand-blue">.</span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-3">
                        {navItems.map((item) => (
                            <NavLink key={item.href} item={item} isActive={isActivePath(pathname, item)} variant="desktop" />
                        ))}
                        <div className="pl-2">
                            <ModeToggle />
                        </div>
                    </nav>

                    <div className="md:hidden flex items-center gap-2">
                        <ModeToggle />
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setIsOpen((open) => !open)}
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                            className="neo-border neo-press-sm rounded-none bg-background text-foreground"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <nav className="md:hidden bg-background border-b-2 border-black dark:border-white px-4 pt-3 pb-5 space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.href}
                            item={item}
                            isActive={isActivePath(pathname, item)}
                            variant="mobile"
                            onNavigate={() => setIsOpen(false)}
                        />
                    ))}
                </nav>
            )}
        </header>
    );
}
