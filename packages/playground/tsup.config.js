import { defineConfig } from "tsup";
import { promises as fs } from "fs";
import { join } from "path";

export default defineConfig({
  entryPoints: ["src/index.ts", "src/plugin/index.ts"],
  format: ["cjs", "esm"],
  target: "es2020",
  sourcemap: true,
  minify: true,
  dts: true,
  external: ["react", "react-dom"], // add any other external dependencies here
  exports: {
    ".": {
      require: "./dist/index.js",
      import: "./dist/index.mjs",
    },
    "./plugin": {
      import: "./dist/plugin/index.mjs",
    },
  },
});
