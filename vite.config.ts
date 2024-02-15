import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('aab-')
        }
      }
    })
  ],
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'aab-product-detail',
      // the proper extensions will be added
      fileName: 'aab-product-detail'
    }
  },
  define: {
    'process.env': process.env
  }
})
