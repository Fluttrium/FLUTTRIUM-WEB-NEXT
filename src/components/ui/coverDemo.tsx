import React from "react";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "./spotlight";

export function CoverDemo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full px-8 md:px-16 lg:px-24 relative">
      <Spotlight className="absolute z-50 top-0 right-50" fill="white" />

      {/* Левая часть с текстом */}
      <div className="w-full md:w-1/2 md:pl-8 lg:pl-12">
        <h1 className="text-6xl md:text-5xl lg:text-6xl font-semibold mx-auto mt-6 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Разрабатываем Мобильные приложения <br /> на <Cover>Flutter</Cover>
        </h1>
        <button className="flex items-center px-8 md:px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-lg md:text-xl mt-8">
          Бесплатная консультация
          <svg
            className="ml-2 w-6 h-6 md:w-8 md:h-8"
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
      </div>

      {/* Правая часть с изображением */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center items-center md:pr-8 lg:pr-12">
        <Image
          src="/taximock/Black-Titanium.png"
          alt="Описание изображения"
          className="w-3/4 h-2/4 my-20 object-contain transform rotate-2 shadow-lg" // Поворот на -5 градусов, добавлена тень
          style={{ transform: 'rotate(-70deg)', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)' }}
          width={512}
          height={512}
        />
      </div>
    </div>
  );
}
