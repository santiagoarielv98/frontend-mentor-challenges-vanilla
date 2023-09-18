import { resolve } from "path";
import { defineConfig } from "vite";

const junior = resolve(__dirname, "src/junior");

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/frontend-mentor-challenges/" : "/",
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        // junior
        other: resolve(junior, "other/index.html"),
        another: resolve(junior, "another/index.html"),
      },
    },
  },
});
