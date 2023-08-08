<script setup lang='ts'>
import LibTextField from '@lib/LibTextField/LibTextField.vue'

interface Props
{
    /**
     * Label text above the input
     */
    label: string;
    /**
     * Change from static data to input
     */
    edit: boolean;
    /**
     * Type of input
     */
    type?: 'email' | 'password' | 'text';
}

const props = withDefaults(defineProps<Props>(), {
    'type': 'text'
})

const modelValue = defineModel<string>('modelValue', { local: true })
</script>

<template>
    <div>
        <div
            v-if='props.label'
            class='block text-sm font-medium text-gray-900'
        >
            {{ props.label }}
        </div>
        <template v-if='props.edit'>
            <div class='mt-1'>
                <lib-text-field
                    v-model='modelValue'
                    :type='props.type'
                />
            </div>
        </template>
        <template v-else>
            <div class='text-sm text-brand-text-secondary leading-4 py-2.75'>{{ modelValue }}</div>
        </template>
    </div>
</template>