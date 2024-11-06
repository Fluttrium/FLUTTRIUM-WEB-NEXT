"use client";
import React from "react";
import {motion} from "framer-motion";
import {LampContainer} from "@/components/ui/lamp";
import {BackgroundGradient} from "@/components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

export default function Price() {
    return (
        <LampContainer>
            <motion.h1
                initial={{opacity: 0.5, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className=" "
            >
                <div className='  -translate-y-40 flex flex-row space-x-10'>

                    <BackgroundGradient className="rounded-[22px]  max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-center items-center gap-7">

                        <p className=" text-2xl  dark:text-neutral-200 text-center">
                            Стандартный план разработки
                        </p>

                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                            <h2 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-center">
                                Что включено:
                            </h2>
                            <ul className="list-disc list-inside text-xs sm:text-sm mb-1 sm:mb-2 ">
                                <li>Разработка многостраничного сайта/приложения (до 10 страниц/экранов)</li>
                                <li>Индивидуальный дизайн</li>
                                <li>Адаптация под мобильные устройства</li>
                                <li>SEO оптимизация</li>
                                <li>Интеграция с CRM или другими сервисами</li>
                                <li>Поддержка 3 месяца</li>
                            </ul>
                        </div>

                        <h3 className="text-base sm:text-xl font-semibold text-center mb-1 sm:mb-2 ">
                            Цена: от 120 000 рублей
                        </h3>
                        <Link href="/brief">
                            <button
                                className="bg-blue-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-lg transition duration-300 hover:bg-blue-700">
                                Получить обратную связь
                            </button>
                        </Link>
                    </BackgroundGradient>
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-center items-center gap-6">

                        <p className=" text-2xl  dark:text-neutral-200">
                            Премиум план разработки
                        </p>

                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                            <h2 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-center">
                                Что включено:
                            </h2>
                            <ul className="list-disc list-inside text-xs sm:text-sm mb-1 sm:mb-2 ">
                                <li>Разработка сложного сайта/приложения (от 10 страниц/экранов)</li>
                                <li>Полностью кастомизированный дизайн</li>
                                <li>Полная оптимизация под мобильные устройства и различные платформы</li>
                                <li>Интеграция с внешними сервисами (оплата, аналитика, CRM)</li>
                                <li>Полная SEO оптимизация</li>
                                <li>Техническая поддержка 6 месяцев</li>
                            </ul>
                        </div>

                        <h3 className="text-base sm:text-xl font-semibold text-center mb-1 sm:mb-2 ">
                            Цена: от 300 000 рублей
                        </h3>
                        <Link href="/brief">
                            <button
                                className="bg-blue-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-lg transition duration-300 hover:bg-blue-700">
                                Получить обратную связь
                            </button>
                        </Link>
                    </BackgroundGradient>
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-center items-center gap-2">

                        <p className=" text-2xl  dark:text-neutral-200">
                            Индивидуальные услуги
                        </p>

                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                            <h2 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-center">
                                Что включено:
                            </h2>
                            <ul className="list-disc list-inside text-xs sm:text-sm mb-1 sm:mb-2 ">
                                <li>Поддержка и обновление приложений</li>
                                <li>Разработка дополнительных функций</li>
                                <li>Оптимизация скорости загрузки сайта</li>
                                <li>Модернизация дизайна</li>
                            </ul>
                            <h3 className=" text-xl font-semibold text-center mb-4 sm:mb-6 ">
                                Гибкий подход к каждому проекту
                            </h3>
                            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-white text-center">
                                Мы предлагаем индивидуальные планы и дополнительные услуги, чтобы
                                удовлетворить ваши уникальные потребности
                            </p>
                        </div>
                        <Link href="/brief">
                            <button
                                className="bg-blue-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-lg transition duration-300 hover:bg-blue-700">
                                Получить обратную связь
                            </button>
                        </Link>
                    </BackgroundGradient>


                </div>
            </motion.h1>
        </LampContainer>
    );
}
