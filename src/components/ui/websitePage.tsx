"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "use-intl";
import Modal from "../Modal";

const WebSitePage = () => {
  const t = useTranslations("Website");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="w-full rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 px-4 sm:px-6 lg:px-0">
      {/* Текстовая часть */}
      <div className="flex-1 w-full text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8">
          {t("text-1")}
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-white mb-4">
          {t("text-2")}
        </p>
        <button
          onClick={handleOpenModal}
          className="relative inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out mx-auto lg:mx-0 mt-6 lg:mt-12"
        >
          <span className="flex items-center gap-3 text-lg sm:text-xl">
            {t("button")}
          </span>
        </button>
      </div>

      {/* Изображение */}
      <div className="w-full flex justify-center lg:w-2/4 lg:justify-end">
        <Image
          src="/knifesmock/MacBook14.png" // Убедитесь, что путь к изображению корректен
          alt="Web Application Mockup"
          className="w-3/4 sm:w-2/3 lg:w-full h-auto object-contain"
          width={1000}
          height={1000}
        />
      </div>

      {/* Модальное окно */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default WebSitePage;
