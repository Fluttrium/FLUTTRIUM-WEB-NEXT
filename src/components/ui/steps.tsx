import Image from "next/image";
import React from "react";
import {Timeline} from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Подготовка",
            content: (
                <div>
                    <p className="text-2xl font-normal mb-8">
                        Изучим потребности клиента и бизнес-цели, собираем требования от всех заинтересованных сторон.
                    </p>
                    <p className="text-2xl font-normal mb-8">
                        Разбиваем задачи на итерации, оцениваем рабочую нагрузку и затраты, выявляем возможные риски.
                    </p>
                    <p className="text-2xl font-normal mb-8">
                        Сделаем карту пути пользователя
                    </p>
                    <p className="text-2xl font-normal mb-8">
                        Проанализируем конкурентов и профиль аудитории
                    </p>
                    <div className="">
                        <Image
                            src="/Scenes03.svg"
                            alt="startup template"
                            width={800}
                            height={1000}
                            className="rounded-lg object-contain h-full md:h-44 lg:h-60 w-full"
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
                        Спроектируем технический дизайн web приложения, чтобы продукт соответствовал входящим
                        техническим требованиям
                    </p>
                    <p className="text-2xl font-normal mb-8">
                        Спроектируем пользовательский дизайн web приложения, продумаем все сценарии и разложим действия
                        пользователя на функциональные блоки
                    </p>
                    <p className="text-2xl font-normal mb-8">
                        Будем улучшать прототипы с каждой итерацией, чтобы достичь хорошего UX с понятной навигацией
                    </p>
                    <div className="">
                        <Image
                            src="/Scenes01.svg"
                            alt="startup template"
                            width={800}
                            height={1000}
                            className="rounded-lg object-contain h-full md:h-44 lg:h-60 w-full"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Разработка",
            content: (
                <div>
                    <p className="text-2xl font-normal mb-8">
                        Подберём технологический стек под конкретный проект, от стандартных для веб-разработки React и
                        Next.js до кроссплатформенного фреймворка Flutter for Web
                    </p>
                    <p className="text-2xl font-normal mb-8">
                        Создадим концептуальную архитектуру решения и информационную модель для выделения потоков данных
                        в проекте
                    </p>
                    <p className="text-2xl font-normal mb-8">
                        Реализуем и детально опишем функциональность системы
                    </p>
                    <p className="text-2xl font-normal mb-8">
                        Предоставим спецификацию микросервисных API и схему развёртывания ПОс
                    </p>
                    <div className="">
                        <Image
                            src="/Scenes08.svg"
                            alt="startup template"
                            width={800}
                            height={1000}
                            className="rounded-lg object-contain h-full md:h-44 lg:h-60 w-full"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Тестирование",
            content: (
                <div>
                    <p className="text-2xl font-normal mb-4">
                        Проведём ручное и автоматическое тестирование всех функциональных возможностей веб-приложения
                    </p>
                    <p className="text-2xl font-normal mb-4">
                        Настроим автоматизированные тесты, чтобы сэкономить до 80% времени на поиске неисправностей
                    </p>
                    <p className="text-2xl font-normal mb-4">
                        Проверим, что интерфейс продукта корректно отображается на экранах с разным разрешением и
                        соотношением сторон
                    </p>
                    <p className="text-2xl font-normal mb-4">
                        Проверим, что система работает в разных браузерах и в разных версиях браузеров
                    </p>
                    <div className="">
                        <Image
                            src="/Scenes02.svg"
                            alt="startup template"
                            width={800}
                            height={1000}
                            className="rounded-lg object-contain h-full md:h-44 lg:h-60 w-full"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Релиз и поддержка",
            content: (
                <div>
                    <p className="text-2xl font-normal mb-8">
                        Проведём внутренний аудит кода, дизайна и архитектуры перед сдачей проекта
                    </p>
                    <p className="text-2xl font-normal mb-8">
                        Поможем пройти ревью опубликовать приложение в App Store, Google Play и других сторах — знаем
                        все бутылочные горлышки и типичные ошибки этого процесса
                    </p>
                    <p className="text-2xl font-normal mb-8">
                        Будем развивать проект по SLA или передадим его для дальнейшего развития инхаус
                    </p>
                    <div className="">
                        <Image
                            src="/Scenes04.svg"
                            alt="startup template"
                            width={800}
                            height={1000}
                            className="rounded-lg object-contain h-full md:h-44 lg:h-60 w-full"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data}/>
        </div>
    );
}
