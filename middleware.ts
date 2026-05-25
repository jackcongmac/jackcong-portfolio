import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Gates /case-study/* behind a dedicated case-study password.
 * Separate from the portfolio password (which is semi-public on the resume) —
 * uses its own env var (CASE_STUDY_PASSWORD) and its own cookie (case_study_auth).
 * Reuses the existing /password page UI; /api/auth knows which password to check
 * based on the `from` param.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const expectedToken =
    process.env.CASE_STUDY_AUTH_TOKEN ?? process.env.CASE_STUDY_PASSWORD ?? ''

  const auth = request.cookies.get('case_study_auth')?.value
  if (auth && expectedToken && auth === expectedToken) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/password'
  url.searchParams.set('from', pathname)
  return NextResponse.redirect(url)
}

export const config = {
  // Only intercept /case-study and anything under it.
  matcher: ['/case-study/:path*'],
}
