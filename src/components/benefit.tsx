import React from "react";
import { CardHoverEffectDemo2 } from "./ui/Cards2";

export function Benefit() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center">
      {/* Flex для горизонтального выравнивания изображения и контента */}
      <div className="md:w-1/2 w-full p-4">
        <img
          src="/projects/case7.png" // Путь к вашему изображению
          alt="Case Study Image"
          className="object-contain w-full h-auto hidden md:block" // Скрыть на мобильных, показать на десктопах
        />
      </div>

      {/* Flex для заголовка и карточек в колонку */}
      <div className="md:w-1/2 w-full flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-black dark:text-white text-center mb-6">
          Преимущества разработки приложения на Flutter для бизнеса
        </h1>
        <CardHoverEffectDemo2 />
      </div>
    </div>
  );
}
