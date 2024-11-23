import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enables dark mode using the "class" strategy
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Define custom variables in your CSS file
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'bg-image': "url('/bg-pattern.svg')", // Adjust image path if necessary
        'circles': "url('/pattern-circles.svg')",
      },
      // You can also add other extensions like font sizes, spacing, etc.
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'], // Example: adding a custom font family
      },
      screens: {
        'xs': '475px', // Custom breakpoint for smaller screens
      },
    },
  },
  plugins: [
    // Add any plugins if needed, e.g., for forms, typography, etc.
  ],
} satisfies Config;
