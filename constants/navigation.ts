import { type NavItem } from "@/types/navigation";

export const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio", matchNested: true },
    { href: "/contact", label: "Contact" },
];
