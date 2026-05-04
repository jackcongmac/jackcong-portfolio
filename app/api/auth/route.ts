import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { password } = await request.json()

  if (password !== process.env.PORTFOLIO_PASSWORD) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
  }

  const token = process.env.PORTFOLIO_AUTH_TOKEN ?? process.env.PORTFOLIO_PASSWORD ?? ''
  const from = request.nextUrl.searchParams.get('from') ?? '/'

  const response = NextResponse.json({ ok: true })
  response.cookies.set('portfolio_auth', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })

  return response
}
