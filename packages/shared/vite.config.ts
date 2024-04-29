import { resolve } from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "chinese-events-shared",
      formats: ["cjs", "es"],
      name: "chinese-events-shared",
    },
    rollupOptions: {
      external: [
        "@mantine/core",
        "@mantine/hooks",
        "react",
        "react/jsx-runtime",
      ],
    },
  },
  plugins: [react(), svgr()],
});
