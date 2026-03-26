import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ammar | Portfolio",
    description: "Junior software engineer with passion in building backend web applications using Node.js, Laravel, and Go. Focused on backend services, RESTful APIs, and database systems, while exploring AI integration for intelligent and data-driven applications."
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}