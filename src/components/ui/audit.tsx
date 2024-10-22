import React from "react";

export function FreeAudit() {
  return (
    <div className="relative w-full py-10 px-8 text-center flex items-center">
      {/* Летающие микрочастицы */}
      <div className="particles"></div>

      {/* Изображение слева */}
      <div className="flex-shrink-0 w-1/3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-full h-auto"
        >
          <g fill="#E0E0E0">
            <path d="M32 1C15.87 1 3 13.87 3 30s12.87 29 29 29 29-12.87 29-29S48.13 1 32 1zm0 4c13.25 0 24 10.75 24 24s-10.75 24-24 24S8 29.25 8 16 18.75 5 32 5z" />
            <path d="M32 11c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 2c9.94 0 18 8.06 18 18s-8.06 18-18 18-18-8.06-18-18 8.06-18 18-18z" />
            <path d="M22 32c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z" />
            <path d="M26 28c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zM38 28c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z" />
          </g>
          <g stroke="#4A90E2" strokeWidth="1.5">
            <path d="M16 30c0-8.627 7.373-16 16-16s16 7.373 16 16" />
            <path d="M14 30c0-9.941 8.059-18 18-18s18 8.059 18 18" />
          </g>
        </svg>
      </div>

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
