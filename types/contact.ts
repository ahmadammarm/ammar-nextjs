export type ContactChannel = {
    name: string;
    detail: string;
    icon: string;
    href: string;
};

export type AvailabilityItem = {
    icon: "location" | "clock";
    label: string;
    value: string;
};
