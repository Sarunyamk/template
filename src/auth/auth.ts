import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  callbacks: {
    async signIn({ account }) {
      switch (account?.provider) {
        case "credentials":
          return true;
        case "relearn-idp":
          //TODO: Implement relearn IDP sign in
          return true;
        default:
          return false;
      }
    },
    async jwt({ token, user }) {
      if (!user) return token;

      //TODO: Implement Token Assignment

      return token;
    },
    async session({ session }) {
      //TODO: Implement Session Assignment

      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  pages: {
    // newUser: FrontendRouteTargets.PROFILE_SETUP,
    // signIn: FrontendRouteTargets.AUTH_SIGN_IN,
    // error: FrontendRouteTargets.SIGN_IN_ERROR,
    // verifyRequest: FrontendRouteTargets.VERIFY_EMAIL,
  },
  debug: process.env.NODE_ENV === "development",
});
