import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const session: boolean = true;

export function middleware(request: NextRequest) {
  if (!session) {
    return NextResponse.rewrite(new URL("/courses", request.url));
  } else {
    return NextResponse.rewrite(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
