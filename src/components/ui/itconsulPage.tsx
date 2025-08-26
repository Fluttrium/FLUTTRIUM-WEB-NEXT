'use client';
import React, { useState } from 'react';
import Image from 'next/image';
// Убедитесь, что файл со стилями для частиц подключен и находится в нужной директории
import Modal from '../Modal';
import { useTranslations } from '@/hooks/useTranslations';

const ItPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { messages } = useTranslations();
  const t: any = (messages as any).AuditPage;
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="w-full rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 px-4 sm:px-6 lg:px-0">
      {/* Текстовая часть */}
      <div className="flex-1 w-full text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-12">
          {t?.title}
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-12">
          {t?.description?.split('\n')?.[0]}
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          {t?.description?.split('\n')?.[1]}
        </p>
        <div className="flex justify-center lg:justify-start mt-12">
          <button
            onClick={handleOpenModal}
            className="relative inline-flex items-center justify-center px-12 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-xl"
          >
            {t?.cta}
          </button>
        </div>
      </div>

      {/* Изображение */}
      <div className="w-full flex justify-center lg:w-2/4 lg:justify-end">
        <Image
          src="/logomock/Stickers-1.png" // Убедитесь, что путь к изображению корректен.
          alt="UI Design"
          className="w-3/4 md:w-2/3 lg:w-full h-auto object-contain"
          width={1000}
          height={1000}
        />
      </div>

      {/* Модальное окно */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default ItPage;
