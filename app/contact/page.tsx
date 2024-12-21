"use client"

import Loading from "@/components/Loading";
import ContactSection from "@/components/Sections/ContactSection";
import { useEffect, useState } from "react";

export default function Page() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000);

        return () => clearTimeout(timer)
    }, []);

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <ContactSection />
        </div>
    )
}