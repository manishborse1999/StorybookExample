
// Dialog.stories.js
import React from 'react';
// import { action } from '@storybook/addon-actions';
import { Dialog } from "../components/Dialog/index.jsx";

export default {
    component: Dialog,
    argTypes: {
        // You can add other prop types and controls as needed
        isOpen: {
            options: [true, false],
            control: { type: 'radio' }, // Automatically inferred when 'options' is defined
        }
    },
};

// Story 1: Dialog is closed
export const ClosedDialog = {
    args: {
        isOpen: false,
        onClose: () => alert('Dialog Closed'),
        children: 'Your Dialog Content Goes Here'
    }
}

// <Dialog isOpen={false} onClose={action('Dialog Closed')}>
//     <h2>Your Dialog Content Goes Here</h2>
//     <p>Any additional content or form can be placed here.</p>
// </Dialog>

// Story 2: Dialog is open
// export const OpenDialog = () => (
//     <Dialog isOpen={true} onClose={action('Dialog Closed')}>
//         <h2>Your Dialog Content Goes Here</h2>
//         <p>Any additional content or form can be placed here.</p>
//     </Dialog>
// );

// Story 3: Dialog with custom content
export const CustomContentDialog = () => (
    <Dialog isOpen={true} onClose={action('Dialog Closed')}>
        <h2>Custom Dialog Title</h2>
        <p>This is a custom dialog with different content.</p>
        <button onClick={action('Button Clicked')}>Click Me</button>
    </Dialog>
);
