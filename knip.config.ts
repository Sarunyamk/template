import { type KnipConfig } from "knip";

const config: KnipConfig = {
  ignore: ["lint-staged.config.ts"],
  ignoreDependencies: [
    "postcss-load-config",
    "eslint-config-next",
    "@commitlint/cli",
    "@eslint/js",
    "eslint-plugin-prettier",
    "postcss",
    "prisma-dbml-generator",
  ],
};

export default config;
