/** @type {import('next-sitemap').Config} */
module.exports = {
    siteUrl: "https://ahmadammar.my.id",
    generateRobotsTxt: true,
    sitemap: [
        {
            loc: "https://ahmadammar.my.id",
            lastmod: "2026-04-02",
            changefreq: "weekly",
            priority: 1.0,
        },
        {
            loc: "https://ahmadammar.my.id/about",
            lastmod: "2026-04-02",
            changefreq: "monthly",
            priority: 0.8,
        },
        {
            loc: "https://ahmadammar.my.id/portfolio",
            lastmod: "2026-04-02",
            changefreq: "weekly",
            priority: 0.9,
        },
        {
            loc: "https://ahmadammar.my.id/contact",
            lastmod: "2026-04-02",
            changefreq: "monthly",
            priority: 0.7,
        },
        ...[
            "sinudzi",
            "batik-zulpah-company-profile",
            "accounting-app",
            "parkirin",
            "fulusin",
            "sipro",
            "brightlife",
            "netzero-palm",
            "curio",
            "learnalyzer",
            "projmanagem",
            "eduvoka",
        ].map((slug) => ({
            loc: `https://ahmadammar.my.id/portfolio/${slug}`,
            lastmod: "2026-04-02",
            changefreq: "monthly",
            priority: 0.6,
        })),
    ],
};
