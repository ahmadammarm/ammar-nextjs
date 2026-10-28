import {
    type Portfolio,
    type PortfolioCategory,
    type PortfolioCategoryInfo,
    type PortfolioFilter,
} from "@/types/portfolio";

export const PORTFOLIO_CATEGORIES: Record<PortfolioCategory, PortfolioCategoryInfo> = {
    "web-app": { label: "Web App", tabLabel: "Web Apps", schemaCategory: "WebApplication" },
    "landing-page": { label: "Landing Page", tabLabel: "Landing Pages", schemaCategory: "BusinessApplication" },
    "company-profile": { label: "Company Profile", tabLabel: "Company Profiles", schemaCategory: "BusinessApplication" },
};

export const PORTFOLIO_FILTERS: readonly { value: PortfolioFilter; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "web-app", label: PORTFOLIO_CATEGORIES["web-app"].tabLabel },
    { value: "landing-page", label: PORTFOLIO_CATEGORIES["landing-page"].tabLabel },
    { value: "company-profile", label: PORTFOLIO_CATEGORIES["company-profile"].tabLabel },
];

export const PORTFOLIO_PAGE_SIZE = 6;

/** Ordered newest first. Set `featured: true` to show a project on the home page. */
export const portfolio: Portfolio[] = [
    {
        name: "Amami",
        slug: "amami",
        category: "web-app",
        featured: true,
        images: [
            "/assets/Portofolio_Ammar/Amami_-_Aplikasi_Manajemen_Masjid/Main.webp",
            "/assets/Portofolio_Ammar/Amami_-_Aplikasi_Manajemen_Masjid/1_-_Dashboard.webp",
            "/assets/Portofolio_Ammar/Amami_-_Aplikasi_Manajemen_Masjid/2-_Keuangan.webp",
            "/assets/Portofolio_Ammar/Amami_-_Aplikasi_Manajemen_Masjid/3_-_Inventaris.webp",
            "/assets/Portofolio_Ammar/Amami_-_Aplikasi_Manajemen_Masjid/4_-_Agenda.webp",
        ],
        description: "Amami (Aplikasi Manajemen Masjid) is an ERP platform that digitizes mosque operations into an auditable, data-driven management framework.",
        longDescription: "Amami (Aplikasi Manajemen Masjid) is a comprehensive Enterprise Resource Planning (ERP) platform. It aims to professionalize and digitize mosque operations, transforming traditional, manual processes into an auditable, data-driven management framework.",
        features: [
            "Strict Role-Based Access Control (RBAC) enforced on both the API and the interface, governing permissions for Super Admin, Bendahara, Takmir, Sekretaris, and Jamaah, with an audit log of user activity.",
            "Immutable financial ledger for transparent tracking of cash flows and donations with a strict no-update/no-delete rule. Corrections are made only through linked reversal entries, and row-level locking keeps every fund balance equal to the sum of its ledger.",
            "Integrated Zakat, Infaq, and Qurban management modules for accurate collection and targeted distribution, including quota-safe qurban bookings, animal tracking, and a weighted mustahik scoring system to prioritize recipients.",
            "Comprehensive Agenda and Inventory management to track mosque events with documentation uploads, physical assets, and item loans that can never be lent or returned twice.",
            "Jamaah, user, and system management covering the congregation database, user invitations, mosque profile, SMTP configuration, and a dashboard with real-time metrics.",
        ],
        technologies: ["vue", "typescript", "tailwind", "go", "postgresql"],
        source: "https://github.com/ahmadammarm/amami",
        year: "2026",
        role: "Fullstack Developer",
        platform: "Web Application",
    },
    {
        name: "SIPUT",
        slug: "siput",
        category: "web-app",
        featured: true,
        images: [
            "/assets/Portofolio_Ammar/SIPUT_-_Sistem_Informasi_Keputusan_Finansial/Main.webp",
            "/assets/Portofolio_Ammar/SIPUT_-_Sistem_Informasi_Keputusan_Finansial/1_-_Dashboard.webp",
            "/assets/Portofolio_Ammar/SIPUT_-_Sistem_Informasi_Keputusan_Finansial/2_-_Market.webp",
            "/assets/Portofolio_Ammar/SIPUT_-_Sistem_Informasi_Keputusan_Finansial/3_-_Activity.webp",
        ],
        description: "SIPUT is an interactive financial platform that helps high school students manage their weekly allowance through gamification, with a privacy-respecting dashboard for parents.",
        longDescription: "SIPUT is an interactive financial platform designed to help high school students manage their weekly allowance and build healthy spending habits through gamification, while providing parents with a privacy-respecting dashboard to monitor their progress.",
        features: [
            "Strict Role-Based Architecture (Student, Parent, Admin) paired with a hard Privacy Guard Rule that exposes only aggregate financial statistics to parents, protecting child transaction anonymity.",
            "High-precision financial ledger utilizing strict integer scaling (bigint) to prevent decimal rounding errors, integrated with behavioral tracking for psychological spending triggers (e.g., FOMO, impulsive buying).",
            "Dynamic gamification and financial pacing module that evaluates weekly budget adherence and automatically issues Weekly and Monthly Star Ratings (Gold, Silver, Red).",
            "Integrated Sisma Mart (school canteen/co-op) ecosystem that maps physical inventory purchases directly into automated macro-budget categories for seamless expense logging.",
        ],
        technologies: ["nextjs", "tailwind", "postgresql", "gemini", "redis"],
        link: "https://siput-asbun.com",
        year: "2026",
        role: "Fullstack Developer",
        platform: "Web Application",
    },
    {
        name: "Naiju CBT",
        slug: "ujian-cbt",
        category: "web-app",
        featured: true,
        images: [
            "/assets/Portofolio_Ammar/Naiju_-_Ujian_CBT/Main.webp",
            "/assets/Portofolio_Ammar/Naiju_-_Ujian_CBT/1_-_Dashboard.webp",
            "/assets/Portofolio_Ammar/Naiju_-_Ujian_CBT/2_-_SesiUjian.webp",
            "/assets/Portofolio_Ammar/Naiju_-_Ujian_CBT/3_-_HasilUjian.webp",
        ],
        description: "Naiju CBT is a web-based exam platform for junior and senior high school students, built with Laravel 11, Inertia.js, and Vue 3.",
        longDescription: "Naiju CBT is a web-based exam platform for junior and senior high school students (SMP/SMA). Teachers use Naiju Studio to build courses and multiple-choice question banks, enroll students, and track results. Students take proctored, LJK-style exams in Naiju Exam and see their score as soon as they submit. It is built with Laravel 11, Inertia.js, and Vue 3, and uses a \"study desk\" design throughout.",
        features: [
            "Course and question bank management where the teacher sets the answer key by filling in an LJK bubble, with a live preview of what students will see.",
            "LJK-style exam interface with a countdown timer, an answer-sheet navigator, and progress saved in the browser so students can pick up again after a refresh.",
            "Built-in proctoring that requires fullscreen, counts tab switches as violations with three warnings, auto-submits on the fourth, and never sends answer keys to the browser.",
            "Instant server-side scoring with a report card showing the score, pass/fail at a pass mark of 70, time taken, and violation count.",
            "Role-based access for teachers and students, with a teacher analytics dashboard for enrollment trends, average score per course, and pass rates.",
        ],
        technologies: ["php", "laravel", "vue", "tailwind", "mysql"],
        source: "https://github.com/ahmadammarm/ujian-cbt",
        year: "2026",
        role: "Fullstack Developer",
        platform: "Web Application",
    },
    {
        name: "Fulusin",
        slug: "fulusin",
        category: "web-app",
        images: [
            "/assets/Portofolio_Ammar/Fulusin/Main.webp",
            "/assets/Portofolio_Ammar/Fulusin/1_-_Dashboard.webp",
            "/assets/Portofolio_Ammar/Fulusin/2_-_Transactions.webp",
            "/assets/Portofolio_Ammar/Fulusin/3_-_Planning.webp",
        ],
        description: "Fulusin is a personal finance tracker that helps individuals record, plan, and analyze income and expenses, with AI-powered insights and financial education.",
        longDescription: "Fulusin is a web-based personal finance tracker that helps individuals record, plan, and analyze their income and expenses within any chosen period, with AI-powered insights and financial education.",
        features: [
            "Secure sign in with credentials or Google OAuth, plus a currency setting that formats every amount with the user's preferred currency and symbol.",
            "Transaction management that records income and expenses under categories with emoji icons. Transactions can be searched, filtered, exported to CSV, and bulk imported from a CSV file.",
            "Period overview and history that summarizes income, expenses, balance, and top categories for any date range, with monthly and annual history charts.",
            "Financial planning with monthly budgets per category that warn near and over the limit, savings goal tracking, and recurring transactions recorded automatically when they fall due.",
            "AI assistant powered by Google Gemini that explains personal finance concepts and generates insights for a chosen period, with highlights, warnings, and suggestions based on the user's aggregated data.",
        ],
        technologies: ["typescript", "nextjs", "tailwind", "postgresql", "gemini"],
        link: "https://fulusin.vercel.app",
        year: "2025",
        role: "Fullstack Developer",
        platform: "Web Application",
    },
];
