import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(req: NextRequest) {

        return NextResponse.redirect(new URL('/', req.url)) 

//   return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/climate-change-solutions/:path*', 
        '/food-agriculture-innovation/:path*', 
        '/supply-chain-resilience/:path*', 
        '/human-health/:path*', 
        '/cross-cutting-advances/:path*']
}