import { type Profile, type ProfileHighlight } from "@/types/profile";

export const profile: Profile = {
    name: "Ahmad Ammar Musyaffa",
    role: "Software Engineering & Fullstack Development",
    title: "Fullstack Dev",
    city: "Malang City",
    country: "Indonesia",
    heroBio:
        "Developing scalable backend architectures, RESTful APIs, relational databases, and high-performance, responsive web interfaces with clean engineering standards.",
    aboutBio:
        "A software engineer with internship experiences and hands-on experiences developing full-stack web applications through academic, freelance, volunteer, and personal projects. Experienced in building backend services, REST APIs, relational databases, and scalable web applications using various tech stacks like Next.js, Laravel, Go, FastAPI, Vue, Astro, PostgreSQL, and MySQL, while also capable of developing responsive frontend interfaces and delivering end-to-end solutions.",
    photo: "/assets/ammar-baju-putih.png",
    photoAlt: "Ahmad Ammar Musyaffa - Software Engineer & Fullstack Developer",
    cvUrl: "/assets/CV_Ahmad_Ammar.pdf",
    cvFileName: "CV_Ahmad_Ammar",
};

export const profileHighlights: ProfileHighlight[] = [
    { label: "Location", value: `${profile.city}, ID` },
    { label: "Education", value: "Informatics Eng. UM" },
    { label: "Core Stack", value: "Next.js, Laravel, Go" },
    { label: "Specialization", value: "Software Engineering & Fullstack" },
];
