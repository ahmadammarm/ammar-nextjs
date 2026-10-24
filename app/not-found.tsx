import { type Metadata } from "next";
import { type ReactElement } from "react";
import Link from "next/link";
import { neoButton } from "@/components/shared/neo-button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Page Not Found",
    robots: { index: false, follow: false },
};

export default function NotFound(): ReactElement {
    return (
        <section className="container mx-auto px-4 py-24 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-brand-blue mb-4">404</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground mb-5">
                Page Not Found
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link href="/" className={cn(neoButton(), "px-8 py-4 text-sm md:text-base")}>
                Back To Home
            </Link>
        </section>
    );
}
