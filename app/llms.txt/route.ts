import { buildLlmsTxt } from "@/lib/llms";

export const dynamic = "force-static";

export function GET(): Response {
    return new Response(buildLlmsTxt(), {
        headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
}
