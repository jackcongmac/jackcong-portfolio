import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_PATHS = ['/password', '/api/auth']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    PUBLIC_PATHS.some((p) => pathname.startsWith(p)) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/fonts') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|gif|mp4|pdf)$/)
  ) {
    return NextResponse.next()
  }

  const auth = request.cookies.get('portfolio_auth')?.value
  if (auth === process.env.PORTFOLIO_AUTH_TOKEN) {
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
