import "next-auth";
import "next-auth/jwt";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // interface Session {}
  /**
   * For NextAuth OAuthConfig.Profile Configuration
   */
  // interface User extends DefaultUser {}
}

declare module "next-auth/jwt" {
  // interface JWT extends DefaultJWT {}
}
