// pages/CorporateAppReasons.tsx
import React from 'react';

const CorporateAppReasons = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="max-w-full w-full rounded-3xl shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-800">
          Когда заказывают разработку корпоративных приложений на Android или iOS
        </h1>
        <p className="text-2xl mb-8 text-center text-700 max-w-3xl mx-auto">
          В первую очередь разработку корпоративных приложений заказывают компании, которые хотят лучше контролировать работу сотрудников или подрядчиков и выполнять бизнес-задачи. Кастомная разработка мобильного приложения подойдёт торговым сетям, производственным компаниям, сетям ресторанов или кафе, медицинским клиникам или сервисам бытовых услуг, например, в следующих ситуациях:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 border-2 border-gray-300 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-blue-600 mb-2">1. Много рутинных операций</h2>
            <p className="text-2xl text-gray-700">
              Директор по персоналу ищет возможность снизить операционные расходы и сократить время на заполнение бумажных документов.
            </p>
          </div>
          
          <div className="bg-gray-100 p-6 border-2 border-gray-300 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-blue-600 mb-2">2. Сотрудники не достигают KPI в работе</h2>
            <p className="text-2xl text-gray-700">
              Руководитель административно-хозяйственного отдела хочет понять, как проконтролировать эффективность работы сотрудников и повысить их мотивацию.
            </p>
          </div>
          
          <div className="bg-gray-100 p-6 border-2 border-gray-300 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-blue-600 mb-2">3. Вся документация на бумаге</h2>
            <p className="text-2xl text-gray-700">
              Директор департамента управления финансовыми сервисами планирует сделать отчётность в компании более прозрачной.
            </p>
          </div>
          
          <div className="bg-gray-100 p-6 border-2 border-gray-300 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-blue-600 mb-2">4. В компании более 50 точек продаж</h2>
            <p className="text-2xl text-gray-700">
              Директор по клиентскому сервису хочет улучшить опыт клиентов и отзывы о компании с помощью контроля соблюдения стандартов работы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateAppReasons;
