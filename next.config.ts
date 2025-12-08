/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Force Next.js to build using Webpack instead of Turbopack
  experimental: {
    webpackBuildWorker: false,
  },

  webpack: (config, { dev }) => {
    if (dev) {
      config.optimization.minimizer = [];
    }
    return config;
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
