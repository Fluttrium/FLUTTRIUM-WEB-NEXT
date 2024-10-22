import React from "react";
import './Particles.css'; // Импортируем стили для частиц

export function PricingAndTimeline() {
  return (
    <div className="relative">
      {/* Летающие микрочастицы */}
      <div className="particles mt-10"></div>

      <div className="flex flex-col lg:flex-row px-12 py-20 space-y-8 lg:space-y-0 lg:space-x-12 mb-40 w-full max-w-7xl mx-auto relative z-10">
        {/* Левая колонка: Текст */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Сроки и стоимость</h2>
          <p className="text-lg">
            Оценка зависит от проекта, объемов работ, используемых технологий и подходов.
            Более подробную оценку мы сможем дать, когда получим заполненный бриф или проведем с вами первый звонок.
          </p>

          {/* Кнопка */}
          <button className="flex items-center px-8 py-2 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-sm z-30 mt-6">
            Расчитать стоимость
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

        {/* Правая колонка: Закругленные карточки */}
        <div className="lg:w-1/2 relative flex items-center justify-center">
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
    </div>
  );
}
