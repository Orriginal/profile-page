import type { Meta }  from '@storybook/vue3'
import LibCard        from './LibCard.vue'
import LibCardHeader  from './LibCardHeader.vue'
import LibCardContent from './LibCardContent.vue'
import LibCardFooter  from './LibCardFooter.vue'
import LibButton      from '@lib/LibButton/LibButton.vue'
import EditIcon       from '@/components/Icons/EditIcon.vue'

const meta: Meta = {
    title    : 'Library/LibCard', // Use a string, not a variable
    component: LibCard, // Use the component name, not a variable
    tags     : ['autodocs'],
    argTypes : {
        header : { control: 'text' },
        content: { control: 'text' }
    }
}

export default meta

const Template = (args: object) => ({
    components: {
        LibCard,
        LibCardHeader,
        LibCardContent,
        LibCardFooter,
        LibButton,
        EditIcon
    },
    setup()
    {
        return { args }
    },
    template: `
        <lib-card>
            <lib-card-header :label='args.header'>
                <lib-button icon>
                    <edit-icon color-class='fill-gray-200' />
                </lib-button>
            </lib-card-header>
            <lib-card-content>
                {{ args.content }}
            </lib-card-content>
            <lib-card-footer>
                <lib-button type='error'>Cancel</lib-button>
                <lib-button type='secondary'>Update</lib-button>
            </lib-card-footer>
        </lib-card>
    `
})

export const Primary = Template.bind({}) as object & { args: object }
Primary.args         = {
    header : 'Header title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan dictum nulla in aliquam. Suspendisse feugiat dui a ex sollicitudin maximus. Maecenas scelerisque neque non lacinia euismod. Mauris laoreet vulputate elit at interdum. Sed tempus enim nec justo venenatis, eget bibendum mauris vulputate. Quisque tincidunt ut enim non scelerisque. Nam mattis fermentum diam in hendrerit. Pellentesque eget nibh vehicula, feugiat eros sit amet, euismod nisl. Integer vitae ipsum rutrum turpis commodo maximus in eget felis. Fusce nisi dolor, ullamcorper in hendrerit et, pharetra ut ligula. Sed quis luctus diam, vitae cursus mauris.'
}