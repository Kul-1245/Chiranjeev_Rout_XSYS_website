/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Chiranjeev_Rout_XSYS_website',
  assetPrefix: '/Chiranjeev_Rout_XSYS_website/',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    // Lint locally with `npm run lint`; never let a style warning break a deploy.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
