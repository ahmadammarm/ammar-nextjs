export type PortfolioCategory = "landing-page" | "web-app" | "company-profile";

export type Portfolio = {
    nama: string;
    slug: string;
    category: PortfolioCategory;
    gambar: string;
    gambar2?: string;
    gambar3?: string;
    gambar4?: string;
    gambar5?: string;
    deskripsi: string;
    deskripsi2: string;
    seoTitle?: string;
    seoDescription?: string;
    teknologi: string[];
    features?: string[];
    link?: string;
    source?: string;
    detail?: string;
    year: string;
    role: string;
    platform: string;
}