export type ProjectType = 'graduation' | 'team' | 'personal'

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  story: string
  achievement: string
  stacks: string[]
  githubUrl: string
  type: ProjectType
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'byeoldori',
    title: '⭐ 별도리 (Byeoldori)',
    subtitle: '천체관측 교육 플랫폼',
    description: 'Android · Spring Boot · Unity · Next.js로 구성된 천체관측 교육 풀스택 서비스. 충북대학교 졸업작품.',
    story: '교육 콘텐츠를 코드로 직접 구현하는 방식은 기능이 늘어날수록 유지보수가 어려워진다는 한계를 발견했습니다. 이를 구조적 문제로 인식하고, 교육 시나리오를 JSON 데이터로 정의하고 이를 해석하는 실행 엔진 구조를 설계했습니다.',
    achievement: '평균 30~80단계에 이르는 복잡한 흐름을 데이터 기반으로 처리 — 코드 수정 없이 콘텐츠 추가 가능한 확장 아키텍처 구현',
    stacks: ['Java', 'Spring Boot', 'Cloud Run', 'Flutter', 'Unity', 'Next.js'],
    githubUrl: 'https://github.com/Astronomy-Software/Byeoldori_App',
    type: 'graduation',
    featured: true,
  },
  {
    id: 'raildock',
    title: '🚂 레일독 (Raildock)',
    subtitle: 'AI 기반 철도 시설물 유지보수 플랫폼',
    description: '철도 시설물 결함 이미지/영상 분석 AI 플랫폼. RAG/LLM 연동 + 대용량 미디어 처리 파이프라인.',
    story: '대용량 이미지·영상 파일을 백엔드 서버가 모두 처리하는 구조에서 성능 저하가 발생했습니다. 이를 트래픽 병목과 책임 과다 문제로 정의하고, 파일 전송과 데이터 처리를 분리하는 방향으로 구조를 재설계했습니다.',
    achievement: '파일 트래픽 약 80% 감소 · AI 데이터 접근 속도 40% 단축',
    stacks: ['Spring Boot', 'AWS S3', 'CloudFront', 'RAG/LLM', 'React'],
    githubUrl: 'https://github.com/Seobeomsu',
    type: 'team',
  },
  {
    id: 'club-homepage',
    title: '🏛 동아리 홈페이지',
    subtitle: '학과 동아리 커뮤니티 플랫폼',
    description: '족보 공유, 공지, 자유게시판 기능을 갖춘 학과 동아리 전용 커뮤니티 사이트.',
    story: '배포 후 족보 게시판 이용률이 매우 낮다는 것을 확인했습니다. 요구사항 1순위가 족보 공유였기에 사용자 인터뷰를 진행했고, 작성자 이름 노출에 대한 부담감이 주요 원인임을 파악했습니다.',
    achievement: '익명 마스킹 기능 구현 후 게시글 업로드 수 약 3배 증가',
    stacks: ['Spring Boot', 'JPA', 'MySQL', 'React'],
    githubUrl: 'https://github.com/Seobeomsu/club-homepage',
    type: 'personal',
  },
]
