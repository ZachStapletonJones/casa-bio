/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    assetPrefix: isProd ? '/casa-bio' : undefined,
}

module.exports = nextConfig
