# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./screenshot.jpg)
![Screenshot 2024-11-24 041105](https://github.com/user-attachments/assets/9201c781-9524-4333-af7f-98771407827a)
![Screenshot 2024-11-24 041227](https://github.com/user-attachments/assets/b98437a1-758c-4e4f-9fb4-f44250e90986)
![Screenshot 2024-11-24 041253](https://github.com/user-attachments/assets/06c1c59c-b093-43da-bae2-49a6474d5e3d)
![Screenshot 2024-11-24 041310](https://github.com/user-attachments/assets/2630f6a4-e6be-49eb-bd9e-518039655735)








### Links


- Live Site URL: [Click here to view things in action](https://investo-assessment.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS for styling
- React - JS library
- Next.js - React framework
- Mobile-first workflow

### What I learned

This project helped me improve my skills with React and Next.js, especially in implementing dynamic features like dark mode toggling. Here’s an example of how I applied dark mode toggle functionality:

```js
const toggleDarkMode = () => {
  setDarkMode(prevMode => !prevMode);
};

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);


