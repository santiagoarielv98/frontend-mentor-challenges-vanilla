import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "rest-countries": resolve(__dirname, "src/advanced/rest-countries/index.html"),
        "results-summary": resolve(__dirname, "src/newbie/1_results-summary-component/index.html"),
        "product-preview": resolve(__dirname, "src/newbie/2_product-preview-card-component/index.html"),
        "interactive-rating": resolve(__dirname, "src/newbie/3_interactive-rating-component/index.html"),
        "qr-code": resolve(__dirname, "src/newbie/4_qr-code-component/index.html"),
        "nft-preview": resolve(__dirname, "src/newbie/5_nft-preview-card-component/index.html"),
        "order-summary": resolve(__dirname, "src/newbie/6_order-summary-component/index.html"),
      },
    },
  },
});
