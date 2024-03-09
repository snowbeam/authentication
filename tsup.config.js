import { defineConfig } from "tsup";

/** @type {import('tsup').Options} */
const tsupConfig = {
  splitting: true,
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ["cjs", "esm"], // generate cjs and esm files
  minify: process.env.NODE_ENV === "production",
  bundle: process.env.NODE_ENV === "production",
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
  watch: process.env.NODE_ENV === "development",
  target: "es2020",
  outDir: "dist",
  entry: ["src/**/*.ts"], //include all files under src
};

export default defineConfig(tsupConfig);
