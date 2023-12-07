import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname !== '/') {
        return NextResponse.redirect(new URL('/', request.url))
    }
//   return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}