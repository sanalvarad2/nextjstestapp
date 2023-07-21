/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'flagcdn.com',
            port: '',            
          },
          {
            protocol: 'https',
            hostname: 'restcountries.com',
          },
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',

          }
        ],
      },
}

module.exports = nextConfig
