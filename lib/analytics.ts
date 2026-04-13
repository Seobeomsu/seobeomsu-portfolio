export function extractRefParam(search: string): string | null {
  const params = new URLSearchParams(search)
  const ref = params.get('ref')
  return ref && ref.trim().length > 0 ? ref.trim() : null
}

export function buildTrackingPayload(company: string): { company: string } {
  return { company }
}
