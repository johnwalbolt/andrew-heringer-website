import { NextRequest, NextResponse } from "next/server";

// Site-wide password protection (HTTP Basic Auth).
//
// The password below is a fallback so the live site is protected immediately.
// For real security, set SITE_PASSWORD in Vercel → Project → Settings →
// Environment Variables (it overrides this value without a code change).
const PASSWORD = process.env.SITE_PASSWORD || "heringer";

export function middleware(req: NextRequest) {
  // Don't gate local development so `next dev` stays frictionless.
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    const decoded = atob(auth.slice(6));
    const password = decoded.slice(decoded.indexOf(":") + 1);
    if (password === PASSWORD) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Andrew Heringer", charset="UTF-8"',
    },
  });
}

export const config = {
  // Protect everything except Next.js internals and the favicon.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
