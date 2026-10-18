import { type Metadata } from "next";
import { type ReactElement } from "react";
import { ContactSection } from "@/components/contact/ContactSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Contact",
    path: "/contact",
    description: "Get in touch with Ahmad Ammar Musyaffa for project inquiries, collaborations, and opportunities.",
    ogImageAlt: "Contact Ahmad Ammar",
    keywords: [
        "contact ahmad ammar",
        "ahmad ammar musyaffa contact",
        "hire software engineer",
        "fullstack developer contact",
    ],
});

export default function ContactPage(): ReactElement {
    return <ContactSection />;
}
