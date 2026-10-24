import { profile } from "@/constants/profile";
import { type SiteConfig } from "@/types/site";

export const SITE: SiteConfig = {
    url: "https://ahmadammar.my.id",
    name: "Ammar Developer",
    author: "Ahmad Ammar Musyaffa",
    shortAuthor: "Ahmad Ammar",
    description: profile.aboutBio,
    ogImage: {
        url: "/assets/web-image.png",
        width: 1348,
        height: 767,
    },
    themeColor: "#007AFF",
    twitterHandle: "@ahmadammarm",
    contactFormEndpoint:
        "https://script.google.com/macros/s/AKfycby-TIGP5hd3qZDQkAWczflI3qVDorrRt3egys1dGRolltGTEX6xI5XdumXT7CQdFqiAvA/exec",
};
