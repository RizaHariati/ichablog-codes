/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "image.tmdb.org"],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

// adding images link here
// images: { domains: ["lemonsqueezy.imgix.net", "image.tmdb.org"] },
