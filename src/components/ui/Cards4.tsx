"use client";

import React from "react";

export function CardHoverEffectDemo4() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-8 lg:border lg:border-gray-200 lg:rounded-lg lg:p-4">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}

export const projects = [
  {
    title: "Cайтов e-commerce",
    description:
      "Разработка современных и функциональных e-commerce сайтов для повышения продаж и удобства покупателей. Создаём платформы с адаптивным дизайном, интеграцией платежных систем и аналитики, а также поддержкой пользовательских сценариев для лучшего взаимодействия с брендом",
    link: "",
  },
  {
    number: 2,
    title: "Интернет-магазинов",
    description: "Создание интернет-магазинов с интуитивным интерфейсом, оптимизированных для удобства покупок и управления товарами. Предлагаем интеграцию с платёжными системами, инструменты для аналитики и адаптивный дизайн для привлечения и удержания клиентов",
    link: "",
  },
  {
    number: 3,
    title: "Интернет-порталов",
    description: "Разработка интернет-порталов для информирования и взаимодействия с широкой аудиторией. Создаём функциональные платформы с удобной навигацией, поддержкой мультимедийного контента, интеграцией с социальными сетями и возможностью масштабирования для любых задач",
    link: "",
  },
  {
    number: 4,
    title: "Медийных ресурсов",
    description:
      "Создание медийных ресурсов для публикации и распространения контента. Разрабатываем платформы с оптимизированной системой управления, адаптивным дизайном, интеграцией аналитики и инструментами для привлечения и удержания аудитории",
    link: "",
  },
  {
    number: 5,
    title: "Онлайн-форумов",
    description:
      "Создание онлайн-форумов для активного общения и обмена информацией между пользователями. Реализуем удобные функции для модерирования, возможности для публикации мультимедиа, а также систему уведомлений и поиска для поддержания интереса и активности на платформе",
    link: "",
  },
];

type ProjectItem = {
    title: string;
    description: string;
    link?: string; // Поле link можно сделать опциональным, если оно не обязательно
  };
  
  interface HoverEffectProps {
    items: ProjectItem[];
  }
  
  export function HoverEffect({ items }: HoverEffectProps) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="hover:bg-blue-600 hover:text-white transition p-6 border border-gray-200 rounded-lg shadow-lg"
          >
            {/* Добавляем номер перед заголовком */}
            <h4 className="text-xl font-bold mb-4">
              {item.title}
            </h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
