"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import Modal from "@/components/Modal";

export default function Price() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-10 sm:space-y-0 sm:mt-0 mt-20">
          {/* Standard plan */}
          <BackgroundGradient className="rounded-[22px] max-w-sm p-6 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-between items-center gap-6 sm:h-full">
            <p className="text-2xl sm:text-3xl dark:text-neutral-200 text-center">
              Стандартный план разработки
            </p>
            <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 text-center">
              <h2 className="text-base sm:text-xl font-semibold mb-3">
                Что включено:
              </h2>
              <ul className="list-disc list-inside text-xs sm:text-sm mb-3">
                <li>Разработка многостраничного сайта/приложения (до 10 страниц/экранов)</li>
                <li>Индивидуальный дизайн</li>
                <li>Адаптация под мобильные устройства</li>
                <li>SEO оптимизация</li>
                <li>Интеграция с CRM или другими сервисами</li>
                <li>Поддержка 3 месяца</li>
              </ul>
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-center mb-4">
              Цена: от 120 000 рублей
            </h3>
            <Link href="/brief">
              <button
                onClick={handleOpenModal}
                className="flex items-center px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl"
              >
                Оставить заявку
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
            </Link>
          </BackgroundGradient>

          {/* Premium plan */}
          <BackgroundGradient className="rounded-[22px] max-w-sm p-6 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-between items-center gap-6 sm:h-full">
            <p className="text-2xl sm:text-3xl dark:text-neutral-200 text-center">
              Премиум план разработки
            </p>
            <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 text-center">
              <h2 className="text-base sm:text-xl font-semibold mb-3">
                Что включено:
              </h2>
              <ul className="list-disc list-inside text-xs sm:text-sm mb-3">
                <li>Разработка сложного сайта/приложения (от 10 страниц/экранов)</li>
                <li>Полностью кастомизированный дизайн</li>
                <li>Полная оптимизация под мобильные устройства и различные платформы</li>
                <li>Интеграция с внешними сервисами (оплата, аналитика, CRM)</li>
                <li>Полная SEO оптимизация</li>
                <li>Техническая поддержка 6 месяцев</li>
              </ul>
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-center mb-4">
              Цена: от 300 000 рублей
            </h3>
            <Link href="/brief">
              <button
                onClick={handleOpenModal}
                className="flex items-center px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl"
              >
                Оставить заявку
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
            </Link>
          </BackgroundGradient>

          {/* Custom services */}
          <BackgroundGradient className="rounded-[22px] max-w-sm p-6 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-between items-center gap-6 sm:h-full">
            <p className="text-2xl sm:text-3xl dark:text-neutral-200 text-center">
              Индивидуальные услуги
            </p>
            <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 text-center">
              <h2 className="text-base sm:text-xl font-semibold mb-3">
                Что включено:
              </h2>
              <ul className="list-disc list-inside text-xs sm:text-sm mb-3">
                <li>Поддержка и обновление приложений</li>
                <li>Разработка дополнительных функций</li>
                <li>Оптимизация скорости загрузки сайта</li>
                <li>Модернизация дизайна</li>
              </ul>
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-center mb-4">
              Гибкий подход к каждому проекту
            </h3>
            <Link href="/brief">
              <button
                onClick={handleOpenModal}
                className="flex items-center px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl"
              >
                Оставить заявку
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
            </Link>
          </BackgroundGradient>
        </div>
        {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
      </motion.h1>
    </LampContainer>
  );
}
