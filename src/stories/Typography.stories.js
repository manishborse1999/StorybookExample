import { Typography } from '../components/Typography/index.jsx';

export default {
    component: Typography,
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' }, // Allows you to edit the children prop in the Storybook UI
        variant: {
            options: ['heading', 'subheading', 'body', 'caption'],
            control: { type: 'radio' }, // Automatically inferred when 'options' is defined
        },
    },
};

export const heading = {
    args: {
        children: 'Heading Text',
        variant: 'heading',
    }
};

export const body = {
    args: {
        children: 'Body text',
        variant: 'body'
    }
};