import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  providers: [],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
};
