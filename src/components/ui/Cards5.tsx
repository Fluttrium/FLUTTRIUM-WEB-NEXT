"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";

export function CardHoverEffectDemo5() {
  const { messages } = useTranslations();
  const m: any = (messages as any).NextjsPage;
  return (
    <>
      <div id="service" className="flex justify-center">
        <h1 className="text-4xl font-semibold text-black dark:text-white text-center">
          <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none block mb-5">
            {m?.process?.title}
          </span>
        </h1>
      </div>
      <div className="mx-auto px-8">
        <HoverEffect items={(m?.process?.items as any) || []} />
      </div>
    </>
  );
}

type ProjectItem = {
  number: number;
  title: string;
  description: string;
  link?: string;
};

interface HoverEffectProps {
  items: ProjectItem[];
}

export function HoverEffect({ items }: HoverEffectProps) {
  return (
    <div className="w-full">
      {/* Десктопная версия: грид */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="transition-all duration-300 transform hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-lg p-6 border border-gray-200 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold mb-4">
              {item.number}. {item.title}
            </h2>
            <p className="text-lg">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Мобильная версия: горизонтальный скролл с уменьшенной шириной карточек */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex space-x-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-300 transform hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-lg p-6 border border-gray-200 rounded-lg shadow-lg flex-shrink-0 w-[220px] h-[350px] flex flex-col"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                {item.number}. {item.title}
              </h2>
              <p className="text-sm sm:text-base flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
