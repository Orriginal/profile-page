import type { Meta, StoryObj } from '@storybook/vue3'
import LibTextField            from './LibTextField.vue'

const meta: Meta = {
    title    : 'library/LibTextField',
    component: LibTextField,
    tags     : ['autodocs'],
    argTypes : {
        label      : { control: 'text' },
        placeholder: { control: 'text' },
        required   : { control: 'boolean' },
        type       : { control: 'select', options: ['email', 'password', 'text'] },
        modelValue : { control: 'text' }
    },
    args     : {}
}

export default meta
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
    args: {
        label      : 'Label',
        placeholder: 'Enter your text',
        required   : false,
        type       : 'text',
        modelValue : 'Sample text'
    }
}

export const WithLabel: Story = {
    args: {
        label      : 'Username',
        placeholder: 'Enter your username',
        required   : true,
        type       : 'text',
        modelValue : ''
    }
}

export const PasswordInput: Story = {
    args: {
        label      : 'Password',
        placeholder: 'Enter your password',
        required   : true,
        type       : 'password',
        modelValue : ''
    }
}

export const EmailInput: Story = {
    args: {
        label      : 'Email',
        placeholder: 'Enter your email',
        required   : true,
        type       : 'email',
        modelValue : ''
    }
}

export const RequiredField: Story = {
    args: {
        label      : 'Required Field',
        placeholder: 'This field is required',
        required   : true,
        type       : 'text',
        modelValue : ''
    }
}

export const OptionalField: Story = {
    args: {
        label      : 'Optional Field',
        placeholder: 'This field is optional',
        required   : false,
        type       : 'text',
        modelValue : ''
    }
}
