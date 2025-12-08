/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    // forces Next.js to fall back to webpack
    webpackBuildWorker: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
    ],
    domains: ["api.microlink.io"],
  },
};

module.exports = nextConfig;
