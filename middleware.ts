import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  console.log(request.cookies.get("token")?.value);

  if (request.cookies.get("token")?.value === undefined) {
    console.log("No token found, redirecting to login page.");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
