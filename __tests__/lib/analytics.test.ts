import { extractRefParam, buildTrackingPayload } from '@/lib/analytics'

describe('extractRefParam', () => {
  it('ref 파라미터가 있으면 반환한다', () => {
    expect(extractRefParam('?ref=hyundai-autoever')).toBe('hyundai-autoever')
  })
  it('ref 파라미터가 없으면 null을 반환한다', () => {
    expect(extractRefParam('')).toBeNull()
    expect(extractRefParam('?utm_source=email')).toBeNull()
  })
  it('공백 ref는 null로 처리한다', () => {
    expect(extractRefParam('?ref=')).toBeNull()
  })
})

describe('buildTrackingPayload', () => {
  it('company 필드를 포함한 객체를 반환한다', () => {
    expect(buildTrackingPayload('kakao')).toEqual({ company: 'kakao' })
  })
})
