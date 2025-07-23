/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/lang/:path*',
        destination: '/api/lang/:path*',
      },
    ]
  },
}

module.exports = nextConfig
