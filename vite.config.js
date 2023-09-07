import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // advanced
        'rest-countries': resolve(__dirname, 'src/advanced/rest-countries/index.html'),
        entertainment: resolve(__dirname, 'src/advanced/entertainment/index.html')
      }
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/frontend-mentor-challenges-vanilla/' : '/'
})
