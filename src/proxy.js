import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const pathname = request.nextUrl.pathname;

  // If user is not logged in
  if (!session) {

    const loginUrl = new URL("/login", request.url);

    // Save current route
    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  // Continue request
  return NextResponse.next();
}

export const config = {
  matcher: ["/myprofile", "/products/:path"],
};