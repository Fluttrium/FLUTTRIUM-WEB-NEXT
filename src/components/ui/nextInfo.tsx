"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "../Modal";

const NextInfo = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div className="w-full pt-40 rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
            {/* Текстовая часть */}
            <div className="flex-1 w-full text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-8">
                    В каких ситуациях пригодится сайт на фреймворке Next?
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-white-700 mb-4">
                    Создание сайтов на Next позволяет заказчику получить современный комфортный в использовании и управлении веб-ресурс, где есть все необходимое для достижения поставленных бизнес-целей
                </p>
                <button
                    onClick={handleOpenModal}
                    className="relative inline-flex items-center justify-center px-12 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-xl"
                >
                    Запросить Демо
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
