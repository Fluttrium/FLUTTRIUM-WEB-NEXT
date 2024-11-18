"use client"
import React, { useState } from "react";
import Image from "next/image";
import Modal from "../Modal";

export function FreeAudit() {
  const [isModalOpen, setModalOpen] = useState(false);

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
          Бесплатный экспресс‑аудит приложения
        </h2>

        <p className="text-lg mb-6 text-whites text-4xl sm:text-2xl ">
          Аудит приложения требуется, если оно работает некорректно. Пользователи публикуют негативные комментарии о работе приложения и ставят низкие оценки — что отрицательно влияет на продвижение приложения в сторах
        </p>

        <ul className="list-disc list-inside mb-6 text-white text-left sm:text-2xl">
          <li>Негативные комментарии пользователей</li>
          <li>Низкие оценки в сторах</li>
          <li>Проблемы с производительностью</li>
        </ul>

        <div className="flex justify-center lg:justify-start mt-12">
                    {/* Кнопка */}
                    <button
                        onClick={handleOpenModal}
                        className="flex items-center px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl mt-12"
                    >
                        Запросить Демо
                        <svg
                            className="ml-2 w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
