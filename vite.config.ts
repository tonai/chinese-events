import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL ?? "/chinese-events/",
  build: {
    assetsDir: "code",
    cssMinify: true,
    lib: false,
    sourcemap: true,
    target: ["esnext"],
  },
  plugins: [
    react(),
    svgr(),
    VitePWA({
      devOptions: {
        // enabled: true,
      },
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
});
