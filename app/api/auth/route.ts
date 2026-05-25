import { NextRequest, NextResponse } from 'next/server'

/**
 * Two-tier password endpoint:
 *  - Destinations under /case-study/* require CASE_STUDY_PASSWORD (private).
 *  - Everything else uses PORTFOLIO_PASSWORD (semi-public, on the resume).
 * Tiers use separate cookies so authing into one does not grant the other.
 */
export async function POST(request: NextRequest) {
  const { password } = await request.json()
  const from = request.nextUrl.searchParams.get('from') ?? '/'
  const isCaseStudy = from.startsWith('/case-study')

  const expectedPassword = isCaseStudy
    ? process.env.CASE_STUDY_PASSWORD
    : process.env.PORTFOLIO_PASSWORD

  if (!expectedPassword || password !== expectedPassword) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
  }

  const cookieName = isCaseStudy ? 'case_study_auth' : 'portfolio_auth'
  const token = isCaseStudy
    ? (process.env.CASE_STUDY_AUTH_TOKEN ?? process.env.CASE_STUDY_PASSWORD ?? '')
    : (process.env.PORTFOLIO_AUTH_TOKEN ?? process.env.PORTFOLIO_PASSWORD ?? '')

  const response = NextResponse.json({ ok: true })
  response.cookies.set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })

  return response
}
