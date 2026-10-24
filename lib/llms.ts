import { EMAIL } from "@/constants/contact";
import { portfolio } from "@/constants/portfolio";
import { profile } from "@/constants/profile";
import { services } from "@/constants/services";
import { SITE } from "@/constants/site";
import { absoluteUrl } from "@/lib/seo";

const link = (name: string, path: string, note: string): string => `- [${name}](${absoluteUrl(path)}): ${note}`;

/** Builds the llms.txt Markdown (llmstxt.org format) from the same constants that render the site. */
export function buildLlmsTxt(): string {
    const pages = [
        link("Home", "", "Introduction, tech stack, and featured projects"),
        link("About", "/about", "Background, experience, education, and skills"),
        link("Services", "/services", services.map((service) => service.title).join(", ")),
        link("Portfolio", "/portfolio", "All projects with filters by category"),
        link("Contact", "/contact", "Project inquiries and collaboration"),
    ];

    const projects = portfolio.map((project) => link(project.name, `/portfolio/${project.slug}`, project.description));

    return [
        `# ${profile.name}`,
        `> ${SITE.description}`,
        `${profile.role}, based in ${profile.city}, ${profile.country}.`,
        ["## Pages", ...pages].join("\n"),
        ["## Projects", ...projects].join("\n"),
        ["## Contact", `- Email: ${EMAIL}`].join("\n"),
    ].join("\n\n") + "\n";
}
