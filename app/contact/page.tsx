import { Metadata } from "next";
import ContactSection from "@/components/Sections/ContactSection";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Ahmad Ammar Musyaffa for project inquiries, collaborations, and opportunities."
};

export default function Page() {
    return (
        <div>
            <ContactSection />
        </div>
    )
}