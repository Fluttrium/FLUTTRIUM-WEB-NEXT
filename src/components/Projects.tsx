"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {CardBody, CardContainer, CardItem} from "./ui/3d-card";
import {TypewriterEffect} from "./ui/typewriter-effect";
import {useTranslations} from "use-intl";

export function ProjectsCards() {
    const t = useTranslations('ProjectCard');
    const [isReducedMotion, setIsReducedMotion] = useState(false);
    
    const words = [
        {text: t('tapeword1'),},
        {text: t('tapeword2')},
        {text: t('tapeword3')},
        {text: t('tapeword4')},
        {text: t('tapeword5')},
        {text: t('tapeword6')},
        {text: t('tapeword7')},
        {text: t('tapeword8')},
        {text: t('tapeword9'), className: "text-blue-500 dark:text-blue-500"},
    ];

    const projects = [
        {
            title: t('titlecard1'),
            description: t('titledisc1'),
            imgSrc: "/projects/case3.png",
        },
        {
            title: t('titlecard2'),
            description: t('titledisc2'),
            imgSrc: "/projects/case_dob.png",
        },
        {
            title: t('titlecard3'),
            description: t('titledisc3'),
            imgSrc: "/projects/case8.png",
        },
        {
            title: t('titlecard4'),
            description: t('titledisc4'),
            imgSrc: "/projects/knifes.png",
        },
        {
            title: t('titlecard5'),
            description: t('titledisc5'),
            imgSrc: "/Black.png",
        },
        {
            title: t('titlecard6'),
            description: t('titledisc6'),
            imgSrc: "/Direct.png",
        }
    ];

    useEffect(() => {
        // Проверяем настройки пользователя по движению
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setIsReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setIsReducedMotion(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <section className="w-full z-50 overflow-hidden">
            <TypewriterEffect
                className="z-50 block pt-5 h-24 md:h-32 mx-4 mt-12 mb-24 text-lg md:text-2xl"
                words={words}
            />
            
            <div className="px-4 sm:px-6 md:px-10 my-7">
                {/* Мобильная версия с автопрокруткой */}
                <div className="sm:hidden">
                    <div className={`flex space-x-6 ${!isReducedMotion ? 'animate-scroll-projects' : ''}`}>
                        {/* Дублируем карточки для бесконечной прокрутки */}
                        {[...projects, ...projects].map(({title, description, imgSrc}, index) => (
                            <CardContainer key={`mobile-${index}`} className="inter-var mb-6 w-64 h-80 flex-shrink-0">
                                <CardBody
                                    className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 border">
                                    <CardItem translateZ="50"
                                              className="text-lg font-bold text-neutral-600 dark:text-white line-clamp-2">
                                        {title}
                                    </CardItem>
                                    <CardItem as="p" translateZ="60"
                                              className="text-neutral-500 text-xs mt-2 dark:text-neutral-300 line-clamp-3 leading-tight">
                                        {description}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-2">
                                        <Image
                                            src={imgSrc}
                                            height={1000}
                                            width={1000}
                                            className="h-36 w-full object-cover object-center rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        ))}
                    </div>
                </div>

                {/* Планшетная версия */}
                <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 md:gap-6">
                    {projects.map(({title, description, imgSrc}, index) => (
                        <CardContainer key={`tablet-${index}`} className="inter-var mb-6 w-full h-max">
                            <CardBody
                                className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 border">
                                <CardItem translateZ="50"
                                          className="text-lg font-bold text-neutral-600 dark:text-white line-clamp-2">
                                    {title}
                                </CardItem>
                                <CardItem as="p" translateZ="60"
                                          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 line-clamp-3 leading-tight">
                                    {description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full h-full mt-4">
                                    <Image
                                        src={imgSrc}
                                        height={1000}
                                        width={1000}
                                        className="max-h-48 w-full object-contain object-center rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>

                {/* Десктопная версия */}
                <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
                    {projects.map(({title, description, imgSrc}, index) => (
                        <CardContainer key={`desktop-${index}`} className="inter-var mb-6 w-full h-max">
                            <CardBody
                                className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 border">
                                <CardItem translateZ="50"
                                          className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-2">
                                    {title}
                                </CardItem>
                                <CardItem as="p" translateZ="60"
                                          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 line-clamp-3 leading-tight">
                                    {description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full h-full mt-4">
                                    <Image
                                        src={imgSrc}
                                        height={1000}
                                        width={1000}
                                        className="max-h-64 w-full object-contain object-center rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </section>
    );
}