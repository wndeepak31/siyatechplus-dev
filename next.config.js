/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com', 'via.placeholder.com'],
    unoptimized: false,
  },
  // Enable static export if needed
  // output: 'export',
}

module.exports = nextConfig
