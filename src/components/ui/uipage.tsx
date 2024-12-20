'use client';
import React, { useState } from 'react';
import { useTranslations } from 'use-intl';
import Image from 'next/image';
import Modal from '../Modal';

const UiPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const t = useTranslations('Mobile'); // Замени на UI при переводе
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="w-full rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 px-4 sm:px-6 lg:px-0">
      {/* Текстовая часть */}
      <div className="flex-1 w-full text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-12">
          Дизайн мобильных приложений и сайтов
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-12">
          Проектируем эффективные интерфейсы
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Разрабатываем макет интерактивного интерфейса. Это понадобится, если у вас есть идея продукта, и вы хотите увидеть функциональный UX-макет, решающий ваши бизнес-задачи.
        </p>
        <div className="flex justify-center lg:justify-start mt-12">
          <button
            onClick={handleOpenModal}
            className="flex items-center px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl"
          >
            {t('button')} {/* Ключ для перевода текста кнопки */}
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

      {/* Изображение */}
      <div className="w-full flex justify-center lg:w-2/4 lg:justify-end">
        <Image
          src="/projects/case8.png" // Убедитесь, что путь к изображению корректен.
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

export default UiPage;
