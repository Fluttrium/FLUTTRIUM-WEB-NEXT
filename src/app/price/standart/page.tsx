import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./globals.css";

const StandardPlan = () => {
    return (
        <div
            className=" p-1 sm:p-2 flex items-center justify-center  bg-black bg-opacity-50 overflow-hidden">
            <div className="ring-container p-0.25 rounded-2xl relative z-10 shadow-lg animate-float">
                <div className="content-container max-w-xl mx-auto rounded-2xl p-1 sm:p-2 bg-white bg-opacity-90">
                    <h1 className="text-lg sm:text-2xl font-bold text-center mb-2 sm:mb-3 text-black">
                        Стандартный план разработки
                    </h1>
                    <h2 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-center text-black">
                        Что включено:
                    </h2>
                    <ul className="list-disc list-inside text-xs sm:text-sm mb-1 sm:mb-2 text-gray-800">
                        <li>Разработка многостраничного сайта/приложения (до 10 страниц/экранов)</li>
                        <li>Индивидуальный дизайн</li>
                        <li>Адаптация под мобильные устройства</li>
                        <li>SEO оптимизация</li>
                        <li>Интеграция с CRM или другими сервисами</li>
                        <li>Поддержка 3 месяца</li>
                    </ul>
                    <div className="flex justify-center mb-1 sm:mb-2">
                        <div className="border border-blue-600 rounded-lg p-0.5 shadow-lg">
                            <Image
                                src="/projects/case8.png" // Update with your image path
                                alt="Пример стандартного дизайна"
                                width={125} // 4 times smaller
                                height={75} // 4 times smaller
                                className="rounded-lg shadow-md w-full sm:w-auto"
                            />
                        </div>
                    </div>
                    <h3 className="text-base sm:text-xl font-semibold text-center mb-1 sm:mb-2 text-black">
                        Цена: от 120 000 рублей
                    </h3>
                    <div className="flex justify-center mt-2 sm:mt-3">
                        <Link href="/contact">
                            <button
                                className="bg-blue-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-lg transition duration-300 hover:bg-blue-700">
                                Получить обратную связь
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StandardPlan;
