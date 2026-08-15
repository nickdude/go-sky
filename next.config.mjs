/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local assets are optimized by default. Add remote patterns here if the
    // project starts sourcing images from a CMS or external host.
    remotePatterns: [],
  },
};

export default nextConfig;
