'use client';
import PricingSlider from "./PricingSlider";

export default function HeroCard() {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 h-auto w-[90%] sm:w-[700px] md:w-[800px] lg:w-[900px] rounded-xl shadow-md">
      <div className="flex-1 flex flex-col items-center justify-center">
        <PricingSlider />
      </div>
      <div className="flex flex-col sm:flex-row p-5 gap-5 sm:gap-[80px] border-t-[0.5px] border-t-gray-400 dark:border-gray-600">
        <div className="flex flex-col items-start space-y-2 px-5 py-3 sm:px-[50px] sm:py-[10px]">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className="mr-2">
              <path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1" />
            </svg>
            <h5 className="text-sm text-gray-500 dark:text-gray-300">Unlimited websites</h5>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className="mr-2">
              <path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1" />
            </svg>
            <h5 className="text-sm text-gray-500 dark:text-gray-300">100% data ownership</h5>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className="mr-2">
              <path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1" />
            </svg>
            <h5 className="text-sm text-gray-500 dark:text-gray-300">Email reports</h5>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-end pr-0 sm:pr-[18px]">
          <button className="bg-blue-950 rounded-full w-full sm:w-auto text-white px-5 sm:px-[40px] py-2 sm:py-[5px] h-[45px] text-center">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
}
