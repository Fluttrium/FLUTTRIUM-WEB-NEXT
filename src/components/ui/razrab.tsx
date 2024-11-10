import React from 'react';

const NextDevelopmentCard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 my-6 py-6">
      {/* Flex layout adjusted for mobile */}
      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-6 space-y-6 md:space-y-0">
        {/* Icon section */}
        <div className="bg-blue-100 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <span className="text-blue-600 font-semibold text-sm md:text-lg">Next.js</span>
        </div>
        
        {/* Text section */}
        <div className="text-center md:text-left w-full">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            Разработка на Next от 20 000 ₽
          </h3>
        </div>
        
        {/* Button */}
        <div className="w-full flex justify-center md:w-auto">
          <button className="flex items-center px-8 py-2 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-sm z-30">
            Заказать
            <svg
              className="ml-2 w-6 h-6 md:w-10 md:h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextDevelopmentCard;
