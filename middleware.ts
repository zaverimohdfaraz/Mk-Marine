import { NextRequest, NextResponse } from "next/server";

// NOTE: this only checks that a "mk_user" cookie exists — it does not
// verify a real session, since there is no real auth yet (see lib/auth.ts
// and the README). It exists so /portal/* routes are never reachable with
// literally no login step, and should be replaced with real session
// verification once Phase 2 hardening (real auth) is implemented.

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPortalRoute = pathname.startsWith("/portal");
  const isLoginRoute = pathname === "/portal/login";

  if (isPortalRoute && !isLoginRoute) {
    const hasDemoSession = request.cookies.has("mk_user");
    if (!hasDemoSession) {
      const loginUrl = new URL("/portal/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal/:path*"],
};
