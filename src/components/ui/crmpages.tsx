// pages/retail.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Modal from '../Modal';
import { Spotlight } from './spotlight';

const CrmPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="w-full rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col md:flex-row items-center justify-center w-full z-10">
        {/* Левая часть с текстом и компонентом */}
        <div className="flex-1 w-full text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-12">
            Разработка CRM-систем на заказ
          </h1>
          <p className="text-xl">
            Повышает качество работы с клиентами и упрощает работу менеджеров
          </p>
          {/* Кнопка */}
          <div className="flex justify-center lg:justify-start mt-12">
          <button
            onClick={handleOpenModal}
            className="flex items-center px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl mt-12"
          >
            Оставить заявку
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
        </div>

        {/* Правая часть с изображением */}
        <div className="w-full flex justify-center lg:w-2/4 lg:justify-end mt-12 sm:mt-8 lg:mt-0">
  <Image
    src="/Midnight.png" // Путь к вашему изображению
    alt="Sales Application"
    width={600} // Увеличенный размер изображения
    height={600} // Увеличенный размер изображения
    className="w-3/4 md:w-2/3 lg:w-full h-auto object-contain" // Обеспечиваем адаптивность изображения
  />
</div>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default CrmPage;
