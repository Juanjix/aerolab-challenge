/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["coding-challenge-api.aerolab.co"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
