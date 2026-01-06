import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const token = request.cookies.get("admin_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
    await jwtVerify(token, secret);

    // token is valid, allow access
    return NextResponse.next();
  } catch (err) {
    console.log("Middleware JWT verification failed:", err);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    '/admin/:path*', // protect all /admin routes
    '/projects/create/:path*',
    '/events/create/:path*',
    '/blogs/create/:path*',
    '/certificate/new/:path*'
  ], 
};
