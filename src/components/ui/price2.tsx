"use client";
import React, { useState } from "react";
import Modal from "../Modal";

export function PricingAndTimeline2() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="relative">
      {/* Летающие микрочастицы */}
      <div className="particles mt-10"></div>

      <div className="flex flex-col px-6 py-12 space-y-8 mb-20 w-full max-w-7xl mx-auto relative z-10 md:px-12 lg:px-12 lg:py-20 lg:space-y-0 lg:space-x-12 lg:flex-row">
        {/* Левая колонка: Текст */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Нужен точный расчет стоимости?
          </h2>
          <p className="text-base sm:text-lg md:text-xl">
            Отправьте ТЗ, и наши специалисты рассчитают итоговую цену проекта.
            Вы получите готовый план работ, включая сроки и цену разработки.
          </p>

          {/* Кнопка */}
          <button
            onClick={handleOpenModal}
            className="flex items-center justify-center mt-8 px-8 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-lg sm:text-xl w-full md:w-auto"
          >
            Отправить ТЗ
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

        {/* Правая колонка: Закругленные карточки */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative bg-gradient-to-br from-blue-500 to-blue-300 p-6 rounded-3xl shadow-lg text-white w-full max-w-xs mx-auto">
            {/* Внешняя карточка */}
            <div className="w-full h-72 rounded-3xl bg-blue-600 flex flex-col justify-center items-center p-6 shadow-lg">
              <p className="text-xl sm:text-2xl font-bold mb-2">1 месяц</p>
              <p className="text-base sm:text-lg">Средние сроки</p>
              <div className="mt-6">
                <p className="text-2xl sm:text-3xl font-bold">200 000 рублей</p>
                <p className="text-sm sm:text-base text-center">Средняя стоимость</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
