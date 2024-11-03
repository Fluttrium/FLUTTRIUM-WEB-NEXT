// pages/retail.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './Particles.css'; // Убедитесь, что файл со стилями для частиц подключен и находится в нужной директории
import Modal from '../Modal';
import { Spotlight } from './spotlight';

const MobileAppPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-20 relative">
      <Spotlight className="absolute z-50 top-0 right-50" fill="white" />
      
      {/* Фон с решеткой */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full z-10">
        {/* Левая часть с текстом */}
        <div className="w-full md:w-1/2">
          <h1 className="text-6xl font-bold text-center md:text-left mb-12">
          Кроссплатформенная разработка приложений
          </h1>
          <h2 className="text-2xl font-bold text-center md:text-left mb-12">
          Приложение сразу для iOS и Android? Разработаем его на Flutter
          </h2>
          <p className="text-xl">
          С помощью кросс-платформенной мобильной разработки мы можем охватить одним кодом сразу две операционные системы: iOS и Android. Это, во-первых, выгодно, ведь денежные затраты на разработку значительно оптимизируются. А во-вторых, это быстро — кроссплатформенная разработка позволяет уменьшить сроки создания приложения на 40%
          </p>
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

        {/* Правая часть с изображением */}
        <div className="hidden md:flex w-1/2 justify-center items-center">
          <Image
            src="/projects/case8.png" // Проверьте, что изображение доступно по этому пути
            alt="Sales Application"
            width={1200}
            height={1200}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default MobileAppPage;
