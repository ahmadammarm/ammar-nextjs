import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Ahmad Ammar - Fullstack & AI Developer",
    description: "Professional freelance web development and AI integration services. High-performance Next.js apps and intelligent AI solutions for your business.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
