# mb-react-component-library

## Overview

**mb-react-component-library** is a versatile and customizable collection of accelerating web development.

---
## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Components](#components)
    - [Typography](#typography)
    - [Button](#button)
    - [Card](#card)
    - [Carousel](#carousel)
    - [Header](#header)
5. [Contributing](#contributing)

## Features

- **Highly Reusaable:** A set of components designed for reuse in various projects.<br/>
- **Customizable Styles:** Easil adapt styles to fit our project design.<br/>
- **Documentation:** Comprehensive documentation for quick integration and customization.<br/>
- **Active development:** Regularl updated with new components and features.

## Installation

Include instructions on how to install and set up your component library. You can use npm, yarn, or other package managers.

```bash
npm install mb-react-component-library
```

## Components
1. **Typography** - A flexible typography component that allows customization of font styles, sizes, and weights.
---
```Javascript
import { Typography } from 'mb-react-component-library';

const MyTypographyComponent = () => {
  return <Typography variant="heading">Hello, world!</Typography>;
};
export default MyTypographyComponent;
```
2. **Button** - A customizable button component with support for various sizes, styles, and onClick handlers.
---
```Javascript
import { Button } from 'mb-react-component-library';

const MyButtonComponent = () => {
  return <Button backgroundColor={"success"} size={"small"} onClick={() => console.log('Button clicked')}>Click me</Button>;
};
export default MyButtonComponent;
```
3. **Card** - A container component for organizing content with customizable styles and layouts.
---
```Javascript
import { Card } from 'mb-react-component-library';

const MyCardComponent = () => {
  return <Card title = {"Card Title"} imageUrl={"Give image path/url here"} description = {"Card Description"}firstButtonTitle = {"Learn More"} secondButtonTitle = {"Share"} ></Card>;
};
export default MyCardComponent;
```
4. **Carousel**- An interactive carousel component for displaying images or other content in a rotating fashion.
---
```Javascript
import { Carousel } from 'mb-react-component-library';

const MyCarouselComponent = () => {
  return <Carousel data={[
        { img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8fDB8fHww', title: 'Lion'},
        { img: 'https://media.istockphoto.com/id/1253898581/photo/dog-celebrating-with-red-party-hat-and-blow-out.jpg?s=612x612&w=0&k=20&c=ny3b2B4_v_9FHFKQVBiXf9n2I6wGJqrvfW_AMFBVfaY=', title: 'Dog' }
        ]} />;
};
export default MyCarouselComponent;
```

5. **Header**- A versatile Header component for creating navigation bars, page headers, or other top-level components. This component typically includes options for logos, navigation links, and user-related actions.
---
```Javascript
import { Header } from 'mb-react-component-library';

const MyHeaderComponent = () => {
  return (
    <Header title={"Storybook Header"} headerBgColor={"primary"}></Header>
  );
};
export default MyHeaderComponent;
```


## Usage

```Javascript
import {Button} from "mb-react-component-library"

const ButtonComonent=()=>{
    return (
        <Button backgroundColor={primary}>Primary Button</Button>
    )
}

export default ButtonComponent;
```

