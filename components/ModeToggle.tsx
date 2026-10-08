"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()

    return (
        <Button
            onClick={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }}
            aria-label="Toggle theme"
            className="relative rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center p-0 border-2 border-black dark:border-white shadow-neo"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
