import { Caveat, Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

/** Handwritten lettering, exposed to Tailwind as `font-hand`. */
export const caveat = Caveat({
    subsets: ["latin"],
    weight: ["700"],
    variable: "--font-hand",
    display: "swap",
});
