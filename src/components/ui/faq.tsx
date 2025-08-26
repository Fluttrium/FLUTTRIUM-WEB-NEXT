"use client";

import React, {useState} from "react";

// SVG-иконка
const PlusIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
    </svg>
);

const faqs = [
    {
        question: "Какой функционал должен присутствовать в интернет-магазине?",
        answer: "В интернет-магазине должен быть реализован функционал для управления каталогом товаров, обработки заказов, системы оплаты и доставки, а также возможность управления пользовательскими аккаунтами."
    },
    {
        question: "Сколько времени занимает разработка и создание интернет-магазина с нуля?",
        answer: "Время разработки интернет-магазина зависит от сложности проекта. В среднем, создание интернет-магазина с нуля может занять от 2 до 6 месяцев."
    },
    {
        question: "Сколько стоит разработка интернет-магазина?",
        answer: "Стоимость разработки интернет-магазина варьируется в зависимости от функционала и технологий. Обычно цена составляет от 500,000 до 3,000,000 рублей."
    },
    {
        question: "Какие технологии вы используете для разработки интернет-магазинов?",
        answer: "Мы используем современные технологии, такие как Next.js, React, Node.js, а также различные базы данных, такие как MongoDB и PostgreSQL."
    },
    {
        question: "Мы используем определенные ERP и CRM-системы. Вы сможете синхронизировать магазин с ними?",
        answer: "Да, мы можем интегрировать ваш интернет-магазин с ERP и CRM-системами для синхронизации данных и автоматизации процессов."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleStage = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-5 text-center">FAQ о разработке интернет-магазинов</h2>
            <div className="space-y-4">
                {faqs.map((stage, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                        <button
                            className="flex items-center w-full text-left p-8 rounded-lg transition-colors duration-200 ease-in-out hover:text-blue-600"
                            onClick={() => toggleStage(index)}
                        >
                            <PlusIcon />
                            <h3 className="text-2xl font-medium">{stage.question}</h3>
                        </button>
                        {openIndex === index && (
                            <div className="p-8 border-t border-gray-300">
                                <p className="text-lg">{stage.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
