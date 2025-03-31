import { fileURLToPath, URL } from 'node:url'
import Tailwindcss from '@tailwindcss/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueDevTools(),
    vue(),
    Tailwindcss(),
    AutoImport({
      dts: './auto-imports.d.ts',
      imports: ['vue', '@vueuse/core', 'vue-router', 'pinia'],
      resolvers: [
        VantResolver(),
      ],
    }),
    Components({
      dts: true,
      resolvers: [
        VantResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8888,
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
    // 禁用 gzip 压缩大小报告，可略微减少打包时间
    reportCompressedSize: false,
    // 规定触发警告的 chunk 大小
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
})
