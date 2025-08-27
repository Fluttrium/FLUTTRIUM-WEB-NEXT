"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Modal from '../Modal';
import { Spotlight } from './spotlight';
import { useTranslations } from '@/hooks/useTranslations';

const CorporatioPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { messages } = useTranslations();
    const t: any = (messages as any).CorporationPage;

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
                
                {/* Левая часть с текстом */}
                <div className="flex-1 w-full text-center lg:text-left space-y-6 lg:space-y-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                        {t?.title}
                    </h1>
                    
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-300 max-w-4xl lg:max-w-none">
                        {t?.subtitle}
                    </p>
                    
                    {/* Кнопка */}
                    <div className="flex justify-center lg:justify-start pt-4">
                        <button
                            onClick={handleOpenModal}
                            className="relative inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-lg sm:text-xl md:text-2xl hover:scale-105"
                        >
                            {t?.cta}
                        </button>
                    </div>
                </div>

                {/* Правая часть с изображением */}
                <div className="w-full lg:w-1/2 xl:w-2/5 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                        <Image
                            src="/taximock/iPhone-15-Pro2.png"
                            alt={t?.imageAlt || "Corporate application"}
                            width={600}
                            height={600}
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
            
            {/* Модальное окно */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default CorporatioPage;
