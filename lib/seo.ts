import { type Metadata } from "next";
import { SITE } from "@/constants/site";
import { EMAIL } from "@/constants/contact";
import { PORTFOLIO_CATEGORIES } from "@/constants/portfolio";
import { profile } from "@/constants/profile";
import { socials } from "@/constants/socials";
import { tech } from "@/constants/tech";
import { type Portfolio } from "@/types/portfolio";
import { type BreadcrumbItem, type JsonLdSchema } from "@/types/seo";

export const absoluteUrl = (path = ""): string => `${SITE.url}${path}`;

type PageMetadataOptions = {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    /** Open Graph overrides; default to the page title/description. */
    ogTitle?: string;
    ogDescription?: string;
    ogImageAlt?: string;
};

export function createPageMetadata({
    title,
    description,
    path,
    keywords,
    ogTitle = `${title} | ${SITE.author}`,
    ogDescription = description,
    ogImageAlt = SITE.shortAuthor,
}: PageMetadataOptions): Metadata {
    return {
        title,
        description,
        keywords,
        openGraph: {
            title: ogTitle,
            description: ogDescription,
            url: absoluteUrl(path),
            images: [{ ...SITE.ogImage, alt: ogImageAlt }],
        },
        alternates: {
            canonical: absoluteUrl(path),
        },
    };
}

export function personSchema(): JsonLdSchema {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        description: profile.aboutBio,
        url: SITE.url,
        image: absoluteUrl(SITE.ogImage.url),
        jobTitle: ["Fullstack Developer", "Software Engineer", "AI Enthusiast"],
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Universitas Negeri Malang",
            url: "https://um.ac.id",
        },
        sameAs: socials.map((social) => social.href),
        email: `mailto:${EMAIL}`,
        knowsAbout: [
            "Fullstack Development",
            "Frontend Development",
            "Node.js",
            "Laravel",
            "Go",
            "PostgreSQL",
            "RESTful API",
            "AI Integration",
        ],
    };
}

export function websiteSchema(): JsonLdSchema {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE.name,
        alternateName: profile.name,
        url: SITE.url,
        description: profile.aboutBio,
        author: {
            "@type": "Person",
            name: profile.name,
        },
    };
}

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLdSchema {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    };
}

export function projectSchema(project: Portfolio): JsonLdSchema {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.name,
        description: project.description,
        applicationCategory: PORTFOLIO_CATEGORIES[project.category].schemaCategory,
        operatingSystem: "Web",
        author: {
            "@type": "Person",
            name: profile.name,
        },
        screenshot: absoluteUrl(project.images[0]),
        softwareRequirements: project.technologies.map((id) => tech[id].name).join(", "),
    };
}
