import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows Next.js to serve and optimize images from these specific domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'nongorevilla.netlify.app',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '**',
      },
    ],
    // Optional: Improves performance for high-res mountain photography
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;