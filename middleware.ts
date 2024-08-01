import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('logged', request.url);
  const isAuthPage = request.url.endsWith('/auth');
  const token = request.cookies.get('AccessToken')?.value;

  if (isAuthPage && token) {
    const response = NextResponse.next();
    response.cookies.delete('AccessToken');
    return response;
  }

  if (!isAuthPage && !token) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/profile/:path*', '/auth'],
};
