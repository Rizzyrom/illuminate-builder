/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BUILDER_PUBLIC_KEY: process.env.BUILDER_PUBLIC_KEY,
  },
  images: {
    domains: ['cdn.builder.io', 'images.unsplash.com'],
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig