import { type Metadata } from "next";
import { type ReactElement } from "react";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { portfolio } from "@/constants/portfolio";
import { SITE } from "@/constants/site";
import { tech } from "@/constants/tech";
import { getProjectBySlug } from "@/lib/portfolio";
import { absoluteUrl, breadcrumbSchema, projectSchema } from "@/lib/seo";

type PageProps = {
    params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams(): PageProps["params"][] {
    return portfolio.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        return { title: `Project Not Found | ${SITE.shortAuthor}` };
    }

    const title = `${project.name} | Projects`;
    const url = absoluteUrl(`/portfolio/${project.slug}`);
    const cover = project.images[0];

    return {
        title,
        description: project.description,
        keywords: [
            project.name,
            "ahmad ammar portfolio",
            "software project",
            "web application",
            SITE.author,
            ...project.technologies.map((id) => tech[id].name),
        ],
        openGraph: {
            title,
            description: project.description,
            url,
            images: [{ url: cover, width: SITE.ogImage.width, height: SITE.ogImage.height, alt: project.name }],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: project.description,
            images: [cover],
        },
        alternates: {
            canonical: url,
        },
    };
}

export default function ProjectDetailPage({ params }: PageProps): ReactElement {
    const project = getProjectBySlug(params.slug);

    if (!project) notFound();

    return (
        <>
            <JsonLd
                schemas={[
                    projectSchema(project),
                    breadcrumbSchema([
                        { name: "Home", path: "" },
                        { name: "Portfolio", path: "/portfolio" },
                        { name: project.name, path: `/portfolio/${project.slug}` },
                    ]),
                ]}
            />
            <ProjectDetail project={project} />
        </>
    );
}
