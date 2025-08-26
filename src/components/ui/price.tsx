"use client"
import React, { useState } from "react";
import Modal from "../Modal";

export function PricingAndTimeline() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div className="relative">
      {/* Летающие микрочастицы */}

      <div className="w-full rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start lg:justify-start space-y-6 lg:space-y-0 lg:space-x-6 px-4 sm:px-8 lg:px-16"> {/* Добавлены отступы для разных экранов */}
        <div className="flex flex-col md:flex-row items-center justify-start lg:justify-start w-full z-10 mt-10">
          <div className="flex-1 w-full text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-12">Сроки и стоимость</h1>
            <p className="text-2xl md:text-2xl">
              Оценка зависит от проекта, объемов работ, используемых технологий и подходов.
              Более подробную оценку мы сможем дать, когда получим заполненный бриф или проведем с вами первый звонок
            </p>
            <div className="flex justify-center lg:justify-start mt-12">
              {/* Кнопка */}
              <button
                        onClick={handleOpenModal}
                        className="relative inline-flex items-center justify-center px-12 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-xl"
                    >
                        Запросить Демо
                    </button>
            </div>
          </div>
        </div>

        {/* Правая колонка: Закругленные карточки */}
        <div className="w-full flex justify-center lg:w-2/4 lg:justify-center mt-12 sm:mt-20 lg:mt-10">
          <div className="relative bg-gradient-to-br from-blue-500 to-blue-300 p-6 rounded-3xl shadow-lg text-white">
            {/* Внешняя карточка */}
            <div className="w-72 h-72 rounded-3xl bg-blue-600 flex flex-col justify-center items-center p-6 shadow-lg">
              <p className="text-3xl font-bold mb-2">4 месяца</p>
              <p className="text-lg">Средние сроки</p>
              <div className="mt-6">
                <p className="text-3xl font-bold">3 млн рублей</p>
                <p className="text-lg text-center">Средняя стоимость</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
