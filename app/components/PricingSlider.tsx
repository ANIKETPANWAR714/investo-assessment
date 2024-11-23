'use client';

import { useState } from 'react';

export default function PricingSlider() {
  const [sliderValue, setSliderValue] = useState(2); // Default to 100K pageviews
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage dark mode

  const pricingData = [
    { views: '10K', monthlyPrice: 8 },
    { views: '50K', monthlyPrice: 12 },
    { views: '100K', monthlyPrice: 16 },
    { views: '500K', monthlyPrice: 24 },
    { views: '1M', monthlyPrice: 36 },
  ];

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  const handleToggleChange = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentPlan = pricingData[sliderValue];
  const finalPrice = isYearlyBilling
    ? (currentPlan.monthlyPrice * 12 * 0.75).toFixed(2)
    : currentPlan.monthlyPrice;

  return (
    <div
      className={`flex flex-col items-center w-full space-y-6 px-6 ${isDarkMode ? 'bg-[hsl(227,35%,25%)]' : 'bg-white'}`}
    >
      {/* Dark Mode Toggle Button */}
      <div className="absolute top-4 left-4">
        <button
          onClick={handleDarkModeToggle}
          className={`text-lg font-semibold rounded-3xl bg-cyan-500 ${isDarkMode ? 'text-white' : 'text-[hsl(194,59%,88%)]'} p-2 rounded-md bg-[hsl(223,50%,87%)]`}
        >
          {isDarkMode ? 'Light Slider' : 'Dark Slider'}
        </button>
      </div>

      {/* Plan Info */}
      <div className="flex flex-col items-center space-y-2">
        <div className="flex gap-6 items-center">
          <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {currentPlan.views} PAGEVIEWS
          </p>
          <p className={`text-xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            ${finalPrice} / {isYearlyBilling ? 'year' : 'month'}
          </p>
        </div>
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="4"
        value={sliderValue}
        onChange={handleSliderChange}
        className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-[hsl(174,86%,45%)]' : 'bg-[hsl(174,77%,80%)]'} appearance-none outline-none slider`}
        style={{
          background: `linear-gradient(to right, ${isDarkMode ? 'hsl(174, 86%, 45%)' : 'hsl(174, 77%, 80%)'} ${(sliderValue / 4) * 100}%, hsl(174, 77%, 80%) ${(sliderValue / 4) * 100}%)`,
        }}
      />

      {/* Billing Toggle */}
      <div className="flex items-center space-x-3">
        <span className={`text-gray-500 ${isDarkMode ? 'text-gray-300' : ''}`}>Monthly Billing</span>
        <label className="relative inline-block w-10 h-6">
          <input
            type="checkbox"
            className="hidden"
            checked={isYearlyBilling}
            onChange={handleToggleChange}
          />
          <span className="block w-full h-full bg-gray-300 rounded-full cursor-pointer before:absolute before:top-1 before:left-1 before:w-4 before:h-4 before:bg-white before:rounded-full before:transition-transform before:duration-200 before:ease-in-out checked:bg-[hsl(174,86%,45%)] checked:before:translate-x-4"></span>
        </label>
        <span className={`text-gray-500 ${isDarkMode ? 'text-gray-300' : ''}`}>Yearly Billing</span>
        {isYearlyBilling && (
          <div
            className={`ml-4 px-3 py-1 ${isDarkMode ? 'bg-[hsl(14,92%,95%)] text-[hsl(15,100%,70%)]' : 'bg-[hsl(14,92%,95%)] text-[hsl(15,100%,70%)]'} rounded-lg text-sm font-bold`}
          >
            25% discount
          </div>
        )}
      </div>
    </div>
  );
}
