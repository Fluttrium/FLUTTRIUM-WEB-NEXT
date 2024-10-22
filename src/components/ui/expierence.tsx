import React from "react";
import { FaBoxes, FaMobileAlt } from "react-icons/fa"; // Импорт других иконок

export function ExperienceDemo() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-10">
      {/* Левая колонка: Наш опыт */}
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Наш опыт</h2>
        <ul className="text-2xl space-y-4">
          <li className="flex items-start">
            {/* Иконка Flutter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"  // Измените размер иконки по необходимости
              height="30"
              viewBox="0 0 48 48"
              className="mr-2" // Применение отступа справа
            >
              <polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"></polygon>
              <polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"></polygon>
              <rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4" transform="rotate(-45.001 21 33)"></rect>
              <polygon fill="#01579b" points="38,44 26,44 21,39 27,33"></polygon>
              <polygon fill="#084994" points="21,39 30,36 27,33"></polygon>
            </svg>
            Опытная команда Flutter-разработчиков Fluttrium работает с фреймворком с первой beta-версии
          </li>
          <li className="flex items-start">
            <FaBoxes className=" text-2xl text-purple-500 mr-2" /> {/* Иконка компаний */}
            Мы создаем приложения для крупных компаний в ритейле, страховании и спорте
          </li>
          <li className="flex items-start">
            <FaMobileAlt className="text-green-500 mr-2" /> {/* Иконка мобильных */}
            Наши приложения активно развиваются и уже используются пользователями
          </li>
        </ul>
      </div>

      {/* Правая колонка: Видео с панковским стилем */}
      <div className="lg:w-1/2">
        <div className="relative border-4 border-gray-300 rounded-lg overflow-hidden">
          <div className="absolute inset-0 transform rotate-2 skew-y-3 bg-blue-600 z-0"></div>
          <video controls className="w-full h-full relative z-10">
            <source src="/projects/2024-10-22 12.33.41.mp4" type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        </div>
      </div>
    </div>
  );
}
