/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    sassOptions: {
        fiber: false,
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
