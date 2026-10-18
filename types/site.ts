export type OgImage = {
    url: string;
    width: number;
    height: number;
};

export type SiteConfig = {
    url: string;
    name: string;
    author: string;
    shortAuthor: string;
    description: string;
    ogImage: OgImage;
    themeColor: string;
    twitterHandle: string;
    contactFormEndpoint: string;
};
