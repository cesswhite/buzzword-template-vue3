import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'


// https://vitejs.dev/config/
export default defineConfig({
  /* clearScreen: false,
  build: {
    sourcemap: true,
    target: 'es2022'
  }, */
  plugins: [
    Components({
      extensions: ['vue'],
      dts: true,
      deep: true,
      directoryAsNamespace: true,
      resolvers: [HeadlessUiResolver()],
    }),
    VueRouter({
      /*   dataFetching: true, */
      extensions: ['.vue'],
      routesFolder: './src/pages',
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      dirs: [
        './src/utils',
        './src/types',
        './src/composables',
        './src/store',
      ],
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          'pinia': [
            'defineStore',
            'storeToRefs',
          ]
        }
      ],
      dts: './src/auto-imports.d.ts',
      vueTemplate: true,
    }),
    vue({
      include: [/\.vue$/],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: [],
  },
})