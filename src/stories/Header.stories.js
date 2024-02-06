import { Header } from "../components/Header/index.jsx";

export default {
    component: Header,
    tags: ['autodocs'],
    argTypes: {
        headerBgColor: {
            options: ['inherit', 'primary', 'secondary', 'transparent', 'error', 'warning'],
            control: { type: 'select' }, // Automatically inferred when 'options' is defined
        },
    }
}

export const errorHeader = {
    args: {
        title: 'StoryBook',
        headerBgColor: 'error',
        onHomeButtonClick: () => alert("Home Button click"),
        onSignupButtonClick: () => alert("Signup Button click")
    }
}

export const transparentHeader = {
    args: {
        title: 'StoryBook',
        headerBgColor: 'transparent',
        onHomeButtonClick: () => alert("Home Button click"),
        onSignupButtonClick: () => alert("Signup Button click")
    }
}