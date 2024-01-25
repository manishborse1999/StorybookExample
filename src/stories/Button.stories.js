import { Button } from '../components/Button/index.jsx';

export default {
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' }, // Allows you to edit the children prop in the Storybook UI
        // You can add other prop types and controls as needed
        backgroundColor: {
            options: ['primary', 'secondary', 'danger','transparent'],
            control: { type: 'select' }, // Automatically inferred when 'options' is defined
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' }, // Automatically inferred when 'options' is defined
        },
    },
};

export const PrimaryButton = {
    args: {
        children: 'Primary Button',
        backgroundColor: 'primary',
        size:'large',
    }
};

export const SecondaryButton = {
    args: {
        children: 'Secondary Button',
        backgroundColor: 'secondary',
        size:'small',
        onClick:()=>alert("Seconary btn clicked.")
    }
};