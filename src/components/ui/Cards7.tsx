"use client";

import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

export function CardHoverEffectDemo7() {
  return (
    <>
      {/* Секция для отраслевых решений */}
      <div className="justify-center mt-10">
        <IndustrySolutions />
      </div>
    </>
  );
}

export function IndustrySolutions() {
  const { messages } = useTranslations();
  const t: any = (messages as any).IndustrySolutions;
  const items: any[] = Array.isArray(t?.items) ? t.items : [];

  const icons: React.ReactElement[] = [
    <Image
      key="0"
      alt="tools"
      src="/icons/screwdriver.png"
      width={100}
      height={100}
    />,
    <Image
      key="1"
      alt="circuit"
      src="/icons/circuit.png"
      width={100}
      height={100}
    />,
    <Image
      key="2"
      alt="car"
      src="/icons/electric-car.png"
      width={100}
      height={100}
    />,
    <Image
      key="3"
      alt="fashion"
      src="/icons/fashion.png"
      width={100}
      height={100}
    />,
    <Image
      key="4"
      alt="jewelry"
      src="/icons/jewelry.png"
      width={100}
      height={100}
    />,
    <Image
      key="5"
      alt="furniture"
      src="/icons/furnitures.png"
      width={100}
      height={100}
    />,
    <Image
      key="6"
      alt="healthcare"
      src="/icons/healthcare.png"
      width={100}
      height={100}
    />,
    <Image
      key="7"
      alt="coding"
      src="/icons/coding.png"
      width={100}
      height={100}
    />,
    <Image
      key="8"
      alt="store"
      src="/icons/store.png"
      width={100}
      height={100}
    />,
    <Image
      key="9"
      alt="grocery"
      src="/icons/grocery-cart.png"
      width={100}
      height={100}
    />,
    <Image key="10" alt="art" src="/icons/img.png" width={100} height={100} />,
    <Image
      key="11"
      alt="hobbies"
      src="/icons/hobbies.png"
      width={100}
      height={100}
    />,
  ];

  return (
    <div className="text-center px-2 sm:px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-20 leading-tight break-words">
        {t?.title || ""}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
        {items.map((industry, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md flex flex-col items-center justify-center w-full h-24 sm:h-28 md:h-32 lg:h-40 bg-gray-200 transition-transform duration-300 transform hover:scale-105 p-1 sm:p-2"
          >
            {icons[index] && (
              <div className="flex items-center justify-center object-cover mb-1 sm:mb-2">
                {icons[index]}
              </div>
            )}
            <p className="text-xs sm:text-sm text-center text-black leading-tight break-words px-1">
              {industry.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
