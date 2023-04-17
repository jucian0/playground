import { playground } from "remark-playground/plugin";
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  mdxOptions: {
    remarkPlugins: [playground],
  },
});

export default withNextra();
