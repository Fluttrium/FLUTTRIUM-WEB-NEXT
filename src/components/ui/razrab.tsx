import React from 'react';

const NextDevelopmentCard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 my-20 py-6"> {/* Ограничена максимальная ширина */}
      <div className="flex flex-row items-center justify-center space-x-6">
        <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
          <span className="text-blue-600 font-semibold text-lg">Next.js</span>
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-semibold text-gray-800 w-full">Разработка на Next от 20 000 ₽</h3>
        </div>
        <button className="flex items-center px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-sm z-30">
          Заказать
          <svg
            className="ml-2 w-10 h-10"
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
  );
};

export default NextDevelopmentCard;
