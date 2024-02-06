import { Footer } from "../components/Footer/index.jsx";

export default {
    component: Footer,
    tags: ['autodocs'],
    argTypes: {
        BgColor: {
            options: ['primary', 'secondary', 'transparent', 'error', 'warning'],
            control: { type: 'select' }, // Automatically inferred when 'options' is defined
        },
    }
}

export const footerPrimaryStory = {
    args: {
        BgColor: 'primary',
        year: 2024,
        companyName: 'Storybook.'
    }
}