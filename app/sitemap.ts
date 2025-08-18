import { MetadataRoute } from 'next'
import { SITE_CONFIG, ROUTES } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const isProduction = process.env.NODE_ENV === 'production'
  const isCorrectDomain = SITE_CONFIG.url === 'https://studiobloom.is'
  const shouldIndex = isProduction && isCorrectDomain
  
  if (!shouldIndex) {
    return []
  }
  
  const currentDate = new Date()
  
  return [
    {
      url: SITE_CONFIG.url,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_CONFIG.url}${ROUTES.services}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.url}${ROUTES.gallery}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.url}${ROUTES.about}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_CONFIG.url}${ROUTES.contact}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
} 