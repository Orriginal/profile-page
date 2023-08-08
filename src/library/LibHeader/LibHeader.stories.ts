import type { Meta, StoryObj } from '@storybook/vue3'
import LibHeader               from './LibHeader.vue'

const meta: Meta = {
    title    : 'library/lib-header',
    component: LibHeader,
    tags     : ['autodocs'],
    argTypes : {
        label: { control: 'text' },
        size : { control: 'select', options: ['text-xl', 'text-2xl', 'text-4xl'] }
    },
    args     : {}
}

export default meta
type Story = StoryObj<typeof meta>;

// Story: SizeXl
export const SizeXl: Story = {
    args: {
        label: 'Header Label',
        size : 'text-xl'
    }
}

// Story: Larger Size
export const LargerSize: Story = {
    args: {
        label: 'Larger Header Label',
        size : 'text-2xl'
    }
}

// Story: Biggest Size
export const BiggestSize: Story = {
    args: {
        label: 'Larger Header Label',
        size : 'text-4xl'
    }
}
