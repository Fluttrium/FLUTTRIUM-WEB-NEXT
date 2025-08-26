"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import Modal from "../Modal";
import { useTranslations } from "@/hooks/useTranslations";

export function CoverDemo() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { messages } = useTranslations();
  const m: any = (messages as any).FlutterPage;

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col md:flex-row items-center w-full px-8 md:px-16 lg:px-12 relative">
      {/* Левая часть с текстом */}
      <div className="w-full md:w-1/2 md:pl-8 lg:pl-6 flex flex-col justify-center items-center md:items-start">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold mx-auto mt-0 sm:mt-4 md:mt-0 py-4 sm:py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white text-center md:text-left">
          {m?.cover?.title.split('\n')[0]}<br />{m?.cover?.title.split('\n')[1]?.split('Flutter')[0]} <Cover>Flutter</Cover>
        </h1>
        <div className="flex justify-center mt-8 md:mt-12">
          <button
            onClick={handleOpenModal}
            className="relative inline-flex items-center justify-center px-8 md:px-12 py-3 md:py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-lg md:text-xl"
          >
            {m?.cover?.cta}
          </button>
        </div>
      </div>

      {/* Правая часть с изображением */}
      <div className="w-full md:w-1/2 flex justify-center items-center md:pr-8 lg:pr-12">
        <Image
          src="/taximock/Black-Titanium.png"
          alt={m?.cover?.imageAlt || "Preview"}
          className="w-1/2 sm:w-1/3 md:w-2/3 lg:w-3/4 h-auto my-20 object-contain transform rotate-2 shadow-lg"
          style={{ transform: 'rotate(-70deg)', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)' }}
          width={512}
          height={512}
        />
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
}
