import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    AUTH_TRUST_HOST: z.string().optional(),
    AUTH_SECRET: z.string().nonempty(),
  },
  experimental__runtimeEnv: process.env,
  skipValidation: process.env.IS_ACTION === "true",
});
