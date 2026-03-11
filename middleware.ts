import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith("/enquete")) {
    return NextResponse.next()
  }

  if (pathname.startsWith("/dossier")) {
    const auth = req.cookies.get("dossier_auth")
    if (!auth || auth.value !== "1") {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dossier/:path*", "/enquete/:path*"],
}
