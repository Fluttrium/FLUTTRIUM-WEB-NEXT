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
    <div className="relative p-8 rounded-lg shadow-md max-w-full mx-auto">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Стоимость и сроки разработки CRM</h2>
        <p className="text-xl text-white mb-6 text-center">
          На стоимость разработки системы влияет объем данных CRM, спектр функциональных возможностей,
          сложность интеграций и количество поддерживаемых платформ
        </p>
        <div className="flex overflow-x-auto space-x-6 px-4">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="min-w-[300px] p-6 border-2 border-white rounded-lg flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white">{stage.title}</h3>
              <p className="text-xl text-white">Стоимость: <span className="font-medium">{stage.cost}</span></p>
              <p className="text-xl text-white">Сроки: <span className="font-medium">{stage.duration}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CostAndTimeline;
