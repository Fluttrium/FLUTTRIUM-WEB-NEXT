"use client";

import React from "react";
import Link from "next/link";

export function CardHoverEffectDemo6() {
    return (
        <>
            <div id="service" className="flex justify-center">
                <h1 className="text-4xl font-semibold text-black dark:text-white text-center">
          <span className="text-2xl md:text-[4rem] font-bold mt-1 leading-none block mb-5">
            Решение для интернет магазинов
          </span>
                </h1>
            </div>
            <div className="mx-auto px-8">
                <HoverEffect items={projects}/>
            </div>
        </>
    );
}

export const projects = [
    {
        number: 1,
        title: "Интернет-магазин под ключ",
        description:
            "Полный цикл разработки от бизнес-анализа и индивидуального проектирования до интеграции со сложными CRM и ERP-системами. Разработка сайта интернет магазина под ключ на базе Next JS",
        link: "",
    },
    {
        number: 2,
        title: "Интернет-магазин на готовой платформе",
        description:
            "Быстрый запуск MVP для первых продаж и кастомная разработка сложных проектов на платформе CS-Cart с функциональным движком для быстрого старта и неограниченного роста",
        link: "",
    },
    {
        number: 3,
        title: "Омниканальные проекты",
        description:
            "Автоматизация бизнес-процессов и построение единой экосистемы онлайн и офлайн точек продаж. Улучшаем клиентский опыт на базе лучших международных практик",
        link: "",
    },
    {
        number: 4,
        title: "Реплатформинг интернет-магазина",
        description:
            "Бесшовный перенос текущего веб-сайта с устаревшей CMS или самописного программного обеспечения на многофункциональную платформу без простоев и потери данных",
        link: "",
    },
    {
        number: 5,
        title: "Мобильные приложения",
        description:
            "Разработка мобильных приложений, адаптивных веб-сайтов и PWA-решений для мобильной коммерции. Увеличиваем конверсию на всех устройствах",
        link: "",
    },
    {
        number: 6,
        title: "Остались вопросы?",
        description:
            "Хотите заказать создание интернет-магазина? Разберем вашу бизнес-идею или действующий сайт на бесплатной консультации!",
        link: "",
        buttonContent: (
            <Link href="/brief">
                <button
                    className="relative inline-flex items-center justify-center px-12 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-xl">
                    Свяжитесь с нами
                </button>
            </Link>
        ),
    },
];

type ProjectItem = {
    number: number;
    title: string;
    description: string;
    image?: JSX.Element;
    link?: string;
    buttonContent?: JSX.Element;
};

interface HoverEffectProps {
    items: ProjectItem[];
}

export function HoverEffect({items}: HoverEffectProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="p-6 border border-gray-200 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition"
                >
                    <h2 className="text-xl font-bold mb-4">
                        {item.number}. {item.title}
                    </h2>
                    <p className="mb-4">{item.description}</p>
                    {item.buttonContent && <div className="mt-4">{item.buttonContent}</div>}
                </div>
            ))}
        </div>
    );
}
