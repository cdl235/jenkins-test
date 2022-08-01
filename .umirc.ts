import postrem from "postcss-pxtorem";
import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "pnpm",

  extraPostCSSPlugins: [
    postrem({
      rootValue: 37.5,
      propList: ["*"],
    }),
  ],
});
