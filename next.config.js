/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
      swcMinify: true,
      skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
