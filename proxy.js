import { NextResponse } from 'next/server'

export function proxy(request) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  if (pathname === '/' || pathname === '') {
    return NextResponse.rewrite(new URL('/index.html', request.url))
  }

  return NextResponse.redirect(new URL('/index.html', request.url))
}
