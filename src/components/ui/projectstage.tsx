"use client";
import React, { useState } from "react";

// SVG-иконка
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 mr-4 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const stages = [
  {
    stage: "Изучаем проект",
    description:
      "Подписываем NDA. Изучаем техническое задание (ТЗ). Если же его нет, отправляем вам бриф на разработку веб-сайта и помогаем его заполнить.",
  },
  {
    stage: "Начинаем работу",
    description:
      "Проводим бизнес-аналитику. Изучаем техническую документацию. Рассчитываем, сколько времени потребуется на разработку и тестирование. Выявляем неописанные сценарии и узкие места в ТЗ.",
  },
  {
    stage: "Фронтенд- и бэкенд-разработка",
    description: "Делаем верстку, разрабатываем сайт и наполняем его контентом.",
  },
  {
    stage: "Тестируем продукт",
    description:
      "С помощью наших QA-инженеров, подключенных к проекту еще на старте, тестируем сайт. Прорабатываем тестовую документацию. Вносим финальные правки.",
  },
  {
    stage: "Сдаем сайт",
    description: "Передаем вам сайт и полный пакет проектных документов.",
  },
  {
    stage: "Поддерживаем сайт",
    description:
      "После передачи прав на сайт его история не заканчивается. Если первые месяцы жизни сайта показывают, где и что нужно доделать или переделать, предлагаем два варианта: заключаем договор на сопровождение или запускаем новую фазу разработки.",
  },
];

export function ProjectStages() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleStage = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative flex mx-auto px-8 py-16">
      {/* Основной контент */}
      <div className="relative w-3/4 pr-8">
        <h2 className="text-5xl font-semibold mb-10">Этапы работы</h2>
        <div className="space-y-8">
          {stages.map((stage, index) => (
            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
              <button
                className="flex items-center w-full text-left p-8 rounded-lg transition-colors duration-200 ease-in-out hover:text-blue-600"
                onClick={() => toggleStage(index)}
              >
                <PlusIcon />
                <h3 className="text-2xl font-medium">{stage.stage}</h3>
              </button>
              {openIndex === index && (
                <div className="p-8 border-t border-gray-300">
                  <p className="text-lg">{stage.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-1/4">
        <div className="max-h-96 overflow-y-auto p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Создадим эффективный сайт</h3>
          <p className="text-lg text-gray-700 mb-6">
            Доверьтесь нашим профессионалам и получите качественный продукт!
          </p>
          <button className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Заказать услугу
          </button>
        </div>
      </div>
    </div>
  );
}
