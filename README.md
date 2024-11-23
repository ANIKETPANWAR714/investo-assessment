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
![image](https://github.com/user-attachments/assets/bd260979-d296-40da-8dcf-b025d3af2c6d)



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


