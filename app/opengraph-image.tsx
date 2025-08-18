import { ImageResponse } from 'next/og'
import { SITE_CONFIG } from '@/lib/seo'

export const runtime = 'edge'
export const alt = 'Studio Bloom - Lúxus silkiblóm í áskrift'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#faf9f7',
          backgroundImage: 'linear-gradient(135deg, #f3f0eb 0%, #faf9f7 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 300,
              color: '#2c3e2d',
              marginBottom: 20,
              fontFamily: 'serif',
            }}
          >
            Studio
          </div>
          <div
            style={{
              fontSize: 120,
              fontWeight: 500,
              color: '#2c3e2d',
              marginBottom: 40,
              fontFamily: 'serif',
            }}
          >
            Bloom
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#948774',
              marginBottom: 20,
              fontFamily: 'sans-serif',
              fontWeight: 400,
            }}
          >
            Lúxus silkiblóm í áskrift
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#4a4a4a',
              maxWidth: 600,
              lineHeight: 1.4,
              fontFamily: 'sans-serif',
              fontWeight: 300,
            }}
          >
            Hágæða silkiblóm fyrir fyrirtæki og heimili í Reykjavík
          </div>
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#948774',
            }}
          />
          <span
            style={{
              fontSize: 18,
              color: '#948774',
              fontFamily: 'sans-serif',
              fontWeight: 400,
            }}
          >
            studiobloom.is
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 