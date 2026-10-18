import { type Experience } from "@/types/experience";

export const experiences: Experience[] = [
    {
        company: "PT Intervyou Labs Indonesia",
        position: "Software Engineer",
        companyLogo: "/assets/companies/intervyou.png",
        employmentType: "Part-time",
        workMode: "Remote",
        period: "Nov 2025 - Present",
        highlights: [
            "Contributed to scaling an AI-powered career startup across 5+ platforms including the main platform, institution platform, hire platform, and internal tools while serving thousands of users with Next.js, MySQL, and PostgreSQL, implementing prompt injection mitigation across multiple AI features. Concurrently enhanced 4+ product areas including payment workflows, analytics, CV Builder, and event scheduling while refactoring 20+ legacy modules and optimizing SQL queries, ORM loading, transactions, and concurrency.",
        ],
        techStack: ["nextjs", "postgresql", "mysql"],
    },
    {
        company: "Evermos",
        position: "Project-Based Virtual Intern: Backend Developer",
        companyLogo: "/assets/companies/evermos.jpg",
        employmentType: "Internship",
        workMode: "Remote",
        period: "Aug 2026 - Sep 2026",
        highlights: [
            "Developed backend services for a social commerce platform using Gin, GORM, and MySQL during a project-based virtual internship with Evermos, engineering 10+ API endpoints for authentication, product management, order processing, and user services using layered architecture and reusable business logic.",
        ],
        techStack: ["go", "mysql", "git"],
    },
    {
        company: "Independent / Freelancer",
        position: "Freelance Web Developer",
        companyLogo: "/assets/companies/self-employed.jpg",
        employmentType: "Self-employed",
        workMode: "Remote",
        period: "Aug 2023 - Apr 2026",
        highlights: [
            "Developed 10+ web application projects including information systems, landing pages, e-learning platforms, and custom applications using Next.js, React, Laravel, MySQL, and PostgreSQL, designing application architectures, relational data models, APIs, authentication, and AI-powered features with LLM services for question generation and contextual recommendations.",
        ],
        techStack: ["nextjs", "laravel", "mysql", "postgresql", "gemini"],
    },
    {
        company: "Pastijadi Digital Solutions",
        position: "Fullstack Developer",
        companyLogo: "/assets/companies/pastijadi.webp",
        employmentType: "Freelance",
        workMode: "Remote",
        period: "Aug 2024 - Nov 2024",
        highlights: [
            "Developed the Batik Zulpah Platform and Pastijadi Accounting Platform using Laravel and MySQL to support business and accounting operations, including product management, CMS, Accounts Payable, Accounts Receivable, and financial reporting. Engineered secure backend services with relational database modeling, RBAC, and database transactions to maintain data integrity across financial and procurement workflows.",
        ],
        techStack: ["laravel", "bootstrap", "mysql"],
    },
    {
        company: "PUI-PT DLI UM",
        position: "Fullstack Developer",
        companyLogo: "/assets/companies/pui-pt-dli-um.jpg",
        employmentType: "Freelance",
        workMode: "Remote",
        period: "Jun 2024 - Nov 2024",
        highlights: [
            "Developed an Islamic educational and habit-tracking platform using Laravel, MySQL, and Tailwind CSS for research at the Directorate of Innovation, building a modular Admin CMS with 12+ CRUD interfaces secured by Spatie RBAC and optimizing database performance through Eloquent eager loading and efficient indexing.",
        ],
        techStack: ["laravel", "tailwind", "mysql"],
    },
];
