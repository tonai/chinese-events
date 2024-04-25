import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/chinese-events/",
  build: {
    assetsDir: "code",
    cssMinify: true,
    lib: false,
    sourcemap: true,
    target: ["esnext"],
  },
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      injectManifest: {
        globDirectory: "dist",
        globPatterns: ["**/*.{html,js,css,json,png}"],
        swDest: "dist/sw.js",
        swSrc: "public/sw.js",
      },
      injectRegister: false,
      manifest: false,
      strategies: "injectManifest",
    }),
  ],
});
