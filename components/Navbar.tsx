'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './ModeToggle';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        document.body.style.paddingTop = '64px'
        return () => {
            document.body.style.paddingTop = '0'
        }
    }, [])

    return (
        <nav className="bg-background shadow-md fixed top-0 left-0 right-0 z-50 dark:border-b dark:border-slate-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-4xl font-bold text-teal-500">
                            Ammar
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-4 py-2 rounded-md text-lg font-medium ${pathname === item.href
                                            ? 'text-teal-500'
                                            : 'text-foreground'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <ModeToggle />
                        </div>
                    </div>
                    <div className="md:hidden">
                        <ModeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="ml-3"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden fixed top-16 left-0 right-0 bg-background shadow-md mt-8">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === item.href
                                        ? 'bg-primary text-primary-foreground'
                                        : 'text-foreground'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

