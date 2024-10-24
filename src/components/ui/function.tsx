import React from "react";

export function FunctionEx() {
  const advantages = [
    {
      title: "Регистрация и профиль пользователя",
      description:
        "Простая и безопасная регистрация по номеру телефона. Профиль, который сохраняет демографические характеристики и личные предпочтения покупателей",
      image: "/Снимок экрана 2024-10-23 в 22.44.39.png",
      tags: ["аутентификация", "история заказов", "чеки", "бонусы"],
    },
    {
      title: "Главная страница",
      description:
        "Витрина мобильного магазина. Новости, баннеры и сторис расставляют акценты и направляют внимание пользователей",
      image: "/Снимок экрана 2024-10-23 в 22.44.39.png",
      tags: ["новости", "баннеры","программа лояльности", "каталог акций", "скидки"],
    },
    {
      title: "Каталог и карточка товара",
      description:
        "Информативный каталог с фильтрами по категориям, сортировкой и кнопкой «В корзину». Привлекательные карточки товара с отзывами и полной информацией",
      image: "/Снимок экрана 2024-10-23 в 22.44.39.png",
      tags: ["список товаров", "адрес доставки", "стоимость", "CloudPayments", "Сбербанк"],
    },
    {
      title: "Корзина и заказ",
      description:
        "Ключевая функция приложения. Собирает важные данные о пользователе, помогает снизить количество отказов и увеличить конверсию",
      image: "/Снимок экрана 2024-10-23 в 22.44.39.png",
      tags: ["список товаров", "адрес доставки", "поддержка"],
    },
    {
      title: "Программа лояльности",
      description:
        "Программы лояльности увеличивают число повторных покупок и средний чек, помогают сегментировать аудиторию и персонализировать предложения",
      image: "/Снимок экрана 2024-10-23 в 22.44.39.png",
      tags: ["Manzana", "MindBox"],
    },
    {
      title: "Доставка",
      description:
        "Интеграция с популярными сервисами доставки. Увеличивает скорость обслуживания и помогает автоматизировать процессы",
      image: "/Снимок экрана 2024-10-23 в 22.44.39.png",
      tags: ["СДЭК","Яндекс Доставка","Достависта","Boxbetty"],
    },
    {
      title: "Аналитика",
      description:
        "Современные инструменты для анализа поведения и продаж. Позволяют отслеживать количество заказов, средний чек и другие показатели",
      image: "/Снимок экрана 2024-10-23 в 22.44.39.png",
      tags: ["крашлитика","Яндекс.Метрика","AppsFlyer","AppMetrica","Google Analytics"],
    },
    {
      title: "Административная панель",
      description:
        "Дружелюбная административная панель. Помогает управлять баннерами, push-уведомлениями, СМС и рассылками",
      image: "/Снимок экрана 2024-10-23 в 22.44.39.png",
      tags: ["уведомления", "ассортимент товаров", "баннеры","редактирование"],
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
            className={`flex flex-col items-center p-4 border rounded-2xl shadow-lg w-full ${
              (index % 4 === 0 || index % 4 === 3) ? "bg-blue-600 shadow-xl" : ""
            }`}
          >
            {/* Обертка для изображения */}
            <div className="mb-4 w-full">
              <img
                src={advantage.image}
                alt={advantage.title}
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            {/* Текст вынесен за изображение */}
            <div className="text-center mb-4">
              <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>

            {/* Хештеги */}
            <div className="flex flex-wrap justify-center">
              {advantage.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-white text-blue-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
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
