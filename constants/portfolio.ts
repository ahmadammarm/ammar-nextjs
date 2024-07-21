import { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio[] =[
    {
        nama: "Eclipse Glow Landing Page",
        gambar: "/assets/portfolios/eclipse.png",
        deskripsi: "Landing page untuk website Eclipse Glow yang merupakan salah satu produk PKM dari Universitas Negeri Malang tahun 2023.",
        teknologi: ["/assets/skills/html.png", "/assets/skills/css.png", "/assets/skills/js.png"],
        link: "https://eclipse-glow.vercel.app/",
        source: "https://github.com/ahmadammarm/eclipse-glow"
    },
    {
        nama: "Sistem Informasi Catering Bu Aini",
        gambar: "/assets/portfolios/sicaba.png",
        deskripsi: "Sistem informasi berbasis web untuk manajemen catering Bu Aini yang berlokasi di Malang.",
        teknologi: ["/assets/skills/php.png", "/assets/skills/laravel.png", "/assets/skills/bootstrap.png"],
        source: "https://github.com/HarunSatr/SICABA"
    },
    {
        nama: "Webcademy Learning Platform",
        gambar: "/assets/portfolios/webcademy.png",
        deskripsi: "Platform pembelajaran online yang menyediakan berbagai kursus seputar pemrograman web berbasis video.",
        teknologi: ["/assets/skills/react.png", "/assets/skills/nextjs.png", "/assets/skills/tailwind.png"],
        link: "https://webcademy.vercel.app/",
        source: "https://github.com/ahmadammarm/webcademy"   
    }
]