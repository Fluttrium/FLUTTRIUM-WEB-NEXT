"use client";

import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

export function CardHoverEffectDemo6() {
  const { messages } = useTranslations();
  const t: any = (messages as any).InternetShopCards;

  return (
    <>
      <div id="service" className="flex justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black dark:text-white text-center px-4">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[4rem] font-bold mt-1 leading-tight block mb-3 md:mb-5 break-words">
            {t?.title || ""}
          </span>
        </h1>
      </div>
      <div className="mx-auto px-4 sm:px-6 md:px-8">
        <HoverEffect items={Array.isArray(t?.items) ? t.items : []} />
      </div>
    </>
  );
}

// Убрана локальная константа projects — данные берём из переводов

type ProjectItem = {
  number: number;
  title: string;
  description: string;
  image?: React.ReactElement;
  link?: string;
  buttonText?: string;
};

interface HoverEffectProps {
  items: ProjectItem[];
}

export function HoverEffect({ items }: HoverEffectProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="p-4 sm:p-6 border border-gray-200 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition"
        >
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight break-words">
            {item.number}. {item.title}
          </h2>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed break-words">
            {item.description}
          </p>
          {item.buttonText && (
            <div className="mt-3 sm:mt-4">
              <Link href="/brief">
                <button className="relative inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-3 sm:py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-sm sm:text-base md:text-xl">
                  {item.buttonText}
                </button>
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
