"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import Modal from "../Modal";

export function FreeAudit() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { messages } = useTranslations();
  const t = (messages as any).AuditPage;

  const handleOpenModal = () => setModalOpen(true);

  const handleCloseModal = () => setModalOpen(false);
  return (
    <div className="relative w-full py-5 px-8 text-center flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Изображение слева, скрыто на мобильных устройствах */}
      <div className="w-full lg:w-2/4 h-full flex justify-center items-center hidden lg:block">
        <Image
          src="/Character10.svg"
          alt="Character Illustration"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Текстовый блок */}
      <div className="w-full lg:w-2/4 text-center lg:text-left ml-6">
        <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-white mt-20">
          {t?.title}
        </h2>

        <p className="text-lg mb-6 text-whites text-4xl sm:text-2xl ">
          {t?.description}
        </p>

        <ul className="list-disc list-inside mb-6 text-white text-left sm:text-2xl">
          <li>{t?.bullets?.negativeComments}</li>
          <li>{t?.bullets?.lowRatings}</li>
          <li>{t?.bullets?.performanceIssues}</li>
        </ul>

        <div className="flex justify-center lg:justify-start mt-12">
          {/* Кнопка */}
          <button
            onClick={handleOpenModal}
            className="relative inline-flex items-center justify-center px-12 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-xl"
          >
            {t?.cta}
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
