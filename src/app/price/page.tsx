"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Modal from "@/components/Modal";
import { useTranslations } from "use-intl";

export default function Price() {
  const [isModalOpen, setModalOpen] = useState(false);
  const t = useTranslations('PricePage');

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
        <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-10 sm:space-y-0 sm:mt-0 mt-20 mb-16">
          {/* Standard plan */}
          <BackgroundGradient className="rounded-[22px] max-w-sm p-6 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-between items-center gap-6 sm:h-full">
            <p className="text-2xl sm:text-3xl dark:text-neutral-200 text-center">
              {t('standardPlan.title')}
            </p>
            <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 text-center">
              <h2 className="text-base sm:text-xl font-semibold mb-3">
                {t('standardPlan.included')}
              </h2>
              <ul className="list-disc list-inside text-xs sm:text-sm mb-3">
                {t.raw('standardPlan.features').map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-center mb-4">
              {t('standardPlan.price')}
            </h3>
            <button
              onClick={handleOpenModal}
              className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-black dark:border-white bg-blue-600 text-white transition duration-200 hover:bg-blue-700 mb-4"
              title={t('standardPlan.cta')}
            >
              <svg
                className="w-10 h-10"
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
          </BackgroundGradient>

          {/* Premium plan */}
          <BackgroundGradient className="rounded-[22px] max-w-sm p-6 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-between items-center gap-6 sm:h-full">
            <p className="text-2xl sm:text-3xl dark:text-neutral-200 text-center">
              {t('premiumPlan.title')}
            </p>
            <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 text-center">
              <h2 className="text-base sm:text-xl font-semibold mb-3">
                {t('premiumPlan.included')}
              </h2>
              <ul className="list-disc list-inside text-xs sm:text-sm mb-3">
                {t.raw('premiumPlan.features').map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-center mb-4">
              {t('premiumPlan.price')}
            </h3>
            <button
              onClick={handleOpenModal}
              className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-black dark:border-white bg-blue-600 text-white transition duration-200 hover:bg-blue-700 mb-4"
              title={t('premiumPlan.cta')}
            >
              <svg
                className="w-10 h-10"
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
          </BackgroundGradient>

          {/* Custom services */}
          <BackgroundGradient className="rounded-[22px] max-w-sm p-6 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-between items-center gap-6 sm:h-full">
            <p className="text-2xl sm:text-3xl dark:text-neutral-200 text-center">
              {t('customServices.title')}
            </p>
            <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 text-center">
              <h2 className="text-base sm:text-xl font-semibold mb-3">
                {t('customServices.included')}
              </h2>
              <ul className="list-disc list-inside text-xs sm:text-sm mb-3">
                {t.raw('customServices.features').map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-center mb-4">
              {t('customServices.description')}
            </h3>
            <button
              onClick={handleOpenModal}
              className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-black dark:border-white bg-blue-600 text-white transition duration-200 hover:bg-blue-700 mb-4"
              title={t('customServices.cta')}
            >
              <svg
                className="w-10 h-10"
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
          </BackgroundGradient>
        </div>
        {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
      </motion.h1>
    </LampContainer>
  );
}
