/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PORT: process.env.PORT || '3000',
    WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER || '5566999999999',
  },
  experimental: {
    // Configurações experimentais se necessário
  },
}

module.exports = nextConfig
