import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline2";

export function TimelineDemo2() {
  const data = [
    {
      title: "Сбор требований",
      content: (
        <div>
          <p className="text-2xl font-normal mb-8">
            Функциональные требования описывают необходимый пользовательский и системный функционал, содержат информацию о необходимых мастерах и алгоритмах автоматических операций
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/crm/trebovaniaIT.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Создание ТЗ",
      content: (
        <div>
          <p className="text-2xl font-normal mb-8">
            Прототип показывает интерфейс и взаимодействия элементов будущей CRM. Техническое задание описывает, как и что будет выполнять система
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/crm/kto_pishet_tz.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Дизайн",
      content: (
        <div>
          <p className="text-2xl font-normal mb-8">
            По решению заказчика отрисовывается дизайн всей системы или только разделов, доступных клиентам
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/design.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Разбивка на спринты",
      content: (
        <div>
          <p className="text-2xl font-normal mb-4">
            Разбивка на спринты. Бэклог – список всех функций, которые будут реализованы в проекте. Спринты – этапы разработки, содержат часть функций реализуемых в рамках этапа
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/crm/1-15.jpg.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Спринтовая разработка",
      content: (
        <div>
          <p className="text-2xl font-normal mb-8">
            Производится в 6 шагов:
          </p>
          <div className="text-2xl font-normal mb-8">✅ Планирование блока;</div>
          <div className="text-2xl font-normal mb-8">✅ Программирование задач блока;</div>
          <div className="text-2xl font-normal mb-8">✅ Тестирование и отладка;</div>
          <div className="text-2xl font-normal mb-8">✅ Релиз блока;</div>
          <div className="text-2xl font-normal mb-8">✅ Анализ качества организации разработки в блоке;</div>
          <div className="text-2xl font-normal mb-8">✅ Обновление бэклога, корректировка будущих блоков.</div>
          <div className="flex justify-center mb-4">
            <Image
              src="/crm/sprint.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Техническая поддержка",
      content: (
        <div>
          <p className="text-2xl font-normal mb-8">
            Эффективная поддержка помогает пользователям оперативно решать возникающие проблемы, минимизируя простой и поддерживая высокую производительность
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/crm/Scrum-Master-I.jpg.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-max">
      <Timeline data={data} />
    </div>
  );
}
