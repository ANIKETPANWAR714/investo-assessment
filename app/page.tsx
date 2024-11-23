'use client'
import { useState, useEffect } from 'react';
import HeroCard from "./components/HeroCard";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Apply dark mode class to the body element when darkMode is true
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="overflow-y-auto h-[800px] bg-[hsl(230, 100%, 99%)] dark:bg-gray-900">
      <div className="bg-bg-image bg-cover bg-center h-[65vh]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col bg-circles bg-no-repeat w-[600px] h-[200px] bg-top gap-[2px] mt-[50px]">
            <h1 className="px-[5px] text-center align-text-top text-[35px] font-semibold mt-[40px] text-[hsl(225, 20%, 60%)] dark:text-white">
              Simple, traffic-based pricing
            </h1>
            <h4 className='text-gray-400 font-semibold text-center dark:text-gray-200'>
              Sign-up for our 30-day trial. No credit card required
            </h4>
          </div>

          <HeroCard />

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="absolute top-4 right-4 bg-cyan-500 text-white p-2 rounded-full focus:outline-none"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
}
