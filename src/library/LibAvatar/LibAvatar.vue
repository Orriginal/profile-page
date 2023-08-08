<script setup lang='ts'>
import { computed, ref } from 'vue'
import LibCircularLoader from '@lib/LibCircularLoader/LibCircularLoader.vue'
import EditIcon          from '@/components/Icons/EditIcon.vue'

interface Props {
    /**
     * The alternative text for the image
     */
    alt: string;

    /**
     * The source URL of the image
     */
    src?: string | null;

    /**
     * The size of the image: 'big', 'medium', or 'small'
     */
    size?: 'big' | 'medium' | 'small';

    /**
     * Enables editing overlay for the avatar
     */
    editable?: boolean;

    /**
     * Displays a loading state
     */
    isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'big',
    src: null,
    editable: false,
    isLoading: false,
});

const fileUploader = ref<HTMLInputElement | null>(null)

const emit = defineEmits<{
    (e: 'fileChange', file: File): File;
}>()

const sizeImageClasses = computed((): Record<string, boolean> => ({
    'w-40 h-40': props.size === 'big',
    'w-20 h-20': props.size === 'medium',
    'w-10 h-10': props.size === 'small'
}))

const openFileUploader = (): void => {
    fileUploader.value?.click()
}

const emitUploadedFile = (): void => {
    const fileUploaderElement = fileUploader.value

    if (!fileUploaderElement?.files) {
        return
    }

    const file = fileUploaderElement.files.length > 0 ? fileUploaderElement.files[0] : null

    if (file) {
        emit('fileChange', file)
    }
}
</script>

<template>
    <div class='flex relative justify-center'>
        <input
            v-if='editable'
            ref='fileUploader'
            accept='.jpg, .png, .jpeg'
            type='file'
            class='hidden'
            @change='emitUploadedFile'
        />
        <div
            v-if='editable'
            :class='sizeImageClasses'
            class='select-none cursor-pointer rounded-full flex justify-center pb-2 items-end absolute text-brand-text-primary bg-gradient-to-t from-brand-primary from-10% via-transparent via-40% to-transparent'
            @click='openFileUploader'
        >
            <div
                v-if='!isLoading'
                class='flex items-center justify-center gap-1'
            >
               <edit-icon /> Edit
            </div>
        </div>
        <img
            v-if='src && !isLoading'
            :class='sizeImageClasses'
            class='rounded-full ring-brand-white object-cover shadow-xl'
            :src='src'
            :alt='props.alt'
        />
        <svg
            v-else-if='!isLoading'
            :class='sizeImageClasses'
            class='rounded-full text-gray-400 bg-gray-300 ring-brand-white border-white border'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fill-rule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                clip-rule='evenodd'
            />
        </svg>
        <div
            v-else-if='isLoading'
            :class='sizeImageClasses'
            class='rounded-full bg-gray-200 ring-brand-white border-white border flex items-center justify-center'
        />
        <lib-circular-loader
            v-if='isLoading'
            class='absolute top-0'
        />
    </div>
</template>