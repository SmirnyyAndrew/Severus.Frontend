import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      include: "**/*.svg",
    }),
    react(),
  ],

  resolve: {
    alias: {
      app: path.resolve(__dirname, "src/app"),
      shared: path.resolve(__dirname, "src/shared"),
      features: path.resolve(__dirname, "src/features"),
      widgets: path.resolve(__dirname, "src/widgets"),
      pages: path.resolve(__dirname, "src/pages"),
      entities: path.resolve(__dirname, "src/entities"),
    },
  },

  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify("http://localhost:28532"),
    __IS_STORYBOOK__: JSON.stringify(false),
  },
});
