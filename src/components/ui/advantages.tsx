import Link from "@mui/material/Link";
import React from "react";
import { Scale, Store, Lock, Expand, Pyramid, Atom } from "lucide-react";

export function Advantage() {
  const advantages = [
    {
      title: "Все магазины приложений",
      description: "App Store, Google Play, App Gallery, RuStore",
      image: <Store className="w-12 h-12 sm:w-16 sm:h-16" />,
    },
    {
      title: "Фиксированная стоимость",
      description: "Дополнительных расходов нет",
      image: <Lock className="w-12 h-12 sm:w-16 sm:h-16" />,
    },
    {
      title: "Лицензия на приложение",
      description: "Отдаем код, а не сдаем в аренду",
      image: <Scale className="w-12 h-12 sm:w-16 sm:h-16" />,
    },
    {
      title: "Масштабируемость",
      description: "Нет ограничений для развития",
      image: <Expand className="w-12 h-12 sm:w-16 sm:h-16" />,
    },
    {
      title: "Инфраструктура партнерских сервисов",
      description: "1C, Manzana, Sberbank и другие",
      image: <Pyramid className="w-12 h-12 sm:w-16 sm:h-16" />,
    },
    {
      title: "Своя экосистема",
      description: "Приложения для сборщиков и доставщиков плюс к основному",
      image: <Atom className="w-12 h-12 sm:w-16 sm:h-16" />,
    },
  ];

  return (
    <div className="flex flex-col items-center py-6 sm:py-10">
      <div className="font-bold mb-4 sm:mb-6 text-center text-3xl sm:text-5xl">
        Преимущества
      </div>
      <div className="w-full max-w-6xl px-2 sm:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 sm:p-4 border rounded-lg shadow-lg"
            >
              {advantage.image}
              <h3 className="font-bold text-center mt-2 mb-1 text-sm sm:text-xl">
                {advantage.title}
              </h3>
              <p className="text-center text-xs sm:text-base">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link href="/flutter">
        <button className="flex items-center px-8 py-3 sm:px-12 sm:py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-lg sm:text-xl mt-8 sm:mt-12">
          Обсудить проект
          <svg
            className="ml-2 w-6 h-6 sm:w-8 sm:h-8"
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
      </Link>
    </div>
  );
}
