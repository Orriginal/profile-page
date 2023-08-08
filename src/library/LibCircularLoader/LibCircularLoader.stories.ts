import type { Meta, StoryObj } from '@storybook/vue3'
import LibCircularLoader       from './LibCircularLoader.vue'

const meta: Meta = {
    title    : 'library/lib-circular-loader',
    component: LibCircularLoader,
    tags     : ['autodocs'],
    argTypes : {}
}

export default meta
type Story = StoryObj<typeof meta>;

// Story: Circular Loader
export const CircularLoader: Story = {
    args: {}
}