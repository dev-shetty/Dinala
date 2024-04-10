import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  console.log("middleware", request.url)
  const token = cookies().get("authjs.session-token")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url))
  }
}

export const config = {
  matcher: ["/dashboard"],
}
