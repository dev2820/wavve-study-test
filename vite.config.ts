import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

const __dirname = "./"
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src')},
      { find: '@mocks', replacement: path.resolve(__dirname, '__mocks__')}
    ]
  }
})
