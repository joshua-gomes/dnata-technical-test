/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    baseUrl: process.env.API_BASE_URL,
  },
};

module.exports = nextConfig;
