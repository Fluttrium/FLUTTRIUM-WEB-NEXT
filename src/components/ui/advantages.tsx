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
      <Link href="/brief">
        <button className="mt-10 inline-flex items-center justify-center px-12 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-xl">
          Обсудить проект
        </button>
      </Link>
    </div>
  );
}
