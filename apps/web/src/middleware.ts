import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Add paths that don't require authentication
const publicPaths = ['/auth/login', '/auth/register', '/auth/forgot-password']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is public
  if (publicPaths.includes(pathname)) {
    return NextResponse.next()
  }

  // Get the token from the cookies
  const token = request.cookies.get('token')?.value

  // If there's no token, redirect to login
  if (!token) {
    const url = new URL('/auth/login', request.url)
    url.searchParams.set('from', pathname)
    return NextResponse.redirect(url)
  }

  try {
    // Verify the token
    verify(token, JWT_SECRET)
    return NextResponse.next()
  } catch (error) {
    // If the token is invalid, redirect to login
    const url = new URL('/auth/login', request.url)
    url.searchParams.set('from', pathname)
    return NextResponse.redirect(url)
  }
}

// Configure the paths that should be protected
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
} 