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

      <div className="flex flex-col px-6 py-12 space-y-8 mb-20 w-full mx-auto relative z-10 lg:py-20 lg:space-y-0 lg:flex-row">
        {/* Левая колонка: Текст */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-8 bg-clip-text">
            Нужен точный расчет стоимости?
          </h2>
          <p className="text-lg sm:text-2xl md:text-3xl">
            Отправьте ТЗ, и наши специалисты рассчитают итоговую цену проекта.
            Вы получите готовый план работ, включая сроки и цену разработки
          </p>

          {/* Кнопка */}
          <button
            onClick={handleOpenModal}
            className="flex items-center justify-center mt-10 px-10 py-5 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl sm:text-2xl w-full md:w-auto"
          >
            Отправить ТЗ
            <svg
              className="ml-3 w-8 h-8 md:w-10 md:h-10"
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

        {/* Правая колонка: Закругленные карточки с увеличенным левым отступом */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-300 p-10 rounded-3xl shadow-lg text-white w-full max-w-md text-center lg:ml-20">
          <div className="bg-blue-600 p-10 rounded-3xl shadow-lg">
            <p className="text-4xl lg:text-5xl font-bold mb-4">1 месяц</p>
            <p className="text-2xl lg:text-3xl">Средние сроки</p>
            <div className="mt-8">
              <p className="text-5xl lg:text-6xl font-bold">200 000 рублей</p>
              <p className="text-2xl lg:text-3xl">Средняя стоимость</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
