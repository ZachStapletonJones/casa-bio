/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    output: 'export',
    basePath: "/casa-bio",
    // assetPrefix: isProd ? "/casa-bio" : undefined,
}

module.exports = nextConfig
