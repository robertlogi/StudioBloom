import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NODE_ENV === 'production'
  const isCorrectDomain = SITE_CONFIG.url === 'https://studiobloom.is'
  const shouldIndex = isProduction && isCorrectDomain
  
  if (!shouldIndex) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    }
  }
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/draft/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/draft/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/draft/'],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  }
} 