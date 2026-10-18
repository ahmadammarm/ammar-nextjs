import { type MetadataRoute } from "next";
import { SITE } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${SITE.author} Portfolio`,
        short_name: "Ammar Portfolio",
        description: `Portfolio of ${SITE.author}, Fullstack Developer & AI Enthusiast`,
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: SITE.themeColor,
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/a.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
