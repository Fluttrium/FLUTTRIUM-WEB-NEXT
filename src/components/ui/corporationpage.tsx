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
                        className="relative inline-flex items-center justify-center px-12 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-xl"
                    >
                        Запросить Демо
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
