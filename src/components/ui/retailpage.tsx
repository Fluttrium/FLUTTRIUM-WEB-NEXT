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
    <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-20 relative">
      {/* Spotlight effect */}
      <Spotlight className="absolute z-50 top-0 right-50" fill="white" />
      
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left section with text */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pl-6 md:pl-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 md:mb-12 leading-tight">
            Розничное приложение для увеличения продаж
          </h1>
          <FlipWordsDemo2 />
          <button
            onClick={handleOpenModal}
            className="flex items-center px-8 md:px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-lg md:text-xl mt-8 md:mt-12"
          >
            Запросить Демо
            <svg
              className="ml-2 w-6 h-6 md:w-8 md:h-8"
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

        {/* Right section with image */}
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

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default RetailPage;
