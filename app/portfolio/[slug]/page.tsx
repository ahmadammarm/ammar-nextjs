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

type RouteParams = {
    slug: string;
};

type PageProps = {
    params: Promise<RouteParams>;
};

export const dynamicParams = false;

export function generateStaticParams(): RouteParams[] {
    return portfolio.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    const socialTitle = `${project.name} | Projects`;
    const url = absoluteUrl(`/portfolio/${project.slug}`);
    const cover = project.images[0];

    return {
        title: project.name,
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
            title: socialTitle,
            description: project.description,
            url,
            images: [{ url: cover, width: SITE.ogImage.width, height: SITE.ogImage.height, alt: project.name }],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: socialTitle,
            description: project.description,
            images: [cover],
        },
        alternates: {
            canonical: url,
        },
    };
}

export default async function ProjectDetailPage({ params }: PageProps): Promise<ReactElement> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

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
