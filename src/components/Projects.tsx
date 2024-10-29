"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import {CardBody, CardContainer, CardItem} from "./ui/3d-card";
import {TypewriterEffect} from "./ui/typewriter-effect";
import {useTranslations} from "use-intl";

export function ProjectsCards() {
    const t = useTranslations('ProjectCard');
    const words = [
        {text: t('tapeword1'),},
        {text: t('tapeword2')},
        {text: t('tapeword3')},
        {text: t('tapeword4')},
        {text: t('tapeword5')},
        {text: t('tapeword6')},
        {text: t('tapeword7')},
        {text: t('tapeword8'), className: "text-blue-500 dark:text-blue-500"},
    ];

    return (
        <section className="w-screen !overflow-hidden">
            <div className="-z-10 absolute h-full w-full bg-slate-950">
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>
            <TypewriterEffect
                className="block pt-5 h-24 md:h-32 mx-4 mt-12 mb-24 text-lg md:text-2xl"
                words={words}
            />
            <div className="px-4 sm:px-6 md:px-10 my-7">
                {/* Контейнер для горизонтального скролла на мобильной версии */}
                <div className="overflow-x-auto sm:hidden">
                    <div className="flex space-x-6">
                        {/* Карточки для мобильной версии */}
                        {[{
                            title: t('titlecard1'),
                            description: t('titledisc1'),
                            link: 'https://fond-synergy.ru/',
                            imgSrc: "/projects/case3.png",
                        }, {
                            title: t('titlecard2'),
                            description: t('titledisc2'),
                            link: 'https://tcdobrynya.ru',
                            imgSrc: "/projects/case_dob.png",
                        }, {
                            title: t('titlecard3'),
                            description: t('titledisc3'),
                            link: '#', // Замените на правильную ссылку
                            imgSrc: "/projects/case8.png",
                        }, {
                            title: t('titlecard4'),
                            description: t('titledisc4'),
                            link: 'https://next-knifes.vercel.app',
                            imgSrc: "/projects/knifes.png",
                        }].map(({title, description, link, imgSrc}, index) => (
                            <CardContainer key={index} className="inter-var mb-6 w-64">
                                <CardBody
                                    className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
                                    <CardItem translateZ="50"
                                              className="text-xl font-bold text-neutral-600 dark:text-white">
                                        {title}
                                    </CardItem>
                                    <CardItem as="p" translateZ="60"
                                              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
                                        {description}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-2">
                                        <Link href={link}>
                                            <Image
                                                src={imgSrc}
                                                height={1000}
                                                width={1000}
                                                className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl" // Уменьшена высота для равномерности
                                                alt="thumbnail"
                                            />
                                        </Link>
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-2">
                                        <CardItem
                                            translateZ={20}
                                            as={Link}
                                            href="https://t.me/fluttrium"
                                            target="__blank"
                                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                        >
                                            {t("cardButton")}
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        ))}
                    </div>
                </div>

                {/* Десктопная версия */}
                <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Карточки для десктопной версии */}
                    {[{
                        title: t('titlecard1'),
                        description: t('titledisc1'),
                        link: 'https://fond-synergy.ru/',
                        imgSrc: "/projects/case3.png",
                    }, {
                        title: t('titlecard2'),
                        description: t('titledisc2'),
                        link: 'https://tcdobrynya.ru',
                        imgSrc: "/projects/case_dob.png",
                    }, {
                        title: t('titlecard3'),
                        description: t('titledisc3'),
                        link: '#', // Замените на правильную ссылку
                        imgSrc: "/projects/case8.png",
                    }, {
                        title: t('titlecard4'),
                        description: t('titledisc4'),
                        link: 'https://next-knifes.vercel.app',
                        imgSrc: "/projects/knifes.png",
                    }].map(({title, description, link, imgSrc}, index) => (
                        <CardContainer key={index} className="inter-var mb-6 md:mb-0">
                            <CardBody
                                className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                                <CardItem translateZ="50"
                                          className="text-xl font-bold text-neutral-600 dark:text-white">
                                    {title}
                                </CardItem>
                                <CardItem as="p" translateZ="60"
                                          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
                                    {description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Link href={link}>
                                        <Image
                                            src={imgSrc}
                                            height={1000}
                                            width={1000}
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                    </Link>
                                </CardItem>
                                <div className="flex justify-between items-center mt-4">
                                    <CardItem
                                        translateZ={20}
                                        as={Link}
                                        href="https://t.me/fluttrium"
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        {t("cardButton")}
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </section>
    );
}
