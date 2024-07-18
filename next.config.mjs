/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
