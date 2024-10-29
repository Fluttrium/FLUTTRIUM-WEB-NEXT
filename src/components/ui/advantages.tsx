import Link from "@mui/material/Link";
import React from "react";

export function Advantage() {
  const advantages = [
    {
      title: "Все магазины приложений",
      description: "App Store, Google Play, App Gallery, RuStore", 
      image: "/projects/images.jpeg", // Укажите путь к изображению
    },
    {
      title: "Фиксированная стоимость",
      description: "Дополнительных расходов нет",
      image: "/projects/development-cost.jpg", // Укажите путь к изображению
    },
    {
      title: "Лицензия на приложение",
      description: "Отдаем код, а не сдаем в аренду",
      image: "/projects/license-2145143950.png", // Укажите путь к изображению
    },
    {
      title: "Масштабируемость",
      description: "Нет ограничений для развития",
      image: "/projects/images.png", // Укажите путь к изображению
    },
    {
      title: "Инфраструктура партнерских сервисов",
      description: "1C, Manzana, Sberbank и другие",
      image: "/projects/png_transparent_computer_servers_computer_network_backup_computer_computer_network_angle_computer-_2_-_1_.png", // Укажите путь к изображению
    },
    {
      title: "Своя экосистема",
      description: "Приложения для сборщиков и доставщиков плюс к основному",
      image: "/projects/images5.png", // Укажите путь к изображению
    },
  ];

  return (
    <div className="flex flex-col items-center py-10">
     <div className="font-bold mb-6" style={{ fontSize: "60px" }}>
  Преимущества
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-lg shadow-lg"
          >
            <img
              src={advantage.image}
              alt={advantage.title}
              className="w-full h-32 object-cover rounded mb-4" // Изображение теперь идет первым
            />
            <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
            <p className="text-center mb-4">{advantage.description}</p>
          </div>
        ))}
      </div>
      <Link href="/flutter">
            <button className="flex items-center px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl mt-12">
              Обсудить проект
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
    </div>
    
  );
}
