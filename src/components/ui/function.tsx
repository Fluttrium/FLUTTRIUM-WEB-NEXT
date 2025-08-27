'use client';
import React from "react";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

export function FunctionEx() {
  const { messages } = useTranslations();
  const t: any = (messages as any).RetailFunctions;
  const advantages = Array.isArray(t?.items) ? (t.items as any[]) : [];

  return (
    <div className="flex flex-col items-center py-10">
      <div className="font-bold mb-6" style={{ fontSize: "40px" }}>
        {t?.title || ""}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {advantages.map((advantage: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-2xl shadow-lg w-full transition duration-300 transform hover:shadow-[0px_0px_20px_5px_rgba(0,102,255,0.6)] hover:bg-blue-600 hover:text-white hover:border-blue-500"
          >
            {/* Картинка */}
            <Image
              src={advantage.image}
              alt={advantage.title}
              width={500}
              height={500}
              className="mb-4 rounded-lg"
            />

            {/* Текст */}
            <div className="text-center mb-4">
              <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>

            {/* Хештеги */}
            <div className="flex flex-wrap justify-center">
              {(advantage.tags as string[]).map((tag: string, tagIndex: number) => (
                <span
                  key={tagIndex}
                  className="border border-gray-400 hover:bg-white hover:text-blue-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
