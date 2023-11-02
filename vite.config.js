// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { name } from './package.json'

console.log(name);

export default defineConfig({
  base: `/${name}`,
  plugins: [],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  }
})
