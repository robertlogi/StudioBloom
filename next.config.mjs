let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

const isProduction = process.env.NODE_ENV === 'production'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://studiobloom.is'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  basePath: '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://studiobloom.is/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.studiobloom.is',
          },
        ],
        destination: 'https://studiobloom.is/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'utm_source',
          },
        ],
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'utm_medium',
          },
        ],
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'utm_campaign',
          },
        ],
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'utm_term',
          },
        ],
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'utm_content',
          },
        ],
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'fbclid',
          },
        ],
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'gclid',
          },
        ],
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'msclkid',
          },
        ],
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: isProduction ? 'index, follow' : 'noindex, nofollow',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ]
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
