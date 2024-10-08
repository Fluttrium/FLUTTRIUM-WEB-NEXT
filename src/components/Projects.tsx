"use client";

import Image from "next/image";
import React from "react";

import Link from "next/link";
import {CardBody, CardContainer, CardItem} from "./ui/3d-card";
import {TypewriterEffect} from "./ui/typewriter-effect";

export function ProjectsCards() {
    const words = [
        {
            text: "Реализуйте",
        },
        {
            text: "любую",
        },
        {
            text: "вашу",
        },
        {
            text: "идею",
        },
        {
            text: "вместе",
        },
        {
            text: "с",
        },
        {
            text: "компанией",
        },
        {
            text: "FLUTTRIUM",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <section className="  w-screen !overflow-hidden">
            <div className="-z-10 absolute h-full w-full bg-slate-950">
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>
            <TypewriterEffect className="hidden md:block pt-5 h-32 md:mx-10 mt-12 mb-24 " words={words}/>

            <div className="px-9 my-7 grid grid-rows-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6  sm:mx-0">
                <CardContainer className="inter-var r mb-6 md:mb-0">
                    <CardBody
                        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Сайты для некоммерческих организаций
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Мы поддерживаем некоммерческие организации в их стремлении делать
                            мир лучше
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Link href='https://fond-synergy.ru/'>
                                <Image
                                    src="/projects/case3.png"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </Link>
                        </CardItem>
                        <div className="flex justify-between items-center mt-4 md:mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://t.me/fluttrium"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Заказать сейчас →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>

                <CardContainer className="inter-var r mb-6 md:mb-0">
                    <CardBody
                        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Сайты для бизнеса
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Мы разрабатываем профессиональный и уникальный сайт, который поможет вашему бизнесу
                            выделиться среди конкурентов
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Link href='https://tcdobrynya.ru'>
                                <Image
                                    src="/projects/case_dob.png"
                                    height="1000"
                                    width="1000"
                                    className=" h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </Link>
                        </CardItem>
                        <div className="flex justify-between items-center mt-4 md:mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://t.me/fluttrium"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Заказать сейчас →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>

                <CardContainer className="inter-var r">
                    <CardBody
                        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Приложения для корпораций
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Мы разрабатываем масштабируемые и надежные платформы, адаптированные под уникальные нужды
                            вашего бизнеса, чтобы обеспечить его успешное развитие и укрепление позиций в отрасли
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src="/projects/case8.png"
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-4 md:mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://t.me/fluttrium"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Заказать сейчас →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
                <CardContainer className="inter-var r">
                    <CardBody
                        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Мы создаем платформы для вашего бизнеса
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Мы разрабатываем мощные и гибкие решения для e-commerce, обеспечивая полный набор
                            инструментов для эффективного ведения бизнеса. Все, что вам останется — это наслаждаться
                            ростом и успехом вашего проекта, доверив технические аспекты нашим профессионалам.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Link href='https://next-knifes.vercel.app'>
                                <Image
                                    src="/projects/knifes.png"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </Link>
                        </CardItem>
                        <div className="flex justify-between items-center mt-4 md:mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://t.me/fluttrium"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Заказать сейчас →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        </section>
    );
}
