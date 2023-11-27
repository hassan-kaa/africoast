/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "d2h6dxozyuyc92.cloudfront.net",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
