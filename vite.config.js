import { defineConfig, loadEnv } from 'vite'
import dayjs from 'dayjs'
import { resolve } from 'path'
import { createProxy } from './build/proxy'
import { wrapperEnv } from './build/getEnv'
import { createVitePlugins } from './build/plugins'
import pkg from './package.json'

const TIME = new Date().getTime()
const { dependencies, devDependencies, name, version } = pkg
// eslint-disable-next-line no-underscore-dangle
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
}

// @see: https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)

  return {
    base: viteEnv.VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "@/styles/var.scss";`
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      // Load proxy configuration from .env.development
      proxy: createProxy(viteEnv.VITE_PROXY),
    },
    plugins: createVitePlugins(viteEnv),
    esbuild: {
      pure: viteEnv.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
    },
    build: {
      target: 'esnext',
      // esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log
      // minify: "terser",
      // terserOptions: {
      // 	compress: {
      // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
      // 		drop_debugger: true
      // 	}
      // },
      sourcemap: false, // 是否生成源map
      commonjsOptions: {
        include: /node_modules|lib/,
      },
      outDir: 'dist',
      minify: 'esbuild',
      // 禁用 gzip 压缩大小报告，可略微减少打包时间
      reportCompressedSize: false,
      // 规定触发警告的 chunk 大小
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          // Static resource classification and packaging
          chunkFileNames: `assets/js/[name]-[hash].${TIME}.v${version}.js`,
          entryFileNames: `assets/js/[name]-[hash].${TIME}.v${version}.js`,
          assetFileNames: `assets/[ext]/[name]-[hash].${TIME}.v${version}.[ext]`,
          compact: true, // 这将缩小汇总生成的包装器代码。请注意，这不会影响用户编写的代码。此选项在捆绑预压缩代码时很有用
          manualChunks: {
            // 创建自定义共享公共块
            vue: ['vue', 'vue-router'],
          },
        },
      },
    },
  }
})
