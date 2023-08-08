import type { Meta, StoryObj } from '@storybook/vue3'
import LibButton               from './LibButton.vue'

const meta: Meta = {
    title    : 'Library/LibButton',
    component: LibButton,
    tags     : ['autodocs'],
    argTypes : {
        type: { control: 'select', options: ['primary', 'secondary', 'error'] },
        icon: { control: 'boolean' }
    },
    args     : {
        default: 'Button'
    }
}

export default meta
type Story = StoryObj<typeof meta>;

// Story: Primary Button
export const Primary: Story = {
    args: {
        type: 'primary',
        icon: false
    }
}

// Story: Secondary Button
export const Secondary: Story = {
    args: {
        type: 'secondary',
        icon: false
    }
}

// Story: Error Button
export const Error: Story = {
    args: {
        type: 'error',
        icon: false
    }
}

// Story: Icon Button
export const WithIcon: Story = {
    args: {
        type   : 'primary',
        icon   : true,
        default: '👁'
    }
}
