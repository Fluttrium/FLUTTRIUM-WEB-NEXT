"use client"
import {HoverEffect} from "./ui/card-hover-effect";
import {useTranslations} from "use-intl";



export function CardHoverEffectDemo() {
    const t = useTranslations('Sotr')
    const projects = [
        {
            title: t('title1'),
            description: t('description1'),
            link: "",
        },
        {
            title: t('title2'),
            description: t('description2'),
            link: "",
        },
        {
            title: t('title3'),
            description: t('description3'),
            link: "",
        },
        {
            title: t('title4'),
            description: t('description4'),
            link: "",
        },
        {
            title: t('title5'),
            description: t('description5'),
            link: "",
        },
        {
            title: t('title6'),
            description: t('description6'),
            link: "",
        },
    ];

    return (
        <>
            <div id="service" className="flex justify-center">
                <h1 className="text-4xl font-semibold text-black dark:text-white text-center">
    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none block mb-5">
    {t('How')}
    </span>
                </h1>
            </div>
            <div className="max-w-5xl mx-auto px-8 lg:border lg:border-gray-200 lg:rounded-lg lg:p-4">

                <HoverEffect items={projects}/>
            </div>
        </>
    );
}

