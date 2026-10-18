import { type TechId } from "@/types/tech";

export type SkillGroupId = "frontend" | "backend" | "ai" | "tools";

export type SkillGroups = Record<SkillGroupId, TechId[]>;
