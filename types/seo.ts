export type JsonValue =
    | string
    | number
    | boolean
    | null
    | JsonValue[]
    | { [key: string]: JsonValue };

export type JsonLdSchema = {
    "@context": "https://schema.org";
    "@type": string;
    [key: string]: JsonValue;
};

export type BreadcrumbItem = {
    name: string;
    path: string;
};
