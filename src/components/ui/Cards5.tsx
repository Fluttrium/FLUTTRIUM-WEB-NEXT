"use client";

import React from "react";

export function CardHoverEffectDemo5() {
  return (
    <>
      <div id="service" className="flex justify-center">
        <h1 className="text-4xl font-semibold text-black dark:text-white text-center">
          <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none block mb-5">
            Как мы будем работать
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
    title: "Разработка ТЗ",
    description:
      "Пишем подробное техническое задание (ТЗ), включающее функционал сайта, дополнительные опции и перспективы его развития. Это ключевой документ, которым пользуются все специалисты на протяжении разработки.",
    link: "",
  },
  {
    number: 2,
    title: "Проектирование интерфейса",
    description:
      "Проектируем UX/UI интерфейс с использованием JS-фреймворка Next. Все элементы дизайна ориентированы на целевую аудиторию, что позволяет создать удобный и привлекательный интерфейс для пользователей.",
    link: "",
  },
  {
    number: 3,
    title: "Подготовка авторского дизайна",
    description:
      "Создаем оригинальный дизайн, соответствующий корпоративному стилю клиента. Внимание к деталям и индивидуальные решения позволяют создать уникальный стиль сайта, который выгодно выделяет проект на фоне конкурентов.",
    link: "",
  },
  {
    number: 4,
    title: "Написание программной составляющей",
    description:
      "После подготовки дизайна приступаем к разработке. Мы используем Next.js для создания эффективных и функциональных сайтов с оптимизированным кодом и возможностью масштабирования.",
    link: "",
  },
  {
    number: 5,
    title: "Адаптация под мобильные устройства",
    description:
      "Оптимизируем сайт под мобильные устройства, чтобы он оставался функциональным и быстрым на любых экранах, обеспечивая отличный пользовательский опыт на телефонах и планшетах.",
    link: "",
  },
  {
    number: 6,
    title: "Тестирование сайта",
    description:
      "Проводим тщательное тестирование всех элементов сайта: от функционала до удобства использования. Устраняем все выявленные ошибки, чтобы обеспечить стабильную работу сайта.",
    link: "",
  },
  {
    number: 7,
    title: "Запуск и продвижение проекта",
    description:
      "Запускаем проект и занимаемся его продвижением. Разрабатываем стратегию маркетинга, которая помогает привлечь целевую аудиторию и увеличить трафик на сайт. Предоставляем техническую поддержку и развитие проекта.",
    link: "",
  },
];

type ProjectItem = {
  number: number;
  title: string;
  description: string;
  link?: string;
};

interface HoverEffectProps {
  items: ProjectItem[];
}

export function HoverEffect({ items }: HoverEffectProps) {
  return (
    <div className="w-full">
      {/* Десктопная версия: грид */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="transition-all duration-300 transform hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-lg p-6 border border-gray-200 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold mb-4">
              {item.number}. {item.title}
            </h2>
            <p className="text-lg">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Мобильная версия: горизонтальный скролл с уменьшенной шириной карточек */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex space-x-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-300 transform hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-lg p-6 border border-gray-200 rounded-lg shadow-lg flex-shrink-0 w-[220px] h-[350px] flex flex-col"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                {item.number}. {item.title}
              </h2>
              <p className="text-sm sm:text-base flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
