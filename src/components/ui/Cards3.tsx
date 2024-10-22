"use client";

import React from "react";

export function CardHoverEffectDemo3() {
  return (
    <>
      <div id="service" className="flex justify-center">
        <h1 className="text-4xl font-semibold text-black dark:text-white text-center">
          <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none block mb-5">
            Как мы будем работать
          </span>
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-8 lg:border lg:border-gray-200 lg:rounded-lg lg:p-4">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}

export const projects = [
  {
    number: 1,
    title: "Обсуждение",
    description:
      "Подписываем NDA. Задаем вопросы, узнаем детали о будущем приложении и бизнес-цели его создания",
    link: "",
  },
  {
    number: 2,
    title: "Техническое задание",
    description: "Изучаем ваше ТЗ, а если его нет — помогаем подготовить",
    link: "",
  },
  {
    number: 3,
    title: "Прототип",
    description: "Делаем макет приложения с кликабельными элементами интерфейса",
    link: "",
  },
  {
    number: 4,
    title: "Дизайн",
    description:
      "Продумываем стильный дизайн в стиле вашего бренда или создаем новый",
    link: "",
  },
  {
    number: 5,
    title: "Разработка",
    description:
      "Воплощаем прототипы в реальность. Работаем итерациями, демонстрируем промежуточный результат",
    link: "",
  },
  {
    number: 6,
    title: "Тестирование",
    description:
      "Тщательно проверяем продукт, чтобы приложение работало у каждого пользователя",
    link: "",
  },
  {
    number: 7,
    title: "Публикация",
    description:
      "Готовим мобильное приложение к публикации. Публикуем в сторы",
    link: "",
  },
  {
    number: 8,
    title: "Передача прав",
    description: "Отдаём исходный код, права на разработку",
    link: "",
  },
  {
    number: 9,
    title: "Поддержка",
    description:
      "Обеспечиваем исправную работу мобильного приложения после его запуска. Разрабатываем новые фичи",
    link: "",
  },
];

type ProjectItem = {
    number: number;
    title: string;
    description: string;
    link?: string; // Поле link можно сделать опциональным, если оно не обязательно
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
            className="hover:bg-blue-600 hover:text-white transition p-6 border border-gray-200 rounded-lg shadow-lg"
          >
            {/* Добавляем номер перед заголовком */}
            <h2 className="text-xl font-bold mb-4">
              {item.number}. {item.title}
            </h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
