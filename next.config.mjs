/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: 'smpn1-mlg.sch.id',
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
            },
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
            },
            {
                protocol: 'https',
                hostname: 'huggingface.co',
            }
        ]
    }
};

export default nextConfig;
