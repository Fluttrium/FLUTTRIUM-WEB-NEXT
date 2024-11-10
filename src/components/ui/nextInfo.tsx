"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "../Modal";

const NextInfo = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div className="w-full rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
            {/* Текстовая часть */}
            <div className="flex-1 w-full text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-8">
                    В каких ситуациях пригодится сайт на фреймворке Next?
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-white-700 mb-4">
                    Создание сайтов на Next позволяет заказчику получить современный комфортный в использовании и управлении веб-ресурс, где есть все необходимое для достижения поставленных бизнес-целей.
                </p>
                <button
                    onClick={handleOpenModal}
                    className="flex items-center justify-center mx-auto lg:mx-0 px-12 md:px-16 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl md:text-2xl mt-6 lg:mt-12"
                >
                    Запросить Демо
                    <svg
                        className="ml-2 w-8 h-8 md:w-10 md:h-10"
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

            {/* Изображение */}
            <div className="w-full flex justify-center lg:w-2/4 lg:justify-end">
                <Image
                    src="/nextjsmock/Mac Studio.png" // Путь к вашему изображению
                    alt="Mac Studio"
                    className="w-3/4 md:w-2/3 lg:w-full h-auto object-contain"
                    width={1000}
                    height={1000}
                />
            </div>

            {/* Модальное окно */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default NextInfo;
