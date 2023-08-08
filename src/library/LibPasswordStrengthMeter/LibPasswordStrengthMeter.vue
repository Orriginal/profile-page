<script setup lang='ts'>
import { computed } from 'vue'

interface Props
{
    /**
     * Show the password strength meter
     */
    show: boolean;
    /**
     * Value to show how strong it is
     */
    value: string;
    /**
     * Make it position relative to its content
     */
    relative?: boolean
}

interface Rule
{
    label: string,
    isSucceeded: boolean
}

const props = withDefaults(defineProps<Props>(), { show: false, relative: false })

const rules = computed<Rule[]>(() => ([
    {
        label      : 'Upper & lower case letters',
        isSucceeded: /[A-Z]/.test(props.value) && /[a-z]/.test(props.value)
    },
    {
        label      : 'A symbol (#$&!_-.)',
        isSucceeded: /[#$&!_\-.]/.test(props.value)
    },
    {
        label      : 'A longer password (min. 12 chars.)',
        isSucceeded: props.value.length >= 12
    }
]))

const successCount = computed<number>(() => rules.value.filter(rule => rule.isSucceeded).length)

const progressColor = computed<'bg-red-500' | 'bg-orange-500' | 'bg-green-500'>(() => {
    if (successCount.value === 0) {
        return 'bg-red-500'
    }
    return successCount.value < rules.value.length ? 'bg-orange-500' : 'bg-green-500'
})
</script>

<template>
    <div
        role='tooltip'
        :class='{
            "opacity-1": props.show,
            "opacity-0": !props.show,
            "absolute -translate-y-1/2": !props.relative,
            "relative": props.relative
        }'
        class='z-10 inline-block text-sm text-gray-500 duration-300 bg-white border border-gray-200 rounded-md shadow-lg w-72 transition-opacity top-0  pointer-events-none'
    >
        <div class='p-3 space-y-2'>
            <div class='grid grid-cols-4 gap-2'>
                <div
                    :class='`${progressColor}`'
                    class='h-1'
                />
                <div
                    v-for='index in rules.length'
                    :key='index'
                    :class='index <= successCount ? progressColor : "bg-gray-200"'
                    class='h-1'
                />
            </div>
            <p>It’s better to have:</p>
            <ul>
                <li
                    v-for='(rule, index) in rules'
                    :key='index'
                    class='flex items-center mb-1'
                >
                    <svg
                        v-if='rule.isSucceeded'
                        class='w-3.5 h-3.5 mr-2 text-green-400 dark:text-green-500' aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'>
                        <path
                            stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                            d='M1 5.917 5.724 10.5 15 1.5' />
                    </svg>
                    <svg
                        v-else
                        class='w-3 h-3 mr-2.5 text-gray-300 dark:text-gray-400' aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
                        <path
                            stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                            d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
                    </svg>
                    {{ rule.label }}
                </li>
            </ul>
        </div>
    </div>
</template>