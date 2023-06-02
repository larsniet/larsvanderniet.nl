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
}

const withPWA = withPWAInit({
  dest: 'public',
})

export default withPWA(nextConfig)
