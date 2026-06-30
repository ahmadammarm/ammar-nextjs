/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://ahmadammar.my.id',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'], // Exclude dynamic sitemap if using next-sitemap server sitemap
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
};
