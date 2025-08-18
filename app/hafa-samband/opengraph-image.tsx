import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Hafa samband - Studio Bloom í Reykjavík'
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
          backgroundColor: '#f3f0eb',
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
              fontSize: 100,
              fontWeight: 500,
              color: '#2c3e2d',
              marginBottom: 30,
              fontFamily: 'serif',
            }}
          >
            Hafa samband
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#948774',
              marginBottom: 30,
              fontFamily: 'sans-serif',
              fontWeight: 400,
            }}
          >
            Studio Bloom í Reykjavík
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#4a4a4a',
              maxWidth: 700,
              lineHeight: 1.4,
              fontFamily: 'sans-serif',
              fontWeight: 300,
            }}
          >
            Sími: +354 783 0052 | Netfang: asta@studiobloom.is
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
            studiobloom.is/hafa-samband
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 