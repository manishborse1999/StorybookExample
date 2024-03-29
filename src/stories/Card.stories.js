import React from 'react'
import { Card } from '../components/Card/index.jsx'

export default {
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', display: 'flex', width: "30vw", margin: 'auto' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
}

export const CardComponent = {
  args: {
    title: "Butterfly",
    description: "Butterfly are the most specialized group of reptiles. Many species of snake are found all over the world.",
    imageUrl: "https://images.unsplash.com/photo-1475809913362-28a064062ccd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
    firstButtonTitle: 'Learn More',
    secondButtonTitle: 'Show Details',
    onButtonOneClick: () => alert("btn 1 clicked"),
    onButtonTwoClick: () => alert("btn 2 clicked")
  },
}