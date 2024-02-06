import React from 'react'
import { Alert } from "../components/Alert/index.jsx";


export default {
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: ["success", "info", "error", "warning"],
            control: { type: 'select' }
        }
    },
    decorators: [
        (Story) => (
            <div style={{ margin: '3em', display: 'flex', width: "30vw", margin: 'auto' }}>
                <Story />
            </div>
        )
    ]
}

export const successAlert = {
    args: {
        type: "success",
        message: "Success! This is a success message."
    }
}

export const errorAlert = {
    args: {
        type: "error",
        message: "Error! This is a error message."
    }
}