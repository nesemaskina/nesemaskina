import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5277,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development"].filter(Boolean),
  base: "/nesemaskina/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
