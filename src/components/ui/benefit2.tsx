import React from "react";
import { CardHoverEffectDemo4 } from "./Cards4";
import Image from "next/image";

export function Benefit2() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center space-y-6 md:space-y-0 md:space-x-6 p-4">
      {/* Изображения */}
      <div className="md:w-2/3 w-full flex flex-col items-center space-y-4">
        <Image
          src="/dobrmock/CartoonLaptop.png"
          alt="Laptop Image"
          className="w-full h-auto object-contain hidden md:block"  // Hidden on mobile, shown on larger screens
          width={2000}
          height={2000}
        />
        <Image
          src="/nextjsmock/MacBook Air (15 inch).png"
          alt="MacBook Image"
          className="w-full h-auto object-contain hidden md:block"  // Hidden on mobile, shown on larger screens
          width={2000}
          height={2000}
        />
      </div>

      {/* Заголовок и карточки */}
      <div className="md:w-2/3 w-full flex flex-col items-center text-center px-4">
        <h1 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-6">
          Разработка сайтов на Next подходит для реализации следующих интернет-проектов:
        </h1>
        <div className="overflow-x-auto w-full">
          <CardHoverEffectDemo4 />
        </div>
      </div>
    </div>
  );
}
