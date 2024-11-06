import React from "react";
import { CardHoverEffectDemo2 } from "./Cards2";
import { CardHoverEffectDemo4 } from "./Cards4";
import Image from "next/image";


export function Benefit2() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center"> 
      {/* Flex для горизонтального выравнивания изображения и контента */}
      <div className="md:w-1/2 w-full p-4">
          <Image
              src="/dobrmock/CartoonLaptop.png" // Путь к вашему SVG изображению
              alt="Flutter Logo"
              className="h-auto object-contain"
              width='2000'
              height="2000"// Установлено на 1/3 ширины
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
