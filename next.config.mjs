import withPWAInit from '@ducanh2912/next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['www.datocms-assets.com'],
  },
  siteUrl: process.env.SITE_URL || 'https://larsvanderniet.nl',
  generateRobotsTxt: true,
}

const withPWA = withPWAInit({
  dest: 'public',
})

module.exports = withPWA(nextConfig)
