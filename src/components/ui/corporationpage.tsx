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
        <section className="flex flex-col md:flex-row max-w-max justify-center min-h-screen px-5 md:px-20 relative pt-20 md:pt-0"> {/* Добавляем отступ сверху для мобильной версии */}
            {/* Фоновый цвет с градиентом */}
            <div className="absolute h-full w-full bg-slate-950">
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            </div>

            {/* Компонент Spotlight */}
            <Spotlight
                className="absolute z-50 top-0 left-0 w-full h-full"
                fill="white"
            />

            <div
                className="flex flex-col md:flex-row items-center justify-between w-full z-10"> {/* Добавлено z-10 для поднятия над фоном */}
                {/* Левая часть с текстом и компонентом */}
                <div className="w-full md:w-1/2 mb-12 md:mb-0 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Разработка корпоративных приложений
                    </h1>
                    <p className="text-lg md:text-xl">
                        Разработаем корпоративное приложение для оцифровки и ускорения HR-процессов: корпоративного
                        документооборота, оформления больничных и отпусков, обучения и найма сотрудников. Вы получите
                        кастомную систему с интеграцией с мобильными и веб-приложениями, которая работает под
                        потребности и процессы вашей компании
                    </p>
                    {/* Кнопка */}
                    <button
                        onClick={handleOpenModal}
                        className="flex items-center px-8 md:px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-lg md:text-xl mt-6"
                    >
                        Запросить Демо
                        <svg
                            className="ml-2 w-6 h-6 md:w-8 md:h-8"
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

                {/* Правая часть с изображением */}
            </div>
            <div className="absolute right-0 top-[450px] hidden md:flex w-1/2 justify-center items-center">
                <Image
                    src="/taximock/iPhone-15-Pro2.png" // Путь к вашему изображению
                    alt="Sales Application"
                    width={1200} // Увеличенный размер изображения
                    height={1200} // Увеличенный размер изображения
                    className="absolute right-0 object-cover w-full h-auto" // Обеспечиваем адаптивность изображения
                />
            </div>

            {/* Модальное окно */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    );
};

export default CorporatioPage;
