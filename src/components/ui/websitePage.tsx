'use client';
import React, { useState } from 'react';
import { useTranslations } from 'use-intl';
import Image from 'next/image';
import Modal from '../Modal';

const WebSitePage = () => {
    const t = useTranslations('Website');
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div className="w-full rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 px-4 sm:px-6 lg:px-0">
            {/* Текстовая часть */}
            <div className="flex-1 w-full text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8">
                    {t('text-1')}
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-white mb-4">
                    {t('text-2')}
                </p>
                <button
                    onClick={handleOpenModal}
                    className="flex items-center justify-center mx-auto lg:mx-0 px-8 sm:px-12 py-3 sm:py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-lg sm:text-xl mt-6 lg:mt-12"
                >
                    {t('button')}
                    <svg
                        className="ml-2 w-6 h-6 sm:w-8 sm:h-8"
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
