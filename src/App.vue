<script setup lang="ts">
import { RouterView } from 'vue-router'

console.log(' routes ',  import.meta.env.VITE_BASE_URL)
</script>

<template>
    <main class='flex flex-1 items-center justify-center h-full w-full-vw'>
        <RouterView />
    </main>
</template>
