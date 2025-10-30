/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        dangerouslyAllowSVG: true,
        unoptimized: true
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    // Added trailingSlash option for better compatibility with static hosts
    trailingSlash: true
};

export default nextConfig;
