import type { Meta, StoryObj } from '@storybook/vue3'
import LibEditableField        from './LibEditableField.vue'

const meta: Meta = {
    title    : 'library/LibEditableField',
    component: LibEditableField,
    tags     : ['autodocs'],
    argTypes : {
        label     : { control: 'text' },
        edit      : { control: 'boolean' },
        type      : { control: 'select', options: ['email', 'password', 'text'] },
        modelValue: { control: 'text' }
    },
    args     : {}
}

export default meta
type Story = StoryObj<typeof meta>;

// Story: Editable Field
export const EditableField: Story = {
    args: {
        label     : 'Field Label',
        edit      : true,
        type      : 'text',
        modelValue: 'Initial Value'
    }
}

// Story: Static Field
export const StaticField: Story = {
    args: {
        label     : 'Field Label',
        edit      : false,
        modelValue: 'Static Value'
    }
}