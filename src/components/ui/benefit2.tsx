"use client";
import { useTranslations } from "@/hooks/useTranslations";
import { CardHoverEffectDemo4 } from "./Cards4";

export function Benefit2() {
  const { messages } = useTranslations();
  const m: any = (messages as any).NextjsPage;
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center space-y-6 md:space-y-0 md:space-x-6 p-8 md:p-12">
      {/* Заголовок и карточки */}
      <div className="w-full flex flex-col items-center text-center md:px-8">
        <h1 className="text-2xl md:text-[4rem] font-semibold text-black dark:text-white mb-10 md:mb-12 leading-relaxed md:leading-snug">
          {m?.benefits?.title}
        </h1>
        <div className="overflow-x-auto">
          <CardHoverEffectDemo4 />
        </div>
      </div>
    </div>
  );
}
