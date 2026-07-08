import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  target: "node18",
  // React is a peer dependency; don't bundle it into the output.
  external: ["react"],
})
