import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { pathname } = request.nextUrl;
  if ((session && pathname === "/login") || pathname === "/register") {
    return NextResponse.redirect(new URL("/my-profile", request.url));
  }
  if (!session && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*", "/my-profile", "/login", "/register"],
};
