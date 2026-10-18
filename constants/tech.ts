import { type TechInfo } from "@/types/tech";

/** Single source of truth for technology names and logos. */
export const tech = {
    html: { name: "HTML5", icon: "/assets/skills/html.png" },
    css: { name: "CSS3", icon: "/assets/skills/css.png" },
    javascript: { name: "JavaScript", icon: "/assets/skills/js.png" },
    typescript: { name: "TypeScript", icon: "/assets/skills/ts.png" },
    react: { name: "React", icon: "/assets/skills/react.png" },
    nextjs: { name: "Next.js", icon: "/assets/skills/nextjs.png", needsLightBackground: true },
    vue: { name: "Vue.js", icon: "/assets/skills/vue.png" },
    tailwind: { name: "Tailwind CSS", icon: "/assets/skills/tailwind.png" },
    bootstrap: { name: "Bootstrap", icon: "/assets/skills/bootstrap.png" },
    php: { name: "PHP", icon: "/assets/skills/php.png" },
    laravel: { name: "Laravel", icon: "/assets/skills/laravel.png" },
    go: { name: "Go", icon: "/assets/skills/go.png" },
    express: { name: "Express.js", icon: "/assets/skills/expressjs.svg", needsLightBackground: true },
    fastapi: { name: "FastAPI", icon: "/assets/skills/fastapi.svg" },
    java: { name: "Java", icon: "/assets/skills/java.svg" },
    springboot: { name: "Spring Boot", icon: "/assets/skills/springboot.svg" },
    python: { name: "Python", icon: "/assets/skills/python.png" },
    firebase: { name: "Firebase", icon: "/assets/skills/firebase.svg" },
    redis: { name: "Redis", icon: "/assets/skills/redis.svg" },
    postgresql: { name: "PostgreSQL", icon: "/assets/skills/postgresql.png" },
    mysql: { name: "MySQL", icon: "/assets/skills/mysql.png" },
    docker: { name: "Docker", icon: "/assets/skills/docker.png" },
    git: { name: "Git", icon: "/assets/skills/git.png" },
    github: { name: "GitHub", icon: "/assets/skills/github.png", needsLightBackground: true },
    gcp: { name: "Google Cloud Platform", icon: "/assets/skills/gcp.svg" },
    tensorflow: { name: "TensorFlow", icon: "/assets/skills/tensorflow.svg" },
    gemini: {
        name: "Gemini API",
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    },
} as const satisfies Record<string, TechInfo>;

export type TechId = keyof typeof tech;
