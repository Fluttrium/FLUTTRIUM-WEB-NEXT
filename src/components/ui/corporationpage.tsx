"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Modal from '../Modal';
import { Spotlight } from './spotlight'; // Подключаем компонент Spotlight

const CorporatioPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div className="w-full rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 px-4 sm:px-6 lg:px-0"> 
            
            <div className="flex flex-col md:flex-row items-center justify-center w-full z-10"> {/* Добавлено z-10 для поднятия над фоном */}
                {/* Левая часть с текстом и компонентом */}
                <div className="flex-1 w-full text-center lg:text-left">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-12">
                        Разработка корпоративных приложений
                    </h1>
                    <p className="text-2xl md:text-2xl">
                        Разработаем корпоративное приложение для оцифровки и ускорения HR-процессов: корпоративного
                        документооборота, оформления больничных и отпусков, обучения и найма сотрудников
                    </p>
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

                {/* Правая часть с изображением */}
            </div>
            <div className="w-full flex justify-center lg:w-2/4 lg:justify-end mt-12 sm:mt-20 lg:mt-20">
    <Image
        src="/taximock/iPhone-15-Pro2.png" // Путь к вашему изображению
        alt="Sales Application"
        width={1200} // Увеличенный размер изображения
        height={1200} // Увеличенный размер изображения
        className="mt-20 w-3/4 md:w-2/3 lg:w-full h-auto object-contain" // Обеспечиваем адаптивность изображения
    />
</div>
            {/* Модальное окно */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default CorporatioPage;
