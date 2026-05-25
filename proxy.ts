import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_PATHS = ['/password', '/api/auth']

/**
 * Two-tier password gate (Next.js 16 proxy convention).
 *
 *   /case-study/*  → CASE_STUDY_PASSWORD  (private; not on resume)
 *                    cookie: case_study_auth
 *   anything else  → PORTFOLIO_PASSWORD   (semi-public; appears on resume)
 *                    cookie: portfolio_auth
 *
 * /password and /api/auth are always public.
 * For non-case-study paths, common static asset extensions (resume PDF,
 * profile images, fonts) pass through. For /case-study/* nothing passes
 * through unsigned — every deck asset (videos, images) is gated too.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Always public
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next()
  }
  if (pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  const isCaseStudy = pathname.startsWith('/case-study')

  // Non-case-study static assets pass through (resume PDF, profile images, fonts).
  // Case-study assets are NOT exempted — deck videos and slides must stay gated.
  if (!isCaseStudy) {
    if (pathname.startsWith('/fonts')) return NextResponse.next()
    if (pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|gif|mp4|pdf)$/)) {
      return NextResponse.next()
    }
  }

  const expectedToken = isCaseStudy
    ? (process.env.CASE_STUDY_AUTH_TOKEN ?? process.env.CASE_STUDY_PASSWORD ?? '')
    : (process.env.PORTFOLIO_AUTH_TOKEN ?? process.env.PORTFOLIO_PASSWORD ?? '')
  const cookieName = isCaseStudy ? 'case_study_auth' : 'portfolio_auth'

  const auth = request.cookies.get(cookieName)?.value
  if (auth && expectedToken && auth === expectedToken) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/password'
  url.searchParams.set('from', pathname)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
