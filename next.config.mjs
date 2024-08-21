/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "randomuser.me",
      "https://randomuser.me/api",

    ],
  },
};

export default nextConfig;
