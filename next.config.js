/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
