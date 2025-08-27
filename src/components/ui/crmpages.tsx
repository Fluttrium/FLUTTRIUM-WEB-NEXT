// pages/retail.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Modal from '../Modal';
import { Spotlight } from './spotlight';
import { useTranslations } from '@/hooks/useTranslations';

const CrmPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { messages } = useTranslations();
  const t: any = (messages as any).CrmPage;

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="w-full rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col md:flex-row items-center justify-center w-full z-10">
        {/* Левая часть с текстом и компонентом */}
        <div className="flex-1 w-full text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-12">
            {t?.title}
          </h1>
          <p className="text-xl">
            {t?.subtitle}
          </p>
          {/* Кнопка */}
          <div className="flex justify-center lg:justify-start mt-12">
          <button
            onClick={handleOpenModal}
            className="relative inline-flex items-center justify-center px-12 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-xl"
          >
            {t?.cta}
          </button>
          </div>
        </div>

        {/* Правая часть с изображением */}
        <div className="w-full flex justify-center lg:w-2/4 lg:justify-end mt-12 sm:mt-8 lg:mt-0">
  <Image
    src="/Midnight5.png" // Путь к вашему изображению
    alt={t?.imageAlt || "CRM interface"}
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