/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  // images: {
  //   domains: ["coding-challenge-api.aerolab.co"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coding-challenge-api.aerolab.co",
        pathname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
