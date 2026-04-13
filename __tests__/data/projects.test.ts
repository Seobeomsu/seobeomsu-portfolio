import { projects, type Project } from '@/data/projects'

describe('projects data', () => {
  it('3개의 프로젝트가 있다', () => {
    expect(projects).toHaveLength(3)
  })

  it('각 프로젝트에 필수 필드가 있다', () => {
    projects.forEach((p: Project) => {
      expect(p.id).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.description).toBeTruthy()
      expect(p.story).toBeTruthy()
      expect(p.achievement).toBeTruthy()
      expect(p.stacks).toBeInstanceOf(Array)
      expect(p.githubUrl).toBeTruthy()
      expect(p.type).toMatch(/^(graduation|team|personal)$/)
    })
  })

  it('별도리가 첫 번째(featured) 프로젝트다', () => {
    expect(projects[0].id).toBe('byeoldori')
    expect(projects[0].featured).toBe(true)
  })
})
