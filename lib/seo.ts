export const SITE_CONFIG = {
  name: 'Studio Bloom',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://studiobloom.is',
  description: 'Hágæða silkiblóm í áskrift fyrir fyrirtæki og heimili í Reykjavík og um allt Ísland',
  locale: 'is_IS',
  type: 'website',
} as const

export function buildCanonicalUrl(path: string = ''): string {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, '')
  const cleanPath = path.replace(/\/$/, '')
  return `${baseUrl}${cleanPath ? `/${cleanPath}` : ''}`
}

export function normalizeUrl(url: string): string {
  return url
    .replace(/^https?:\/\/(www\.)?/, 'https://')
    .replace(/\/$/, '')
    .replace(/[?#].*$/, '')
}

export const ROUTES = {
  home: '/',
  services: '/thjonusta',
  gallery: '/myndasafn',
  about: '/um-okkur',
  contact: '/hafa-samband',
} as const

export function getPageMetadata(path: string) {
  const baseMetadata = {
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: buildCanonicalUrl(path),
    },
    openGraph: {
      type: 'website',
      locale: 'is_IS',
      url: buildCanonicalUrl(path),
      siteName: SITE_CONFIG.name,
    },
  }

  switch (path) {
    case ROUTES.home:
      return {
        ...baseMetadata,
        title: 'Silkiblóm í áskrift | Studio Bloom - Hágæða blómaskreyting í Reykjavík',
        description: 'Fáðu hágæða silkiblóm í áskrift fyrir fyrirtæki og heimili í Reykjavík. Sérhönnuð blómasamsetningar sem endast árum saman og krefjast engrar umhirðu. Tilboð fyrir fyrirtæki um allt Ísland.',
        keywords: ['silkiblóm', 'áskrift', 'fyrirtæki', 'heimili', 'reykjavík', 'ísland', 'blómaskreyting'],
        openGraph: {
          ...baseMetadata.openGraph,
          title: 'Silkiblóm í áskrift | Studio Bloom - Hágæða blómaskreyting í Reykjavík',
          description: 'Fáðu hágæða silkiblóm í áskrift fyrir fyrirtæki og heimili í Reykjavík. Sérhönnuð blómasamsetningar sem endast árum saman.',
        },
      }
    case ROUTES.services:
      return {
        ...baseMetadata,
        title: 'Þjónustur silkiblóma | Studio Bloom - Áskriftarleiðir fyrir fyrirtæki',
        description: 'Skoðaðu áskriftarleiðir okkar fyrir silkiblóm í Reykjavík. Lítil, miðlungs og stór skreyting fyrir fyrirtæki og heimili. Verð frá 9.900 kr. á mánuði. Afhending um allt Ísland.',
        keywords: ['silkiblóm', 'áskrift', 'þjónusta', 'fyrirtæki', 'heimili', 'reykjavík', 'verð'],
        openGraph: {
          ...baseMetadata.openGraph,
          title: 'Þjónustur silkiblóma | Studio Bloom - Áskriftarleiðir fyrir fyrirtæki',
          description: 'Skoðaðu áskriftarleiðir okkar fyrir silkiblóm í Reykjavík. Lítil, miðlungs og stór skreyting fyrir fyrirtæki og heimili.',
        },
      }
    case ROUTES.gallery:
      return {
        ...baseMetadata,
        title: 'Myndasafn silkiblóma | Studio Bloom - Sérhönnuð blómaskreyting',
        description: 'Skoðaðu myndasafn af fallegum silkiblómaskreytingum frá Studio Bloom í Reykjavík. Sérhönnuð blómasamsetningar fyrir fyrirtæki og heimili. Fáðu innblástur fyrir þitt rými.',
        keywords: ['myndasafn', 'silkiblóm', 'blómaskreyting', 'sérhönnun', 'reykjavík', 'innblástur'],
        openGraph: {
          ...baseMetadata.openGraph,
          title: 'Myndasafn silkiblóma | Studio Bloom - Sérhönnuð blómaskreyting',
          description: 'Skoðaðu myndasafn af fallegum silkiblómaskreytingum frá Studio Bloom í Reykjavík. Sérhönnuð blómasamsetningar fyrir fyrirtæki og heimili.',
        },
      }
    case ROUTES.about:
      return {
        ...baseMetadata,
        title: 'Um Studio Bloom | Hágæða silkiblóm í Reykjavík síðan 2025',
        description: 'Kynntu þér Studio Bloom og sögu okkar í Reykjavík. Við sérhæfum okkur í hágæða silkiblómum sem endast árum saman. Áskriftarþjónusta fyrir fyrirtæki og heimili um allt Ísland.',
        keywords: ['um okkur', 'saga', 'gildi', 'silkiblóm', 'studio bloom', 'reykjavík', '2025'],
        openGraph: {
          ...baseMetadata.openGraph,
          title: 'Um Studio Bloom | Hágæða silkiblóm í Reykjavík síðan 2025',
          description: 'Kynntu þér Studio Bloom og sögu okkar í Reykjavík. Við sérhæfum okkur í hágæða silkiblómum sem endast árum saman.',
        },
      }
    case ROUTES.contact:
      return {
        ...baseMetadata,
        title: 'Hafa samband | Studio Bloom - Silkiblóm í Reykjavík',
        description: 'Hafðu samband við Studio Bloom fyrir silkiblóm í áskrift í Reykjavík. Sími: +354 783 0052, netfang: asta@studiobloom.is. Fáðu ókeypis ráðgjöf fyrir þitt fyrirtæki.',
        keywords: ['hafa samband', 'sími', 'netfang', 'studio bloom', 'reykjavík', 'ráðgjöf'],
        openGraph: {
          ...baseMetadata.openGraph,
          title: 'Hafa samband | Studio Bloom - Silkiblóm í Reykjavík',
          description: 'Hafðu samband við Studio Bloom fyrir silkiblóm í áskrift í Reykjavík. Sími: +354 783 0052, netfang: asta@studiobloom.is.',
        },
      }
    default:
      return baseMetadata
  }
} 