import { type ReactElement } from "react";
import { cn } from "@/lib/utils";

/**
 * Monochrome line-art pencil that follows the theme: outlines use the foreground
 * color and fills use the page background. Its graphite tip sits exactly at the
 * bottom-left corner of the 64x64 viewBox, so positioning that corner positions the tip.
 */
export function Pencil({ className }: { className?: string }): ReactElement {
    return (
        <svg
            viewBox="0 0 64 64"
            overflow="visible"
            aria-hidden="true"
            className={cn("text-foreground", className)}
            stroke="currentColor"
            strokeWidth={2}
            strokeLinejoin="round"
        >
            <g transform="rotate(-45 0 64)" fill="hsl(var(--background))">
                <rect x={72} y={57} width={9} height={14} rx={3} />
                <rect x={64} y={57} width={8} height={14} fill="currentColor" fillOpacity={0.25} />
                <rect x={16} y={57} width={48} height={14} />
                <line x1={18} y1={64} x2={62} y2={64} strokeOpacity={0.35} />
                <polygon points="0,64 16,57 16,71" />
                <polygon points="0,64 6,61.4 6,66.6" fill="currentColor" />
            </g>
        </svg>
    );
}
