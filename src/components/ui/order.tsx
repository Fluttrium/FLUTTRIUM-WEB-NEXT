// pages/CorporateAppReasons.tsx
import React from 'react';

const reasonsData = [
  {
    id: 1,
    title: 'Много рутинных операций' ,
    description:
      'Директор по персоналу ищет возможность снизить операционные расходы и сократить время на заполнение бумажных документов',
  },
  {
    id: 2,
    title: 'Сотрудники не достигают KPI в работе',
    description:
      'Руководитель административно-хозяйственного отдела хочет понять, как проконтролировать эффективность работы сотрудников и повысить их мотивацию',
  },
  {
    id: 3,
    title: 'Вся документация на бумаге',
    description:
      'Директор департамента управления финансовыми сервисами планирует сделать отчётность в компании более прозрачной',
  },
  {
    id: 4,
    title: 'В компании более 50 точек продаж',
    description:
      'Директор по клиентскому сервису хочет улучшить опыт клиентов и отзывы о компании с помощью контроля соблюдения стандартов работы',
  },
];

const CorporateAppReasons = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="max-w-full w-full rounded-3xl shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-800">
          Когда заказывают разработку корпоративных приложений на Android или iOS?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasonsData.map((reason) => (
            <div
              key={reason.id}
              className="p-6 border-2 border-gray-300 rounded-lg shadow-md"
            >
              <h2 className="text-4xl font-semibold text-blue-600 mb-2">
                {reason.id}. {reason.title}
              </h2>
              <p className="text-2xl text-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateAppReasons;
