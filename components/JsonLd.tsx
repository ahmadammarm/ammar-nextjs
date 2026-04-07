import { profile } from "@/constants/profile";
import { about } from "@/constants/about";

export default function JsonLd() {
    const { nama } = profile[0];
    const { deskripsi } = about[0];

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: nama,
        description: deskripsi,
        url: "https://ahmadammar.my.id",
        image: "https://ahmadammar.my.id/assets/metadata.png",
        sameAs: [
            "https://github.com/ahmadammarm",
            "https://linkedin.com/in/ahmadammarmusyaffa",
            "https://instagram.com/ahmad_ammar_m",
        ],
        email: "mailto:ahmadammarmusyaffa@gmail.com",
        knowsAbout: [
            "Fullstack Development",
            "Frontend Development",
            "Node.js",
            "Laravel",
            "Go",
            "PostgreSQL",
            "RESTful API",
            "AI Integration",
        ],
    };

    const breadcrumbsSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://ahmadammar.my.id",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Portfolio",
                item: "https://ahmadammar.my.id/portfolio",
            },
        ],
    };

    const schemas = [personSchema, breadcrumbsSchema];

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}
