import React from 'react';

const CorporateAppUsage = () => {
  const sections = [
    {
      title: 'Автоматизация производственных и бизнес-процессов',
      items: [
        'Перевод документооборота в цифровой формат',
        'Дашборды, онлайн-отчёты и чек-листы',
        'Статистика достижений показателей',
        'Контроль выполнения стандартов на уровне сотрудников и подразделений',
      ],
    },
    {
      title: 'Повышение качества коммуникации внутри компании',
      items: [
        'Корпоративные мессенджеры и новостные ленты',
        'Информационные порталы и внутренние соцсети',
        'Базы знаний, доступные всей компании',
        'Онлайн-опросы для обратной связи',
      ],
    },
    {
      title: 'Автоматизация внутренних процессов торговых компаний',
      items: [
        'Контроль мерчандайзинга, схемы выкладки и проверка витрин',
        'Инвентаризация, перемещение товаров, контроль остатков',
        'Ускорение обработки заказов и возвратов, печать чеков и штрихкодов',
      ],
    },
    {
      title: 'Повышение качества клиентского обслуживания',
      items: [
        'Проверка наличия и скидок на товар со смартфона',
        'Работа с программой лояльности вне кассы',
        'Выдача заказов, возвраты, оплата через личный смартфон',
        'Рост чека за счёт внедрения KPI, дашбордов и рейтингов кассиров',
      ],
    },
    {
      title: 'Оптимизация работы HR',
      items: [
        'Системы лояльности, геймификация обучения',
        'Лидерборды и внутренние магазины за рабочие достижения',
        'Ускорение работы HR до 80%',
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-10 text-800">
          Области применения корпоративных приложений
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-6 min-w-[300px] rounded-lg shadow-md border-l-4 border-blue-500 transition duration-200 hover:border-blue-700 relative hover:shadow-lg hover:shadow-blue-500"
            >
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                {section.title}
              </h2>
              <ul className="list-disc list-inside text-lg text-white font-bold space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-lg">
                    {item}
                  </li>
                ))}
              </ul>
              {/* Подсветка внизу карточки */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-b-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateAppUsage;
