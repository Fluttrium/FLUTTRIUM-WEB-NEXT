"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";

export function CardHoverEffectDemo3() {
  const { messages } = useTranslations();
  const m: any = (messages as any).FlutterPage;
  return (
    <>
      <div id="service" className="flex justify-center">
        <h1 className="text-4xl font-semibold text-black dark:text-white text-center">
          <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none block mb-5">
            {m?.process?.title}
          </span>
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-8 lg:border lg:border-gray-200 lg:rounded-lg lg:p-4">
        <HoverEffect items={(m?.process?.items as any) || []} />
      </div>
    </>
  );
}

type ProjectItem = {
    number: number;
    title: string;
    description: string;
    link?: string; // Поле link можно сделать опциональным, если оно не обязательно
  };
  
  interface HoverEffectProps {
    items: ProjectItem[];
  }
  
  export function HoverEffect({ items }: HoverEffectProps) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="hover:bg-blue-600 hover:text-white transition p-6 border border-gray-200 rounded-lg shadow-lg"
          >
            {/* Добавляем номер перед заголовком */}
            <h2 className="text-xl font-bold mb-4">
              {item.number}. {item.title}
            </h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
