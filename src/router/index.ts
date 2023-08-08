import { createRouter, createWebHistory } from 'vue-router/auto'

// Routes are automatic by file structure in pages
const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL)
})
export default router
