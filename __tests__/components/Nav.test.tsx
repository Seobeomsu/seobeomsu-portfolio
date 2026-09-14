import { render, screen } from '@testing-library/react'
import Nav from '@/components/Nav'

describe('Nav', () => {
  it('로고 텍스트를 렌더링한다', () => {
    render(<Nav />)
    expect(screen.getByText(/seobeomsu/i)).toBeInTheDocument()
  })
  it('연락하기 링크가 있다', () => {
    render(<Nav />)
    const link = screen.getByRole('link', { name: /연락하기/ })
    expect(link).toHaveAttribute('href', '#contact')
  })
  it('GitHub 링크가 있다', () => {
    render(<Nav />)
    const link = screen.getByRole('link', { name: /github/i })
    expect(link).toHaveAttribute('href', 'https://github.com/Seobeomsu')
  })
})
