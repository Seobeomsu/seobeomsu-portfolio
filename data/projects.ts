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
  /** 운영 중인 서비스 주소. 있으면 카드/모달에 "live ↗" 링크가 붙는다. */
  liveUrl?: string
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

  // ── 2026 하반기 ───────────────────────────────────────────────
  // 출처: Seobeomsu/byeoltokki 저장소 코드와 라이브 사이트에서 확인한 사실만 기재.
  // TODO(확인 필요): byeoltokki 저장소는 현재 비공개. github 링크를 유지하려면 공개 전환,
  //   아니면 raildock처럼 프로필 URL(https://github.com/Seobeomsu)로 바꿀지 결정.
  {
    id: 'byeoltokki',
    title: '🐰 별토끼 (byeoltokki.com)',
    subtitle: '생활 도구 모음 + 꿀팁 블로그 + 증강장기',
    description:
      '음양력 변환, 해외결제 영문주소 변환, 비밀번호/아이디 생성기, 요트 다이스 점수판, 그리고 TFT식 증강 카드 20종을 얹은 웹 장기 게임 증강장기를 한 도메인에 모은 사이트. Next.js SSG를 Cloudflare Workers에 올려 운영 중.',
    story:
      '도구마다 사이트를 따로 두면 도메인, 배포, 검색 색인이 흩어집니다. 하나의 Next.js 앱에 도구별 라우트(/eumyang, /juso, /pw, /id, /yacht, /janggi)와 네임스페이스로 분리한 마크다운 가이드를 모아 전부 빌드타임에 프리렌더하고, @opennextjs/cloudflare로 단일 Worker에 배포했습니다. 기존 Vercel 주소(jusobox, eumyang)는 301로 통합 도메인에 연결했습니다. 증강장기는 표준 장기 엔진 위에 증강을 Rules 플래그로 접어 넣어(foldRules) 행마 생성과 AI 평가가 같은 규칙을 공유하도록 설계했습니다.',
    achievement:
      '488개 페이지 전부 SSG, 재검증 없이 Workers 정적 자산을 읽기 전용 캐시로 서빙(R2/KV 등 추가 리소스 없음). 증강장기는 3티어 20종 증강, 상차림 4종, 증강을 인식하는 평가 함수 기반 AI 대국 지원. 방문자/수익 수치는 TODO(확인 필요).',
    stacks: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Cloudflare Workers', '@opennextjs/cloudflare', 'Vitest'],
    githubUrl: 'https://github.com/Seobeomsu/byeoltokki',
    liveUrl: 'https://byeoltokki.com',
    type: 'personal',
  },
  {
    id: 'jusobox',
    title: '📦 주소박스',
    subtitle: '한글 주소 → 해외결제 폼 필드 매핑',
    description:
      '한글 주소를 해외 결제/배송 폼의 Address Line 1, Address Line 2, City, State, ZIP에 맞게 나눠 필드별로 복사하는 도구. 아마존, 알리익스프레스, 스팀, 페이팔 등 쇼핑몰 프리셋 지원. jusobox.vercel.app은 현재 byeoltokki.com/juso로 리다이렉트.',
    story:
      '해외 결제 폼의 영문 주소 칸에 한글 주소를 어떻게 나눠 넣을지 매번 헷갈리는 문제에서 출발했습니다. 행안부 영문주소 API를 서버 라우트에서 키를 숨긴 채 프록시(6초 타임아웃)하고, 응답을 순수 함수로 필드별 매핑했습니다. 시도 영문명으로 광역시와 도를 판별해 City/State를 채우고, 상세주소(동/호수)는 로마자로 변환합니다.',
    achievement:
      '필드별 원클릭 복사, 쇼핑몰 프리셋, 주소 관련 가이드 글 20편. 프리셋 URL(/juso/amazon 등)은 해당 가이드로 301 통합. 이용자 수치는 TODO(확인 필요).',
    stacks: ['Next.js Route Handler', 'TypeScript', '행안부 주소(juso) API'],
    githubUrl: 'https://github.com/Seobeomsu/byeoltokki',
    liveUrl: 'https://byeoltokki.com/juso',
    type: 'personal',
  },
  {
    id: 'eumyang',
    title: '🌙 음양력 변환기',
    subtitle: '음력 ↔ 양력 변환, 명절/간지/띠 계산',
    description:
      '음력과 양력을 즉시 변환하고 오늘의 음력, 음력 생일의 향후 양력 날짜, 제삿날, 간지와 띠를 계산하는 도구. 한국천문연구원(KASI) 역법 기준 1391~2050년 지원. eumyang.vercel.app은 현재 byeoltokki.com/eumyang으로 리다이렉트.',
    story:
      '사용한 korean-lunar-calendar 라이브러리는 인스턴스가 상태를 갖고, 지원 범위 밖 날짜 처리가 호출자 책임입니다. 호출마다 새 인스턴스를 만들고 범위를 검증해 실패 시 null을 돌려주는 순수 함수 래퍼로 감쌌습니다. 명절 연도별 페이지와 음력 일별 페이지처럼 내용이 얇은 템플릿 페이지는 허브 페이지로 301 통합해 색인 품질을 관리했습니다.',
    achievement:
      '변환 결과를 연례 종일 일정 .ics로 내보내기 지원, 역법 관련 가이드 글 19편. 이용자 수치는 TODO(확인 필요).',
    stacks: ['Next.js', 'TypeScript', 'korean-lunar-calendar', 'Vitest'],
    githubUrl: 'https://github.com/Seobeomsu/byeoltokki',
    liveUrl: 'https://byeoltokki.com/eumyang',
    type: 'personal',
  },
  {
    id: 'rabbit-farmer',
    title: '🥕 래빗 파머 (Rabbit Farmer)',
    subtitle: 'Unity 6.3 방치형 토끼 농장 게임 (개발 중)',
    description:
      'Unity 6000.3(6.3)으로 만드는 방치형 토끼 농장 게임. 비공개 저장소로 개발 진행 중. 모바일 타깃 여부와 공개 일정은 TODO(확인 필요).',
    story:
      '저장소에 README가 없어 기획 의도와 핵심 설계는 TODO(확인 필요)입니다. 저장소에는 docs/spec(architecture, game-design, modules), docs/plan, Assets/Tests, qa, tools 디렉터리가 있어 설계 문서와 테스트를 두고 개발하는 구조라는 점만 확인했습니다.',
    achievement: 'TODO(확인 필요): 공개 README가 없어 성과 서술 보류. 저장소 공개 또는 README 작성 후 채울 것.',
    stacks: ['Unity 6000.3.25f1', 'C#', 'TextMesh Pro'],
    githubUrl: 'https://github.com/Seobeomsu/rabbit-farmer',
    type: 'personal',
  },
]
