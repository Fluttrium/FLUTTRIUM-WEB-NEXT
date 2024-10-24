// pages/retail.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FlipWordsDemo2 } from './flipword';

const RetailPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
        {/* Левая часть с текстом и компонентом */}
        <div className="w-full md:w-1/2">
          <h1 className="text-6xl font-bold text-center md:text-left mb-12">
            Универсальное приложение для продаж за месяц
          </h1>

          {/* Ваш компонент между текстом и кнопкой */}
          <FlipWordsDemo2 />

          {/* Кнопка */}
          <Link href="/flutter">
            <button className="flex items-center px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl mt-12">
              Забронировать демо
              <svg
                className="ml-2 w-8 h-8"
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
          </Link>
        </div>

        {/* Правая часть с изображением */}
        <div className="hidden md:block w-1/2 flex justify-center items-center">
          <Image
            src="/projects/case8.png" // Путь к вашему изображению
            alt="Sales Application"
            width={800} // Увеличенный размер изображения
            height={800} // Увеличенный размер изображения
            className="rounded-lg shadow-lg object-cover" // Добавлен класс object-cover
          />
        </div>
      </div>
    </div>
  );
};

export default RetailPage;
