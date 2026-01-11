"use client";
import Link from "@mui/material/Link";
import { Atom, Expand, Lock, Pyramid, Scale, Store } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export function Advantage() {
  const { messages } = useTranslations();
  const t: any = (messages as any).RetailAdvantages;
  const items: any[] = Array.isArray(t?.items) ? t.items : [];

  const iconByIndex = (idx: number) => {
    const icons = [
      <Store key="0" className="w-12 h-12 sm:w-16 sm:h-16" />,
      <Lock key="1" className="w-12 h-12 sm:w-16 sm:h-16" />,
      <Scale key="2" className="w-12 h-12 sm:w-16 sm:h-16" />,
      <Expand key="3" className="w-12 h-12 sm:w-16 sm:h-16" />,
      <Pyramid key="4" className="w-12 h-12 sm:w-16 sm:h-16" />,
      <Atom key="5" className="w-12 h-12 sm:w-16 sm:h-16" />,
    ];
    return icons[idx] ?? icons[0];
  };

  return (
    <div className="flex flex-col items-center py-6 sm:py-10">
      <div className="font-bold mb-4 sm:mb-6 text-center text-3xl sm:text-5xl">
        {t?.title || ""}
      </div>
      <div className="w-full max-w-6xl px-2 sm:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {items.map((advantage, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 sm:p-4 border rounded-lg shadow-lg"
            >
              {iconByIndex(index)}
              <h3 className="font-bold text-center mt-2 mb-1 text-sm sm:text-xl">
                {advantage.title}
              </h3>
              <p className="text-center text-xs sm:text-base">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link href="/brief">
        <button className="mt-10 inline-flex items-center justify-center px-12 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-xl">
          {t?.cta || ""}
        </button>
      </Link>
    </div>
  );
}
