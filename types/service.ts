export type ServiceIcon = "layout" | "bot" | "cpu";

export type Service = {
    title: string;
    description: string;
    features: string[];
    icon: ServiceIcon;
    whatsappMessage: string;
};
