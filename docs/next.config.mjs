import { playground } from "rehype-playground/plugin";
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  mdxOptions: {
    rehypePlugins: [playground],
  },
});

export default withNextra();
