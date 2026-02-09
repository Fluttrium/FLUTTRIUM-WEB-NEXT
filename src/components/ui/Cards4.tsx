"use client";

import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

export function CardHoverEffectDemo4() {
  const { messages } = useTranslations();
  const m: any = (messages as any).NextjsPage;

  const projects = [
    {
      title: m?.projects?.[0]?.title || "Cайтов e-commerce",
      description:
        m?.projects?.[0]?.description ||
        "Разработка современных и функциональных e-commerce сайтов для повышения продаж и удобства покупателей. Создаём платформы с адаптивным дизайном, интеграцией платежных систем и аналитики, а также поддержкой пользовательских сценариев для лучшего взаимодействия с брендом",
      image: "/knifesmock/MacBook14.png",
      link: "",
    },
    {
      title: m?.projects?.[1]?.title || "Интернет-магазинов",
      description:
        m?.projects?.[1]?.description ||
        "Создание интернет-магазинов с интуитивным интерфейсом, оптимизированных для удобства покупок и управления товарами. Предлагаем интеграцию с платёжными системами, инструменты для аналитики и адаптивный дизайн для привлечения и удержания клиентов",
      image: "/knifesmock/macbook-air-15.png",
      link: "",
    },
    {
      title: m?.projects?.[2]?.title || "Интернет-порталов",
      description:
        m?.projects?.[2]?.description ||
        "Разработка интернет-порталов для информирования и взаимодействия с широкой аудиторией. Создаём функциональные платформы с удобной навигацией, поддержкой мультимедийного контента, интеграцией с социальными сетями и возможностью масштабирования для любых задач",
      image: "/nextjsmock/macbook-air-15.png",
      link: "",
    },
    {
      title: m?.projects?.[3]?.title || "Медийных ресурсов",
      description:
        m?.projects?.[3]?.description ||
        "Создание медийных ресурсов для публикации и распространения контента. Разрабатываем платформы с оптимизированной системой управления, адаптивным дизайном, интеграцией аналитики и инструментами для привлечения и удержания аудитории",
      image: "/dobrmock/iMac.png",
      link: "",
    },
    {
      title: m?.projects?.[4]?.title || "Онлайн-форумов",
      description:
        m?.projects?.[4]?.description ||
        "Создание онлайн-форумов для активного общения и обмена информацией между пользователями. Реализуем удобные функции для модерирования, возможности для публикации мультимедиа, а также систему уведомлений и поиска для поддержания интереса и активности на платформе",
      image: "/nextjsmock/samsung-tv-2x.png",
      link: "",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <HoverEffect items={projects} />
    </div>
  );
}

type ProjectItem = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

interface HoverEffectProps {
  items: ProjectItem[];
}

export function HoverEffect({ items }: HoverEffectProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="hover:bg-blue-600 hover:text-white transition p-4 sm:p-6 border border-gray-200 rounded-lg shadow-lg min-w-[260px] max-w-full"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={360} // Подстроил размеры под мобильные устройства
            height={200}
            className="rounded-lg mb-4"
          />
          <h4 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h4>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
