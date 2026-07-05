import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

// 블루프린트/시스템 설계도 감성 — IBM Plex 패밀리로 통일 (기술적·정밀한 인상)
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-mono',
  display: 'swap',
})

const plexKR = IBM_Plex_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex-kr',
  display: 'swap',
  preload: false, // 한글 서브셋이 커서 preload 경고 방지
})

export const metadata: Metadata = {
  title: '서범수 | 백엔드 개발자 포트폴리오',
  description: 'Java · Spring Boot 기반 백엔드 개발자. 문제를 정의하고 구조로 해결합니다.',
  openGraph: {
    title: '서범수 | 백엔드 개발자 포트폴리오',
    description: 'Java · Spring Boot · Cloud — 문제를 정의하고 구조로 해결합니다.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${plexMono.variable} ${plexKR.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
