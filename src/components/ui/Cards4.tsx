"use client";

import React from "react";
import Image from "next/image";

export function CardHoverEffectDemo4() {
  return (
    <div className=" overflow-x-auto">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Cайтов e-commerce",
    description:
      "Разработка современных и функциональных e-commerce сайтов для повышения продаж и удобства покупателей. Создаём платформы с адаптивным дизайном, интеграцией платежных систем и аналитики, а также поддержкой пользовательских сценариев для лучшего взаимодействия с брендом",
    image: "/knifesmock/MacBook14.png", 
    link: "",
  },
  {
    title: "Интернет-магазинов",
    description:
      "Создание интернет-магазинов с интуитивным интерфейсом, оптимизированных для удобства покупок и управления товарами. Предлагаем интеграцию с платёжными системами, инструменты для аналитики и адаптивный дизайн для привлечения и удержания клиентов",
    image: "/knifesmock/MacBookAir(15 inch).png",
    link: "",
  },
  {
    title: "Интернет-порталов",
    description:
      "Разработка интернет-порталов для информирования и взаимодействия с широкой аудиторией. Создаём функциональные платформы с удобной навигацией, поддержкой мультимедийного контента, интеграцией с социальными сетями и возможностью масштабирования для любых задач",
    image: "/nextjsmock/MacBook Air (15 inch).png",
    link: "",
  },
  {
    title: "Медийных ресурсов",
    description:
      "Создание медийных ресурсов для публикации и распространения контента. Разрабатываем платформы с оптимизированной системой управления, адаптивным дизайном, интеграцией аналитики и инструментами для привлечения и удержания аудитории",
    image: "/dobrmock/iMac.png",
    link: "",
  },
  {
    title: "Онлайн-форумов",
    description:
      "Создание онлайн-форумов для активного общения и обмена информацией между пользователями. Реализуем удобные функции для модерирования, возможности для публикации мультимедиа, а также систему уведомлений и поиска для поддержания интереса и активности на платформе",
    image: "/nextjsmock/Samsung TV@2x.png",
    link: "",
  },
];

type ProjectItem = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

interface HoverEffectProps {
  items: ProjectItem[];
}

export function HoverEffect({ items }: HoverEffectProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="hover:bg-blue-600 hover:text-white transition p-8 border border-gray-200 rounded-lg shadow-lg min-w-[300px] lg:min-w-[350px] relative"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={400} // Adjusted width for larger desktop view
            height={250} // Adjusted height for larger desktop view
            className="rounded-lg mb-4"
          />
          <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
          <p className="text-sm lg:text-base">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
