import React from 'react';

const NextDevelopmentCard = () => {
  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8 my-8 py-8">
      {/* Flex layout adjusted for mobile */}
      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-8 md:space-y-0">
        {/* Icon section */}
        <div className="bg-blue-100 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
          <span className="text-blue-600 font-semibold text-lg md:text-2xl">Next.js</span>
        </div>
        
        {/* Text section */}
        <div className="text-center md:text-left w-full">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Разработка на Next от 20 000 ₽
          </h3>
        </div>
        
        {/* Button */}
        <div className="w-full flex justify-center md:w-auto">
          <button className="flex items-center px-10 py-3 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-base md:text-lg">
            Заказать
            <svg
              className="ml-2 w-8 h-8 md:w-10 md:h-10"
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
