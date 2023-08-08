<script setup lang='ts'>
import LibCard                                   from '@lib/LibCard/LibCard.vue'
import LibCardContent                            from '@lib/LibCard/LibCardContent.vue'
import LibCardHeader                             from '@lib/LibCard/LibCardHeader.vue'
import LibButton                                 from '@lib/LibButton/LibButton.vue'
import EditIcon                                  from '@/components/Icons/EditIcon.vue'
import { ref }                                   from 'vue'
import CheckIcon                                 from '@/components/Icons/CheckIcon.vue'
import LibEditableField                          from '@lib/LibEditableField/LibEditableField.vue'
import LibCardFooter                             from '@lib/LibCard/LibCardFooter.vue'
import { ProfileClient, type ProfileDataObject } from '@/clients/ProfileClient'

const profileData         = ref<Partial<ProfileDataObject>>({})
const profileDataSnapshot = ref<Partial<ProfileDataObject>>({})
const isInEditMode        = ref<boolean>(false)

// Set up a realtime data stream
ProfileClient.getProfile((data: ProfileDataObject) => {
    profileDataSnapshot.value = { ...data }
    profileData.value         = data
})

const switchEditMode = (): void => {
    isInEditMode.value = !isInEditMode.value
}

const cancelProfileUpdate = (): void => {
    profileData.value = profileDataSnapshot.value
    switchEditMode()
}

const updateProfile = async (): Promise<void> => {
    // Always do validation before do this
    await ProfileClient.updateProfile(profileData.value as ProfileDataObject)
    switchEditMode()
}
</script>

<template>
    <lib-card class='max-w-4xl w-full shadow'>
        <lib-card-header label='User information'>
            <lib-button
                icon
                @click='isInEditMode ? updateProfile() : switchEditMode()'
            >
                <check-icon v-if='isInEditMode' />
                <edit-icon
                    v-else
                    color-class='fill-gray-500 hover:fill-gray-600'
                />
            </lib-button>
        </lib-card-header>
        <lib-card-content class='flex flex-col gap-4'>
            <form>
                <lib-editable-field
                    v-model='profileData.name'
                    :edit='isInEditMode'
                    label='Name'
                    required
                />
                <lib-editable-field
                    :model-value='profileData.email'
                    :edit='isInEditMode'
                    label='Email'
                    type='email'
                    required
                />
                <lib-editable-field
                    :model-value='profileData.address'
                    :edit='isInEditMode'
                    label='Address'
                    required
                />
                <lib-editable-field
                    :model-value='profileData.phoneNumber'
                    :edit='isInEditMode'
                    label='Phone number'
                    required
                />
            </form>
        </lib-card-content>
        <lib-card-footer>
            <template v-if='isInEditMode'>
                <lib-button
                    type='error'
                    @click='cancelProfileUpdate'
                >
                    Cancel
                </lib-button>
                <lib-button
                    type='secondary'
                    @click='updateProfile'
                >
                    Update
                </lib-button>
            </template>
            <template v-else>
                <div/>
                <lib-button
                    type='secondary'
                    @click='switchEditMode'
                >
                    Edit
                </lib-button>
            </template>
        </lib-card-footer>
    </lib-card>
</template>