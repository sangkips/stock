/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// frontend/next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://127.0.0.1:8000/api/:path*' // Proxy to Django backend
        }
      ]
    }
  };
  
