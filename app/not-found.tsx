import { type Metadata } from "next";
import { type ReactElement } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { neoButton } from "@/components/shared/neo-button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Page Not Found",
    robots: { index: false },
};

export default function NotFound(): ReactElement {
    return (
        <section className="container mx-auto px-4 py-24 max-w-3xl text-center">
            <SectionHeading
                level="page"
                eyebrow="404"
                title="Page Not Found"
                subtitle="The page you are looking for does not exist or has been moved."
            />
            <Link href="/" className={cn(neoButton(), "mt-8 px-8 py-4 text-sm md:text-base")}>
                Back To Home
            </Link>
        </section>
    );
}
