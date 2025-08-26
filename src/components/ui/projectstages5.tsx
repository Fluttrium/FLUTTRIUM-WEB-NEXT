"use client";
import React, { useState } from "react";
import Modal from "../Modal";
import { useTranslations } from "@/hooks/useTranslations";

// SVG-иконка
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 mr-4 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

// Этапы для itsupport берём из ITSupportPage.stages

export function ProjectStages5() {

  const [isModalOpen, setModalOpen] = useState(false);
  const { messages } = useTranslations();
  const t: any = (messages as any).ITSupportPage;

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleStage = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative flex flex-col md:flex-row mx-auto px-8 py-16">
      {/* Основной контент */}
      <div className="relative w-full md:w-3/4 pr-8">
        <h2 className="text-5xl font-semibold mb-10">{t?.stages?.title}</h2>
        <div className="space-y-8">
          {(t?.stages?.items || []).map((stage: any, index: number) => (
            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
              <button
                className="flex items-center w-full text-left p-8 rounded-lg transition-colors duration-200 ease-in-out hover:text-blue-600"
                onClick={() => toggleStage(index)}
              >
                <PlusIcon />
                <h3 className="text-2xl font-medium">{stage?.stage}</h3>
              </button>
              {openIndex === index && (
                <div className="p-8 border-t border-gray-300">
                  <p className="text-lg">{stage?.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block w-full md:w-1/4">
            <div className="max-h-96 overflow-y-auto p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t?.sidebar?.title}</h3>
          <p className="text-lg text-gray-700 mb-6">
            {t?.sidebar?.description}
          </p>
          <button
  onClick={handleOpenModal}
  className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
>
  {t?.sidebar?.cta}
  <svg
    className="ml-2 w-5 h-5"
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
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
}
