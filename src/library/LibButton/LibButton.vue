<script lang='ts' setup>
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    /**
     * Visible look of the button by type
     */
    type?: 'primary' | 'secondary' | 'error',
    /**
     * Icon button
     */
    icon?: boolean
}>(), { type: 'primary', icon: false })

const emit = defineEmits<{
    (e: 'click'): void;
}>()

const classes = computed((): Record<string, boolean> => ({
    'px-3 py-1.5 hover:contrast-125'                                                                                 : !props.icon,
    'border border-brand-primary text-brand-primary bg-brand-secondary hover:bg-gray-200 hover:outline-primary-light': props.type === 'secondary' && !props.icon,
    'border border-red-500 text-red-500 bg-brand-secondary'                                                          : props.type === 'error' && !props.icon,
    'text-brand-text-primary bg-brand-primary'                                                                       : props.type === 'primary' && !props.icon,
    'w-5 h-5 border brand-border-color hover:gray-200 hover:bg-gray-200'                                             : props.icon
}))

const onClick = (): void => {
    emit('click')
}
</script>

<template>
    <button
        type='button'
        :class='classes'
        class='flex whitespace-nowrap justify-center rounded hover:outline-brand-primary-light outline-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 outline-brand-primary-light'
        @click='onClick'
    >
        <slot />
    </button>
</template>

