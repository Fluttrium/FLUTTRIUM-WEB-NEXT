import React from "react";
import Image from "next/image";

export function FreeAudit() {
  return (
      <div className="relative w-full py-10 px-8 text-center flex items-center">
        {/* Изображение слева */}
        <div className="w-1/2 h-full flex justify-center items-center">
          <Image
              src="/Character10.svg"
              alt="Character Illustration"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
          />
        </div>

        {/* Текстовый блок */}
        <div className="w-2/3 text-left ml-6">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Бесплатный экспресс‑аудит приложения
          </h2>

          <p className="text-lg mb-6 text-white">
            Аудит приложения требуется, если оно работает некорректно. Пользователи публикуют негативные комментарии о работе приложения и ставят низкие оценки — что отрицательно влияет на продвижение приложения в сторах.
          </p>

          <ul className="list-disc list-inside mb-6 text-white">
            <li>Негативные комментарии пользователей</li>
            <li>Низкие оценки в сторах</li>
            <li>Проблемы с производительностью</li>
          </ul>

          <div className="flex justify-center">
            <button className="flex items-center px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-sm z-30">
              Бесплатная консультация
              <svg
                  className="ml-2 w-10 h-10"
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
      </div>
  );
}
