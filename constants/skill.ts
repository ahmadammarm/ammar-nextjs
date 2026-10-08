import { Skill } from "@/types/skill";

export const frontendSkills: Skill[] = [
    {
        gambar: "/assets/skills/react.png",
        nama: "React",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/nextjs.png",
        nama: "NextJs",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/vue.png",
        nama: "VueJs",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/tailwind.png",
        nama: "Tailwind CSS",
        tingkat: "Intermediate",
    },
    {
        gambar: "/assets/skills/ts.png",
        nama: "TypeScript",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/js.png",
        nama: "JavaScript",
        tingkat: "Intermediate",
    },
];

export const backendSkills: Skill[] = [
    {
        gambar: "/assets/skills/go.png",
        nama: "Go",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/laravel.png",
        nama: "Laravel",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/expressjs.svg",
        nama: "ExpressJs",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/fastapi.svg",
        nama: "FastAPI",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/java.svg",
        nama: "Java",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/springboot.svg",
        nama: "Spring Boot",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/python.png",
        nama: "Python",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/firebase.svg",
        nama: "Firebase",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/redis.svg",
        nama: "Redis",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/postgresql.png",
        nama: "PostgreSQL",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/mysql.png",
        nama: "MySQL",
        tingkat: "Basic",
    },
];

export const techStack: Skill[] = [...frontendSkills, ...backendSkills];

export const tools: Skill[] = [
    {
        gambar: "/assets/skills/git.png",
        nama: "Git",
        tingkat: "Intermediate",
    },
    {
        gambar: "/assets/skills/github.png",
        nama: "GitHub",
        tingkat: "Intermediate",
    },
    {
        gambar: "/assets/skills/gcp.svg",
        nama: "Google Cloud Platform",
        tingkat: "Basic",
    },
];

export const aiSkills: Skill[] = [
    {
        gambar: "/assets/skills/python.png",
        nama: "Python",
        tingkat: "Basic",
    },
    {
        gambar: "/assets/skills/tensorflow.svg",
        nama: "TensorFlow",
        tingkat: "Basic",
    },
    {
        gambar: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
        nama: "Gemini API",
        tingkat: "Intermediate",
    },
];