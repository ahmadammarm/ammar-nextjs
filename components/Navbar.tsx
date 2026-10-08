'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ModeToggle } from './ModeToggle';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActivePath = (path: string) => {
        if (path === '/portfolio') {
            return pathname === path || pathname.startsWith('/portfolio/');
        }
        return pathname === path;
    };

    useEffect(() => {
        document.body.style.paddingTop = '80px';
        return () => {
            document.body.style.paddingTop = '0';
        };
    }, []);

    return (
        <header className="bg-background border-b-2 border-black dark:border-white fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand Logo */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground hover:text-brand-blue transition-colors"
                        >
                            Musyaffa<span className="text-brand-blue">.</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 text-sm font-black uppercase tracking-wider border-2 transition-all duration-150 ${
                                    isActivePath(item.href)
                                        ? 'bg-brand-blue text-black border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] translate-x-[1px] translate-y-[1px]'
                                        : 'bg-background text-foreground border-transparent hover:border-black dark:hover:border-white hover:bg-muted'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pl-2">
                            <ModeToggle />
                        </div>
                    </div>

                    {/* Mobile Navigation Trigger */}
                    <div className="md:hidden flex items-center gap-2">
                        <ModeToggle />
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-none bg-background text-foreground hover:bg-muted"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-background border-b-2 border-black dark:border-white px-4 pt-3 pb-5 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 text-sm font-black uppercase tracking-wider border-2 transition-all ${
                                isActivePath(item.href)
                                    ? 'bg-brand-blue text-black border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                                    : 'bg-background text-foreground border-black dark:border-white hover:bg-muted'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
