export interface ExperienceItem {
  period: string
  title: string
  organization: string
  description: string
  category: 'work' | 'education' | 'activity'
}

export const experiences: ExperienceItem[] = [
  {
    period: '2026.04 — 현재',
    title: '(주)바이엇 — 백엔드 개발자',
    organization: 'Bayat · 인플루언서 마케팅 플랫폼',
    description:
      'Spring Boot / NestJS 기반 백엔드 개발. 조회 API 성능 개선(7.2s→0.8s), 발송 파이프라인 장애 원인 규명, Meta Graph API 연동. 인턴 수료 후 정규직 전환.',
    category: 'work',
  },
  {
    period: '2025.10 — 2026.04',
    title: 'KT AIVLE School 6기',
    organization: 'KT · AI 개발자 과정',
    description: 'AI · 백엔드 · 클라우드 집중 교육. 미니프로젝트 5회 수행.',
    category: 'education',
  },
  {
    period: '2020.03 — 2026.02',
    title: '충북대학교 컴퓨터공학과',
    organization: 'Chungbuk National University',
    description: '졸업작품 별도리 — 천체관측 교육 플랫폼 개발.',
    category: 'education',
  },
  {
    period: '2022 — 2025',
    title: '라인필하모닉 (오케스트라 동아리)',
    organization: '충북대학교',
    description: '팀워크와 협업 역량 함양. 다수의 정기 연주회 참여.',
    category: 'activity',
  },
]
