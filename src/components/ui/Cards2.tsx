"use client";
import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import Modal from "../Modal";

export function CardHoverEffectDemo2() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { messages } = useTranslations();
  const m: any = (messages as any).FlutterPage;

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const projects = [
    {
      title: m?.benefits?.cost?.title || "Стоимость ниже",
      description:
        m?.benefits?.cost?.description ||
        "Экономия бюджета, в среднем, от 30% до 50%. Вы не платите за два отдельных проекта, как при использовании нативных решений",
    },
    {
      title: m?.benefits?.speed?.title || "Скорость выше",
      description:
        m?.benefits?.speed?.description ||
        "Сокращение сроков выхода на рынок. Один Flutter-разработчиков может выполнять задачи двух нативных в те же сроки",
    },
    {
      title: m?.benefits?.performance?.title || "Производительность",
      description:
        m?.benefits?.performance?.description ||
        "Пользователи не заметят разницы нативом - приложения на Flutter работают быстро и эффективно",
    },
    {
      title: m?.benefits?.functionality?.title || "Функциональность",
      description:
        m?.benefits?.functionality?.description ||
        "Flutter-приложения создаются для ритейла, банков, страховых и других бизнесов без ограничений",
    },
  ];

  return (
    <>
      <div id="service" className="flex justify-center"></div>
      <div className="max-w-5xl mx-auto px-8 lg:border lg:border-gray-200 lg:rounded-lg lg:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-600 hover:text-white" // Добавлены классы для подсветки
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-md">{project.description}</p>
            </div>
          ))}
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
      <div className="flex justify-center lg:justify-start mt-12">
        {/* Кнопка */}
        <button
          onClick={handleOpenModal}
          className="relative inline-flex items-center justify-center px-12 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-xl"
        >
          {m?.demoButton || "Запросить Демо"}
        </button>
      </div>
    </>
  );
}
