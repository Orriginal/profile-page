<script setup lang='ts'>
const props = withDefaults(defineProps<{
    /**
     * The label of the header
     */
    label: string,
    /**
     * Size of the header text
     */
    size?: 'text-xl' | 'text-2xl' | 'text-4xl'
}>(), { size: 'text-xl' })
</script>

<template>
    <span
        :class='`${props.size}`'
        class='text-brand-text-secondary font-semibold'
    >
        {{ props.label }}
    </span>
</template>