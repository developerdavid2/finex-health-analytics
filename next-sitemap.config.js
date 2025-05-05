// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://finex-healthcare-analytics.vercel.app", // your live site
  generateRobotsTxt: true, // will also generate robots.txt
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin"], // add routes you don’t want in sitemap
};
