import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "ornate-table",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        "react",
        "react-dom",
        "tailwindcss",
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [dts()],
});
