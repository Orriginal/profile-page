<script setup lang='ts'>
import LibHeader from '../LibHeader/LibHeader.vue'

const props = defineProps<{
    /**
     * The label of the button
     */
    label: string,
}>()
</script>

<template>
    <div class='p-4 flex place-content-between items-center'>
        <lib-header class='whitespace-nowrap' :label='props.label' />
        <slot/>
    </div>
    <hr />
</template>