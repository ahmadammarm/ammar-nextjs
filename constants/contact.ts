import { type AvailabilityItem, type ContactChannel } from "@/types/contact";
import { profile } from "@/constants/profile";

export const EMAIL = "ammarmusyaffa11@gmail.com";
export const WHATSAPP_URL = "https://wa.me/6281217952403";

export const whatsappLink = (message: string): string =>
    `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

export const contactChannels: ContactChannel[] = [
    {
        name: "WhatsApp",
        detail: "+62 812 1795 2403",
        icon: "/assets/contacts/wa.png",
        href: WHATSAPP_URL,
    },
    {
        name: "Gmail",
        detail: EMAIL,
        icon: "/assets/contacts/gmail.png",
        href: `https://mail.google.com/mail/u/0/?fs=1&to=${EMAIL}&su=Your%20Subject&body=Your%20Messages&tf=cm`,
    },
    {
        name: "Discord",
        detail: "musyaffa",
        icon: "/assets/contacts/discord.png",
        href: "https://discordapp.com/users/musyaffa#1606",
    },
];

export const availability: AvailabilityItem[] = [
    { icon: "location", label: "Location", value: `${profile.city}, ${profile.country} (UTC+7)` },
    { icon: "clock", label: "Response Window", value: "Usually within 24 hours on workdays" },
];
