import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import VueRouter        from 'unplugin-vue-router/vite'
import vue              from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => ({
    plugins: [
        VueRouter(),
        vue({
            script: {
                defineModel: true
            }
        })
    ],
    base   : command === 'serve' ? '/' : '/profile-page/',
    resolve: {
        alias: {
            '@'   : fileURLToPath(new URL('./src', import.meta.url)),
            '@lib': fileURLToPath(new URL('./src/library', import.meta.url))
        }
    }
}))
