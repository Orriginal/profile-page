import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import VueRouter        from 'unplugin-vue-router/vite'
import vue              from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        VueRouter(),
        vue()
    ],
    resolve: {
        alias: {
            '@'   : fileURLToPath(new URL('./src', import.meta.url)),
            '@lib': fileURLToPath(new URL('./src/library', import.meta.url))
        }
    }
})
