<script setup lang='ts'>
import LibCard        from '@lib/LibCard/LibCard.vue'
import LibParagraph   from '@lib/LibParagraph/LibParagraph.vue'
import LibButton      from '@lib/LibButton/LibButton.vue'
import { useRouter }  from 'vue-router'
import LibCardHeader  from '@lib/LibCard/LibCardHeader.vue'
import LibCardFooter  from '@lib/LibCard/LibCardFooter.vue'
import LibCardContent from '@lib/LibCard/LibCardContent.vue'

const router = useRouter()
</script>

<template>
    <div class='flex h-fit'>
        <lib-card class='max-w-2xl'>
            <lib-card-header label='Welcome!' />

            <lib-card-content class='flex flex-col gap-4 '>
                <lib-paragraph>
                    Thank you for visiting our example project, which serves as a showcase of our coding skills for this
                    assignment. Within this demonstration, you will find a profile-page designed to provide a glimpse of
                    our
                    capabilities, without the implementation of any login or security measures. To ensure the safety of
                    your
                    personal data, we kindly request that you refrain from using any important or real information while
                    exploring this project.
                </lib-paragraph>
                <lib-paragraph>
                    I hope you enjoy your time here and appreciate the effort that I have invested in creating this
                    example.
                    If you have any feedback or questions, please don't hesitate to reach out. Happy browsing!
                </lib-paragraph>
            </lib-card-content>

            <lib-card-footer>
                <div />
                <lib-button
                    type='secondary'
                    @click='router.push("/profile")'
                >
                    Profile page
                </lib-button>
            </lib-card-footer>
        </lib-card>
    </div>
</template>