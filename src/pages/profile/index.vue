<script setup lang='ts'>
import LibAvatar                  from '@lib/LibAvatar/LibAvatar.vue'
import { FileClient }             from '@/clients/FileClient'
import { ref }                    from 'vue'
import ProfileUserInformationCard from '@/components/Profile/ProfileUserInformationCard.vue'
import ProfileChangePasswordCard  from '@/components/Profile/ProfileChangePasswordCard.vue'

const imageUrl  = ref<string | null>(null)
const isLoading = ref<boolean>(true)

FileClient.getImageUrl('/avatar', (data: string) => {
    imageUrl.value  = data
    isLoading.value = false
})

const onFileChange = async (file: File): Promise<void> => {
    // Always do validation and because it is an "image" also sanitation to make sure it is really an image
    isLoading.value = true
    await FileClient.upload('/avatar', file)
}
</script>

<template>
    <div class='flex flex-col gap-8 w-full md:max-w-lg h-fit'>
        <lib-avatar
            :src='imageUrl'
            :is-loading='isLoading'
            alt='Profile settings avatar'
            editable
            @file-change='onFileChange'
        />
        <profile-user-information-card />
        <profile-change-password-card />
    </div>
</template>