<script setup lang='ts'>
import LibTextField                from '@lib/LibTextField/LibTextField.vue'
import LibCardHeader               from '@lib/LibCard/LibCardHeader.vue'
import LibCard                     from '@lib/LibCard/LibCard.vue'
import LibCardContent              from '@lib/LibCard/LibCardContent.vue'
import { reactive, ref }           from 'vue'
import LibCardFooter               from '@lib/LibCard/LibCardFooter.vue'
import LibButton                   from '@lib/LibButton/LibButton.vue'
import type { PasswordDataObject } from '@/clients/PasswordClient'
import LibPasswordStrengthMeter    from '@lib/LibPasswordStrengthMeter/LibPasswordStrengthMeter.vue'

const passwordData              = reactive<PasswordDataObject>({
    oldPassword      : '',
    newPassword      : '',
    repeatNewPassword: ''
})
const showPasswordStrengthMeter = ref<boolean>(false)
</script>

<template>
    <lib-card class='max-w-4xl w-full shadow'>
        <lib-card-header label='Update password' />
        <lib-card-content>
            <form class='flex flex-col gap-2 relative'>
                <lib-text-field
                    v-model='passwordData.oldPassword'
                    label='Old password'
                    type='password'
                />
                <div>
                    <lib-password-strength-meter
                        :show='showPasswordStrengthMeter'
                        :value='passwordData.newPassword'
                    />
                    <lib-text-field
                        v-model='passwordData.newPassword'
                        label='New password'
                        type='password'
                        @focus='showPasswordStrengthMeter = true'
                        @blur='showPasswordStrengthMeter = false'
                    />
                </div>
                <lib-text-field
                    v-model='passwordData.repeatNewPassword'
                    label='Repeat password'
                    type='password'
                />
            </form>
        </lib-card-content>
        <lib-card-footer>
            <div />
            <lib-button
                type='secondary'
            >
                Update password
            </lib-button>
        </lib-card-footer>
    </lib-card>
</template>