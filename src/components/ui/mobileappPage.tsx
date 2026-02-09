"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "use-intl";
import Modal from "../Modal";

const MobileAppPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const t = useTranslations("Mobile"); // Убедитесь, что "Mobile" соответствует ключу переводов в вашем JSON.

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="w-full rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 px-4 sm:px-6 lg:px-0">
      {/* Текстовая часть */}
      <div className="flex-1 w-full text-center lg:text-left">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8">
          {t("h1")} {/* Ключ для перевода заголовка */}
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-8 text-white dark:text-white">
          {t("h2")} {/* Ключ для перевода подзаголовка */}
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-white dark:text-white">
          {t("p")} {/* Ключ для перевода абзаца */}
        </p>
        <div className="flex justify-center lg:justify-start mt-6 sm:mt-8">
          <button
            onClick={handleOpenModal}
            className="relative inline-flex items-center justify-center px-8 sm:px-12 py-3 sm:py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-lg sm:text-xl"
          >
            {t("button")} {/* Ключ для перевода текста кнопки */}
          </button>
        </div>
      </div>

      {/* Изображение */}
      <div className="w-full flex justify-center lg:w-2/4 lg:justify-end">
        <Image
          src="/case8.png" // Убедитесь, что путь к изображению корректен.
          alt="Mac Studio"
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

export default MobileAppPage;
