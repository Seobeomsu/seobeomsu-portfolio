import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
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
    <html lang="ko" className={notoSansKR.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
