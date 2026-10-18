export type { TechId } from "@/constants/tech";

export type TechInfo = {
    name: string;
    icon: string;
    /** Dark logos (e.g. Next.js) need a white tile to stay visible in dark mode. */
    needsLightBackground?: boolean;
};
