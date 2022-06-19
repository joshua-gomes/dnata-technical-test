/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    dnataApiBaseUrl: process.env.DNATA_API_BASE_URL,
  },
  publicRuntimeConfig: {
    nextApiBaseUrl: process.env.NEXT_API_BASE_URL,
  },
};

module.exports = nextConfig;
