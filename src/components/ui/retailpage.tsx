// src/components/ui/retailpage.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../Modal'; // Убедитесь, что путь к Modal корректен
import { FlipWordsDemo2 } from './flipword';
import { Spotlight } from './spotlight'; // Подключите стили для частиц, если нужно

const RetailPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-20 relative">
      {/* Убрали эффект частиц */}
      <Spotlight className="absolute z-50 top-0 right-50" fill="white" />
      
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Левая часть с текстом */}
        <div className=" md:w-1/2 flex  flex-col items-center justify-center  w-full">
          <div className="text-6xl font-bold text-center md:text-left mb-12">
            Розничное приложение для увеличения продаж
          </div>
          <FlipWordsDemo2 />
          <button
            onClick={handleOpenModal}
            className="flex items-center px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl mt-12"
          >
            Запросить Демо
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
        </div>

        {/* Правая часть с изображением */}
        <div className="hidden md:flex w-2/3 justify-center items-center">
          <Image
            src="/knifesmock/MacBookAir(15 inch).png" // Замените на правильный путь к изображению
            alt="Retail Application"
            width={1200}
            height={1200}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default RetailPage;
