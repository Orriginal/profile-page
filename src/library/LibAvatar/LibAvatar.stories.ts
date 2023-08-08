import type { Meta, StoryObj } from '@storybook/vue3'
import LibAvatar               from './LibAvatar.vue'

const meta: Meta = {
    title    : 'Library/lib-avatar',
    component: LibAvatar,
    tags     : ['autodocs'],
    argTypes : {
        alt      : { control: 'text' },
        src      : { control: 'text' },
        size     : { control: 'select', options: ['big', 'medium', 'small'] },
        editable : { control: 'boolean' },
        isLoading: { control: 'boolean' }
    }
}

export default meta
type Story = StoryObj<typeof meta>;

// Story: Avatar Big Size
export const AvatarBigSize: Story = {
    args: {
        alt      : 'Avatar Alt Text',
        src      : 'https://via.placeholder.com/150',
        size     : 'big',
        editable : false,
        isLoading: false
    }
}

// Story: Small Loading Avatar
export const AvatarSmallLoading: Story = {
    args: {
        alt      : 'Small Avatar Loading',
        size     : 'small',
        isLoading: false
    }
}

// Story: Medium Editable Avatar
export const AvatarMediumEditable: Story = {
    args: {
        alt     : 'Medium Editable Avatar',
        size    : 'medium',
        editable: true
    }
}
