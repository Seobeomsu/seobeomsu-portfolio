export interface SkillGroup {
  title: string
  skills: { name: string; main?: boolean; color?: string }[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend (Main)',
    skills: [
      { name: 'Java', main: true },
      { name: 'Spring Boot', main: true },
      { name: 'JPA / Hibernate', main: true },
      { name: 'MySQL', main: true },
      { name: 'Spring Security' },
      { name: 'REST API' },
      { name: 'JWT' },
    ],
  },
  {
    title: 'Cloud / DevOps',
    skills: [
      { name: 'GCP (Cloud Run)', main: true },
      { name: 'AWS S3' },
      { name: 'CloudFront' },
      { name: 'Docker' },
      { name: 'GitHub Actions' },
    ],
  },
  {
    title: 'Frontend / Mobile',
    skills: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'Flutter' },
      { name: 'Android' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'AI & Tools',
    skills: [
      { name: 'Claude Code', main: true, color: 'purple' },
      { name: 'Git / GitHub' },
      { name: 'IntelliJ IDEA' },
      { name: 'Postman' },
      { name: 'Notion' },
    ],
  },
]
