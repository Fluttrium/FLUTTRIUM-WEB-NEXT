import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div className="flex flex-col items-center"> {/* Добавлен flex для центрирования */}
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Разрабатываем Мобильные приложения <br /> на <Cover>Flutter</Cover>
      </h1>
      <button className="flex items-center px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-sm z-30">
        Бесплатная консультация
        <svg
          className="ml-2 w-10 h-10"
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
  );
}
 