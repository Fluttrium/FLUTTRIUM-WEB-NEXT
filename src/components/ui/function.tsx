import React from "react";
import Image from "next/image";

export function FunctionEx() {
  const advantages = [
    {
      title: "Регистрация и профиль пользователя",
      description:
        "Простая и безопасная регистрация по номеру телефона. Профиль, который сохраняет демографические характеристики и личные предпочтения покупателей",
      tags: ["аутентификация", "история заказов", "чеки", "бонусы"],
      image: "/iPhone 15.png",
    },
    {
      title: "Главная страница",
      description:
        "Витрина мобильного магазина. Новости, баннеры и сторис расставляют акценты и направляют внимание пользователей",
      tags: ["новости", "баннеры", "программа лояльности", "каталог акций", "скидки"],
      image: "/iPhone 15 (1).png",
    },
    {
      title: "Каталог и карточка товара",
      description:
        "Информативный каталог с фильтрами по категориям, сортировкой и кнопкой «В корзину». Привлекательные карточки товара с отзывами и полной информацией",
      tags: ["список товаров", "адрес доставки", "стоимость", "CloudPayments", "Сбербанк"],
      image: "/iPhone 15 (2).png",
    },
    {
      title: "Корзина и заказ",
      description:
        "Ключевая функция приложения. Собирает важные данные о пользователе, помогает снизить количество отказов и увеличить конверсию",
      tags: ["список товаров", "адрес доставки", "поддержка"],
      image: "/iPhone 15 (3).png",
    },
    {
      title: "Доставка",
      description:
        "Интеграция с популярными сервисами доставки. Увеличивает скорость обслуживания и помогает автоматизировать процессы",
      tags: ["СДЭК", "Яндекс Доставка", "Достависта", "Boxbetty"],
      image: "/iPhone 15 (4).png",
    },
    {
      title: "Административная панель",
      description:
        "Дружелюбная административная панель. Помогает управлять баннерами, push-уведомлениями, СМС и рассылками",
      tags: ["уведомления", "ассортимент товаров", "баннеры", "редактирование"],
      image: "/iPhone 15 (5).png",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <div className="font-bold mb-6" style={{ fontSize: "40px" }}>
        Функции
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-2xl shadow-lg w-full transition duration-300 transform hover:shadow-[0px_0px_20px_5px_rgba(0,102,255,0.6)] hover:bg-blue-600 hover:text-white hover:border-blue-500"
          >
            {/* Картинка */}
            <Image
              src={advantage.image}
              alt={advantage.title}
              width={500}
              height={500}
              className="mb-4 rounded-lg"
            />

            {/* Текст */}
            <div className="text-center mb-4">
              <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>

            {/* Хештеги */}
            <div className="flex flex-wrap justify-center">
              {advantage.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="border border-gray-400 hover:bg-white hover:text-blue-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
