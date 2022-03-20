/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  compiler: {
    styledComponents: true,
  },
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['w7.pngwing.com'],
  },
}
