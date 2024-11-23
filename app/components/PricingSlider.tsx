'use client';

import { useState } from 'react';

export default function PricingSlider() {
  const [sliderValue, setSliderValue] = useState(2); // Default to 100K pageviews
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

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

  const currentPlan = pricingData[sliderValue];
  const finalPrice = isYearlyBilling
    ? (currentPlan.monthlyPrice * 12 * 0.75).toFixed(2)
    : currentPlan.monthlyPrice;

  return (
    <div className="flex flex-col items-center w-full space-y-6 px-4 sm:px-6">
      {/* Plan Info */}
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
        <p className="text-lg font-bold text-gray-800 dark:text-gray-300">
          {currentPlan.views} PAGEVIEWS
        </p>
        <p className="text-xl font-extrabold text-gray-800 dark:text-gray-300">
          ${finalPrice} / {isYearlyBilling ? 'year' : 'month'}
        </p>
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="4"
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-full h-2 rounded-full bg-[hsl(174,77%,80%)] appearance-none outline-none slider"
        style={{
          background: `linear-gradient(to right, hsl(174, 86%, 45%) ${(sliderValue / 4) * 100}%, hsl(174, 77%, 80%) ${(sliderValue / 4) * 100}%)`,
        }}
      />

      {/* Billing Toggle */}
      <div className="flex items-center space-x-3">
        <span className="text-gray-500 dark:text-gray-300">Monthly Billing</span>
        <label className="relative inline-block w-10 h-6">
          <input
            type="checkbox"
            className="hidden"
            checked={isYearlyBilling}
            onChange={handleToggleChange}
          />
          <span className="block w-full h-full bg-gray-300 rounded-full cursor-pointer before:absolute before:top-1 before:left-1 before:w-4 before:h-4 before:bg-white before:rounded-full before:transition-transform before:duration-200 before:ease-in-out checked:bg-[hsl(174,86%,45%)] checked:before:translate-x-4"></span>
        </label>
        <span className="text-gray-500 dark:text-gray-300">Yearly Billing</span>
        {isYearlyBilling && (
          <div className="ml-4 px-3 py-1 bg-[hsl(14,92%,95%)] text-[hsl(15,100%,70%)] rounded-lg text-sm font-bold">
            25% discount
          </div>
        )}
      </div>
    </div>
  );
}
