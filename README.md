Interactive Pricing Component Solution
This is a solution to the Interactive Pricing Component challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Table of Contents
Overview
The Challenge
Screenshot
Links
My Process
Built with
What I Learned
Continued Development
Useful Resources
Author
Overview
The Challenge
Users should be able to:

View the optimal layout for the app depending on their device's screen size.
See hover states for all interactive elements on the page.
Use the slider and toggle to view prices for different page view numbers.
Toggle between monthly and yearly billing with a discount applied for yearly billing.
Switch between dark mode and light mode for a personalized experience.
Screenshot


Links
Solution URL: Add solution URL here
Live Site URL: Add live site URL here
My Process
Built with
React - JavaScript library for building user interfaces
Next.js - React framework
Tailwind CSS - Utility-first CSS framework for styling
React Hooks - for state management and event handling
Flexbox - for layout structure
Mobile-first workflow
What I Learned
This project helped me improve my skills with React, especially handling state and working with form elements like sliders and checkboxes. I learned how to:

Implement a pricing slider with dynamic pricing updates based on user input.
Manage state for dark mode and billing toggle functionality.
Use Tailwind CSS for creating responsive, mobile-first layouts.
Handle conditional rendering for applying discounts on yearly billing.
Example of dynamic styling with Tailwind CSS and React state:

js
Copy code
<div className={`flex flex-col items-center w-full space-y-6 px-6 ${isDarkMode ? 'bg-[hsl(227,35%,25%)]' : 'bg-white'}`}>
  {/* Content here */}
</div>
Continued Development
Moving forward, I aim to:

Explore more complex state management solutions for larger applications.
Improve accessibility by adding ARIA attributes to interactive elements.
Experiment with more advanced animations and transitions for a smoother user experience.
Useful Resources
React Documentation - For learning about React and React hooks.
Tailwind CSS Documentation - The official Tailwind CSS docs were invaluable for styling.
Frontend Mentor Challenges - Great source of practical coding challenges.
Author
Website - Aniket Panwar
