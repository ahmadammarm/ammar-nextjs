"use client";

import { type ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { type ContactChannel } from "@/types/contact";

const COPIED_RESET_MS = 2000;
const actionClass = "p-2 neo-border neo-press-sm cursor-pointer";

export function ContactChannelCard({ channel }: { channel: ContactChannel }): ReactElement {
    const { name, detail, icon, href } = channel;
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return undefined;
        const timer = setTimeout(() => setCopied(false), COPIED_RESET_MS);
        return () => clearTimeout(timer);
    }, [copied]);

    const copyDetail = async (): Promise<void> => {
        try {
            await navigator.clipboard.writeText(detail);
            setCopied(true);
            toast({ title: "Copied!", description: `${detail} copied to clipboard.` });
        } catch {
            toast({ variant: "destructive", title: "Copy failed", description: "Your browser blocked clipboard access." });
        }
    };

    return (
        <div className="group relative bg-background neo-border neo-press p-4 sm:p-5 flex items-center justify-between gap-4 cursor-default">
            <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 flex-shrink-0 bg-brand-blue neo-border neo-shadow-sm flex items-center justify-center p-2">
                    <Image src={icon} alt={name} width={26} height={26} className="object-contain" />
                </div>
                <div className="min-w-0">
                    <h2 className="text-base font-black text-foreground uppercase tracking-tight">{name}</h2>
                    <p className="text-xs sm:text-sm font-mono text-muted-foreground truncate">{detail}</p>
                </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
                <button
                    type="button"
                    onClick={copyDetail}
                    className={`${actionClass} bg-background`}
                    title="Copy to clipboard"
                    aria-label={`Copy ${name}`}
                >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-foreground" />}
                </button>
                <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${actionClass} bg-brand-blue text-black`}
                    title={`Open ${name}`}
                    aria-label={`Open ${name}`}
                >
                    <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
