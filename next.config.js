/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "google.com",
      "vercel.app",
      "lh3.googleusercontent.com",
      "cloudflare-ipfs.com",
    ],
  },
};

module.exports = nextConfig;
