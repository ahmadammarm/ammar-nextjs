export type NavItem = {
    href: string;
    label: string;
    /** Also mark the item active on nested routes (e.g. /portfolio/[slug]). */
    matchNested?: boolean;
};
