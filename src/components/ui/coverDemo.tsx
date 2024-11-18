"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "../Modal";

const CoverDemo = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="w-full rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 px-4 sm:px-6 lg:px-0">
      {/* Левая часть с текстом */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full z-10 mt-10">
        <div className="flex-1 w-full text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-12">
            Разрабатываем мобильные приложения
            <br /> на <span className="text-blue-600">Flutter</span>
          </h1>
          <p className="text-2xl md:text-3xl">
            Создаём высококачественные мобильные приложения для бизнеса, которые работают на всех платформах
          </p>
          <div className="flex justify-center lg:justify-start mt-12">
                    {/* Кнопка */}
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
        </div>
      </div>

{/* Правая часть с изображением */}
<div className="w-full flex justify-center lg:w-2/4 lg:justify-end mt-12 sm:mt-20 lg:mt-10">
  <Image
    src="/taximock/Black-Titanium.png" // Путь к изображению
    alt="Sales Application"
    width={100}
    height={100}
    className="w-1/2 sm:w-1/4 md:w-2/3 lg:w-3/4 h-auto object-contain transform -rotate-45" // Адаптивные размеры
  />
</div>

      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CoverDemo;
