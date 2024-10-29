// CostAndTimeline.tsx
import React from 'react';

interface Stage {
  title: string;
  cost: string;
  duration: string;
}

const stages: Stage[] = [
  { title: 'Функциональные требования', cost: 'от 10 тыс. рублей', duration: '0.5-1 неделя' },
  { title: 'Бизнес-анализ', cost: 'от 40 тыс. рублей', duration: '1-2 недели' },
  { title: 'Проектирование + ТЗ', cost: 'от 70 тыс. рублей', duration: '1-3 недели' },
  { title: 'Дизайн/Вёрстка', cost: 'от 30 тыс. рублей', duration: '0.5-3 недели' },
  { title: 'Разработка/кодирование', cost: 'от 350 тыс. рублей', duration: '5-16 недель' },
  { title: 'Развитие и поддержка', cost: 'от 60 часов', duration: 'от 2000 руб/час' },
];

const CostAndTimeline: React.FC = () => {
  return (
    <div className="p-8 rounded-lg shadow-md max-full mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Стоимость и сроки разработки CRM</h2>
      <p className="text-xl text-600 mb-6 text-center">
        На стоимость разработки системы влияет объем данных CRM, спектр функциональных возможностей,
        сложность интеграций и количество поддерживаемых платформ.
      </p>
      <div className="flex overflow-x-auto space-x-6 px-4">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="min-w-[300px] p-6 border rounded-lg flex-shrink-0 bg-50 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">{stage.title}</h3>
            <p className="text-xl text-800">Стоимость: <span className="font-medium">{stage.cost}</span></p>
            <p className="text-xl text-800">Сроки: <span className="font-medium">{stage.duration}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostAndTimeline;
