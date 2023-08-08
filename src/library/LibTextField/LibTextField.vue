<script setup lang='ts'>
interface Props
{
    /**
     * Label text above the input
     */
    label?: string | null;
    /**
     * The placeholder of the input
     */
    placeholder?: string;
    /**
     * Makes that the input has to be filled
     */
    required?: boolean,
    /**
     * Type of input
     */
    type?: 'email' | 'password' | 'text'
}

const props = withDefaults(defineProps<Props>(), { type: 'text', placeholder: '', required: false, label: null })

const modelValue = defineModel<string>('modelValue', { local: true })
</script>

<template>
    <div
        v-if='props.label'
        class='block text-sm font-medium text-gray-900'
    >
        {{ props.label }}
    </div>
    <input
        v-bind="$attrs"
        v-model='modelValue'
        :type='props.type'
        class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-brand-primary-light block w-full px-2.5 py-1.5 text-sm'
        :placeholder='props.placeholder'
        :required='props.required'
        autocomplete=''
        @click='e => (e.target as HTMLInputElement).select()'
    >
</template>