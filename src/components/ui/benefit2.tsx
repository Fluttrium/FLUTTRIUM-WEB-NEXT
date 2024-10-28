import React from "react";
import { CardHoverEffectDemo2 } from "./Cards2";
import { CardHoverEffectDemo4 } from "./Cards4";


export function Benefit2() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center"> 
      {/* Flex для горизонтального выравнивания изображения и контента */}
      <div className="md:w-1/2 w-full p-4">
        <img
          src="/projects/case7.png" // Путь к вашему изображению
          alt="Case Study Image"
          className="object-contain w-full h-auto" // Настройте размеры по необходимости
        />
      </div>

      {/* Flex для заголовка и карточек в колонку */}
      <div className="md:w-1/2 w-full flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-black dark:text-white text-center mb-6 px-10">
        Разработка сайтов на Next подходит для реализации следующих интернет-проектов:
        </h1>
        <CardHoverEffectDemo4 />
      </div>
    </div>
  );
}
