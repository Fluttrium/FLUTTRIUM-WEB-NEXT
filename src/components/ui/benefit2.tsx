import React from "react";
import { CardHoverEffectDemo4 } from "./Cards4";

export function Benefit2() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center space-y-6 md:space-y-0 md:space-x-6 p-8 md:p-12">
      {/* Заголовок и карточки */}
      <div className="w-full flex flex-col items-center text-center px-4 md:px-8">
      <h1 className="text-2xl md:text-[4rem] font-semibold text-black dark:text-white mb-10 md:mb-12 leading-relaxed md:leading-snug">
  Разработка сайтов на Next подходит для реализации следующих интернет-проектов:
</h1>
        <div className="overflow-x-auto">
          <CardHoverEffectDemo4 />
        </div>
      </div>
    </div>
  );
}
