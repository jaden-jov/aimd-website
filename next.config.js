
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // disable Next.js optimization, serve raw <img> tags
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
