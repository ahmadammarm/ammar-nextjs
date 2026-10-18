"use client";

import { type ComponentProps, type ReactElement } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>): ReactElement {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
