/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://narendra-dukhande-profile.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/404'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };
  