/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    // output: 'export',
    // basePath: isProd ? "/casa-bio" : undefined,
    // assetPrefix: isProd ? "/casa-bio" : undefined,
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
