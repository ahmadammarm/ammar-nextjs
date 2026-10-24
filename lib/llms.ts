import { EMAIL } from "@/constants/contact";
import { sitePages } from "@/constants/pages";
import { portfolio } from "@/constants/portfolio";
import { profile } from "@/constants/profile";
import { SITE } from "@/constants/site";
import { absoluteUrl } from "@/lib/seo";

const oneLine = (text: string): string => text.replace(/\s+/g, " ").trim();

const link = (name: string, path: string, note: string): string =>
    `- [${name}](${absoluteUrl(path)}): ${oneLine(note)}`;

/** Builds the llms.txt Markdown (llmstxt.org format) from the same constants that render the site. */
export function buildLlmsTxt(): string {
    const pages = sitePages.map((page) => link(page.label, page.path, page.summary));
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
