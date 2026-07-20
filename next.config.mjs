/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        unoptimized: true,
        formats: ['image/webp', 'image/avif'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'arden.ac.uk',
                pathname: '/themes/arden/images/**',
            },
            {
                protocol: 'https',
                hostname: 'api.exchangerate-api.com',
                pathname: '/v4/latest/**',
            },
            {
                protocol: 'https',
                hostname: 'utfs.io',
                pathname: '/**',
            },
        ],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    // Added trailingSlash option for better compatibility with static hosts
    trailingSlash: true,
    // Performance optimizations
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
};

export default nextConfig;
