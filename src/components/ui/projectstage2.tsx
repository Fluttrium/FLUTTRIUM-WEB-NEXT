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
      "Подписываем NDA. Изучаем ваше техническое задание (ТЗ), а если его нет — такое тоже бывает и это нормально — помогаем его составить. К началу второго этапа у нас на руках описание базовых функций мобильного приложения.",
  },
  {
    stage: "Оцениваем объем работы и выбираем методологию",
    description:
      "Подбираем подходящую проекту методологию: Agile или Waterfall. Изучаем техническую документацию. Затем рассчитываем предполагаемое время разработки и тестирования. Выявляем неописанные сценарии в ТЗ. Планируем roadmap.",
  },
  {
    stage: "Подписываем договор, начинаем работу",
    description:
      "Следуем четкому roadmap, работаем спринтами.",
  },
  {
    stage: "Проектируем дизайн приложения",
    description:
      "Создаем карту экранов, графические элементы и детализированный (статичный или интерактивный) прототип с учетом возможных сценариев использования.",
  },
  {
    stage: "Утверждаем дизайн",
    description:
      "Получаем обратную связь от бизнес-аналитика и клиента, учитываем комментарии и вносим правки.",
  },
  {
    stage: "Разрабатываем приложение",
    description:
      "Подключаем команду разработчиков, которая пишет код. Дизайнер в это время активно следит за работой и проверяет, как реализованы скрины. Работа строится по итерациям — разрабатываем часть функционала, тестируем ее, продолжаем трудиться над остальными функциями.",
  },
  {
    stage: "Тестируем приложение и исправляем недочеты",
    description:
      "С помощью наших QA-инженеров, подключенных к проекту еще на старте, тестируем сайт. Прорабатываем тестовую документацию. Перед релизом приложения делаем приемочное тестирование: проходим бизнес-кейсы приложения.",
  },
  {
    stage: "Публикуем приложение в сторы",
    description:
      "Добавляем приложение в магазины приложений — App Store, Google Play или любой другой магазин по вашему желанию. Важный момент: чтобы приложение прошло ревью сторов, вы можете обратиться за помощью в релизе к разработчикам, а можете подготовить и выложить приложение в магазин самостоятельно.",
  },
  {
    stage: "Поддерживаем и развиваем",
    description:
      "После публикации мобильного приложения его история не заканчивается. Работаем над новыми фичами, улучшаем, получаем обратную связь от пользователей.",
  },
  {
    stage: "Результат работы",
    description:
      "Готовое легко расширяемое и поддерживаемое мобильное приложение, опубликованное в App Store/Google Play. А также исходный код приложения и документацию к нему.",
  },
];

export function ProjectStages2() {
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
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Создадим эффективное приложение</h3>
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
