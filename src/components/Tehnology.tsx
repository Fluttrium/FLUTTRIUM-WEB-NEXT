"use client";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Coздаваем" },
    { text: "потрясающие" },
    { text: "приложения" },
    { text: "на" },
    { text: "фреймворке" },
    {
      text: "Flutter",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div id="technology" className="hidden md:flex flex-col items-center h-[20rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        Дорога к свободе начинается отсюда
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          связаться с нами
        </button>
      </div>
    </div>
  );
}
