/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable type checking for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;