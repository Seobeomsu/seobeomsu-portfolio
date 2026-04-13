import { render, screen, fireEvent } from '@testing-library/react'
import ProjectModal from '@/components/ui/ProjectModal'
import { projects } from '@/data/projects'

describe('ProjectModal', () => {
  const project = projects[0]
  const onClose = jest.fn()

  beforeEach(() => onClose.mockClear())

  it('프로젝트 제목을 표시한다', () => {
    render(<ProjectModal project={project} onClose={onClose} />)
    expect(screen.getByText(/별도리/)).toBeInTheDocument()
  })
  it('핵심 성과를 표시한다', () => {
    render(<ProjectModal project={project} onClose={onClose} />)
    expect(screen.getByText(/JSON/)).toBeInTheDocument()
  })
  it('닫기 버튼 클릭 시 onClose를 호출한다', () => {
    render(<ProjectModal project={project} onClose={onClose} />)
    fireEvent.click(screen.getByRole('button', { name: /닫기/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
  it('배경 클릭 시 onClose를 호출한다', () => {
    render(<ProjectModal project={project} onClose={onClose} />)
    fireEvent.click(screen.getByTestId('modal-backdrop'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
