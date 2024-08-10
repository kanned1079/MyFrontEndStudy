import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { DevUiResolver } from 'unplugin-vue-components/resolvers'
// 第一步导入插件
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(), // 第二步使用插件
      Components({
        resolvers: [
            DevUiResolver()
        ]
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
