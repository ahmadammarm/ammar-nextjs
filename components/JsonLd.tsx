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
        jobTitle: ["Fullstack Developer", "Software Engineer", "AI Enthusiast"],
        alumniOf: {
            "@type": "CollegeOrUniversity",
            "name": "Universitas Negeri Malang",
            "url": "https://um.ac.id"
        },
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

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: `${nama} | Personal Website`,
        url: "https://ahmadammar.my.id",
        description: deskripsi,
        author: {
            "@type": "Person",
            name: nama,
        },
    };

    const schemas = [personSchema, websiteSchema, breadcrumbsSchema];

    const sanitize = (json: object) => JSON.stringify(json).replace(/</g, '\\u003c');

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                >
                    {sanitize(schema)}
                </script>
            ))}
        </>
    );
}
