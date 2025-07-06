import { handlers } from "@/auth/auth";

// const reqWithTrustedOrigin = (req: NextRequest): NextRequest => {
//   if (env.AUTH_TRUST_HOST !== "true") return req;
//   const host = req.headers.get("x-forwarded-host");
//   if (!host) {
//     console.warn("Missing x-forwarded-host headers.");
//     return req;
//   }
//   const envOrigin = `https://${host}`;
//   const { href, origin } = req.nextUrl;
//   return new NextRequest(href.replace(origin, envOrigin), req);
// };

// export const GET = (req: NextRequest) => {
//   return handlers.GET(reqWithTrustedOrigin(req));
// };

// export const POST = (req: NextRequest) => {
//   return handlers.POST(reqWithTrustedOrigin(req));
// };

export const { GET, POST } = handlers;
