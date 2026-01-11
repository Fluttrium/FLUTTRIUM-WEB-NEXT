"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import Modal from "../Modal";
import { Spotlight } from "./spotlight";

const InternetShopPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { messages } = useTranslations();
  const t: any = (messages as any).InternetShopPage;

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-20 relative">
      <Spotlight className="absolute z-50 top-0 right-50" fill="white" />

      {/* Фон с решеткой, скрытый на мобильных */}
      <div className="absolute inset-0 bg-slate-950 hidden sm:block">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* Контейнер для контента */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full z-10">
        {/* Левая часть с текстом */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-12">
            {t?.title}
          </h1>
          <p className="text-lg md:text-xl">{t?.subtitle}</p>
          <div className="flex justify-center md:justify-start mt-8 md:mt-12">
            <button
              onClick={handleOpenModal}
              className="relative inline-flex items-center justify-center px-8 md:px-12 py-3 md:py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-lg md:text-xl"
            >
              {t?.cta}
            </button>
          </div>
        </div>

        {/* Изображение ниже текста на мобильных устройствах, справа на десктопах */}
        <div className="w-full md:w-4/5 flex justify-center mt-8 md:mt-0">
          <Image
            src="/knifesmock/MacBook14.png"
            alt={t?.imageAlt || "Online store"}
            width={1200}
            height={1200}
            className="rounded-lg shadow-lg object-cover w-full h-auto max-w-sm md:max-w-full"
          />
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default InternetShopPage;
