import { auth } from "@/auth/auth";
import { NextResponse } from "next/server";
import { RouteAccessRule } from "./utils/routes/validateRoute";

// Define your access rules
const routeRules: Array<RouteAccessRule> = [
  { routeType: "user", allowedRoles: ["user", "admin"] },
  { routeType: "admin", allowedRoles: ["admin"] },
  { routeType: "company", allowedRoles: ["company", "admin"] },
];

export default auth((req) => {
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
