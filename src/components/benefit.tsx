"use client";
import React from "react";
import { CardHoverEffectDemo2 } from "./ui/Cards2";
import { useTranslations } from "@/hooks/useTranslations";

export function Benefit() {
  const { messages } = useTranslations();
  const m: any = (messages as any).FlutterPage;
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center px-4 md:px-8">
      {/* Flex для горизонтального выравнивания изображения и контента */}
      <div className="md:w-1/2 w-full p-4 md:p-6">
        <img
          src="/projects/case7.png" // Путь к вашему изображению
          alt="Case Study Image"
          className="object-contain w-full h-auto hidden md:block" // Скрыть на мобильных, показать на десктопах
        />
      </div>

      {/* Flex для заголовка и карточек в колонку */}
      <div className="md:w-1/2 w-full flex flex-col items-center p-4 md:p-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white text-center mb-6">{m?.benefit?.title}</h1>
        <CardHoverEffectDemo2 />
      </div>
    </div>
  );
}
