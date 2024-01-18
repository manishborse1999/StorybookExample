import { Button } from '../components/Button/index.jsx';

export default {
    // title: 'Button',
    component: Button,
    // decorators: [
    //     (Story) => (
    //         <div style={{ margin: '3em' }}>
    //             {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
    //             <Story />
    //         </div>
    //     ),
    // ],
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' }, // Allows you to edit the children prop in the Storybook UI
        // You can add other prop types and controls as needed
        buttonBgColor: {
            options: ['inherit', 'primary', 'secondary', 'transparent'],
            control: { type: 'select' }, // Automatically inferred when 'options' is defined
        },
    },
};

export const PrimaryButton = {
    args: {
        children: 'Primary Button',
        buttonBgColor: 'primary',
    }
};

export const SecondaryButton = {
    args: {
        children: 'Secondary Button',
        buttonBgColor: 'secondary',
    }
};
