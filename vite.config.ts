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
        "newsletter-sign-up-with-success-message": resolve(
          junior,
          "newsletter-sign-up-with-success-message/index.html"
        ),
      },
    },
  },
});
