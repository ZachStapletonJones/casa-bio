/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    assetPrefix: 'https://zachstapletonjones.github.io/casa-bio/',
}

module.exports = nextConfig
