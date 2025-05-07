/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
      {
        source: '/graphql',
        destination: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}`,
      },
    ]
  },
}

module.exports = nextConfig 