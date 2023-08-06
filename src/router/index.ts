import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL)
})

export default router
