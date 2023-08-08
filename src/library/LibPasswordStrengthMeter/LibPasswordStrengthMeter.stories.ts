import type { Meta, StoryObj }  from '@storybook/vue3'
import LibPasswordStrengthMeter from './LibPasswordStrengthMeter.vue'

const meta: Meta = {
    title    : 'library/lib-password-strength-meter',
    component: LibPasswordStrengthMeter,
    tags     : ['autodocs'],
    argTypes : {
        show : { control: 'boolean' },
        value: { control: 'text' }
    },
    args     : {}
}

export default meta
type Story = StoryObj<typeof meta>;

// Story: CompletePassword
export const CompletePassword: Story = {
    args: {
        show    : true,
        value   : 'Password123!',
        relative: true
    }
}

// Story: Password Non Criteria Checked
export const PasswordNonCriteriaChecked: Story = {
    args: {
        show    : true,
        value   : '',
        relative: true
    }
}

// Story: Criteria Partial Checked
export const CriteriaPartialChecked: Story = {
    args: {
        show    : true,
        value   : 'Pass',
        relative: true
    }
}
// Story: Two Checks
export const TwoChecks: Story              = {
    args: {
        show    : true,
        value   : 'Pass!',
        relative: true
    }
}


