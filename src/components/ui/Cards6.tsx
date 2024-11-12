"use client";

import React from "react";

export function CardHoverEffectDemo6() {
  return (
    <>
      <div id="service" className="flex justify-center">
        <h1 className="text-4xl font-semibold text-black dark:text-white text-center">
          <span className="text-2xl md:text-[4rem] font-bold mt-1 leading-none block mb-5">
            Решение для интернет магазинов
          </span>
        </h1>
      </div>
      <div className="mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}

export const projects = [
  {
    number: 1,
    title: "Интернет-магазин под ключ",
    description:
      "Полный цикл разработки от бизнес-анализа и индивидуального проектирования до интеграции со сложными CRM и ERP-системами. Разработка сайта интернет магазина под ключ на базе Next JS",
    link: "",
  },
  {
    number: 2,
    title: "Интернет-магазин на готовой платформе",
    description:
      "Быстрый запуск MVP для первых продаж и кастомная разработка сложных проектов на платформе CS-Cart с функциональным движком для быстрого старта и неограниченного роста",
    link: "",
  },
  {
    number: 3,
    title: "Омниканальные проекты",
    description:
      "Автоматизация бизнес-процессов и построение единой экосистемы онлайн и офлайн точек продаж. Улучшаем клиентский опыт на базе лучших международных практик",
    link: "",
  },
  {
    number: 4,
    title: "Реплатформинг интернет-магазина",
    description:
      "Бесшовный перенос текущего веб-сайта с устаревшей CMS или самописного программного обеспечения на многофункциональную платформу без простоев и потери данных",
    link: "",
  },
  {
    number: 5,
    title: "Мобильные приложения",
    description:
      "Разработка мобильных приложений, адаптивных веб-сайтов и PWA-решений для мобильной коммерции. Увеличиваем конверсию на всех устройствах",
    link: "",
  },
  {
    number: 6,
    title: "Остались вопросы?",
    description:
      "Хотите заказать создание интернет-магазина? Разберем вашу бизнес-идею или действующий сайт на бесплатной консультации!",
    link: "",
    buttonContent: (
      <button className="flex items-center px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl mt-12">
        Свяжитесь с нами
        <svg
          className="ml-2 w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    ),
  },
];

type ProjectItem = {
  number: number;
  title: string;
  description: string;
  image?: JSX.Element;
  link?: string;
  buttonContent?: JSX.Element;
};

interface HoverEffectProps {
  items: ProjectItem[];
}

export function HoverEffect({ items }: HoverEffectProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="p-6 border border-gray-200 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition"
        >
          <h2 className="text-xl font-bold mb-4">
            {item.number}. {item.title}
          </h2>
          <p className="mb-4">{item.description}</p>
          {item.buttonContent && <div className="mt-4">{item.buttonContent}</div>}
        </div>
      ))}
    </div>
  );
}
