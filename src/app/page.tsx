"use client";
import AppleCardsCarouselDemo from "@/components/AppleCards";
import {CardHoverEffectDemo} from "@/components/Cards";
import SocialContacts from "@/components/Contacs";
import {HeroScrollDemo} from "@/components/ContainerScroll";
import Navbar from "@/components/global/navbar";
import {ProjectsCards} from "@/components/Projects";
import {TypewriterEffectSmoothDemo} from "@/components/Tehnology";
import {FlipWords} from "@/components/ui/flip-words";
import {GlareCard} from "@/components/ui/glare-card";
import {Spotlight} from "@/components/ui/spotlight";
import "@/app/globals.css";
import {FreeAudit} from "@/components/ui/audit";
import {useTranslations} from "use-intl";
import "@/app/globals.css";
import Link from "next/link";
import PartnerLogos from "@/components/ui/PartnerLogos";

export default function Home() {
    const t = useTranslations('HomePage');

    // Создаем массив уникальных слов
    const words2 = [
        t('words1'),
        t('words2'), // Убедитесь, что у вас есть другие ключи перевода
        t('words3'),
        t('words4'),
        t('words5'),
    ];
    return (
        <main className="relative overflow-hidden w-full h-full">
             <div className="absolute h-full w-full -z-10">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            </div>
            <Navbar />
            <section className="mp-10 h-auto md:h-screen w-full !overflow-hidden relative flex antialiased">
                <Spotlight
                    className="absolute z-50 top-0 right-50"
                    fill="white"
                />
                <div className="flex flex-col items-center justify-center md:flex-row md:mx-10 z-50 px-4 w-full h-full mt-16 md:mt-20 lg:mt-24">
                    {/* Элемент для больших экранов */}
                    <div
                        className="hidden md:block basis-1/2 pl-4 lg:pl-8 xl:pl-14 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl z-50 font-normal text-neutral-600 dark:text-neutral-400">
                        {t('hero_1')}&nbsp;{t('hero_2')}
                        <div className="flex w-full mt-4">
                            <FlipWords words={words2} />
                        </div>
                        <div className='flex pt-6 lg:pt-8 xl:pt-11'>
                            <Link href="/brief">
                                <button className="relative inline-flex items-center justify-center w-32 h-12 lg:w-36 lg:h-14 xl:w-40 xl:h-14 2xl:w-44 2xl:h-16 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-sm lg:text-base xl:text-lg 2xl:text-xl">
                                    <span className="flex items-center justify-center gap-2 lg:gap-3 text-center">
                                        {t('button')}
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Элемент для маленьких экранов */}
                    <div className="block md:hidden flex flex-col items-center text-center mt-8">
                        <div className="text-2xl sm:text-3xl lg:text-4xl z-50 font-normal text-neutral-600 dark:text-neutral-400">
                        {t('hero_1')}&nbsp;{t('hero_2')}
                        </div>
                        <div className="mt-4">
                            <FlipWords words={words2} />
                        </div>
                        {/* Мобильная кнопка */}
                        <div className="mt-6 sm:mt-8">
                            <Link href="/brief">
                                <button className="relative inline-flex items-center justify-center w-28 h-10 sm:w-32 sm:h-12 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-sm sm:text-base">
                                    <span className="flex items-center justify-center gap-2 text-center">
                                        {t('button')}
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Карточки для мобильных экранов */}
                    <div className="flex flex-col justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:hidden">
                        <div className="flex flex-row justify-center gap-2 sm:gap-3">
                            <GlareCard
                                width="120px"
                                height="160px"
                                className="flex flex-col py-2 px-2 items-center justify-start"
                            >
                                <p className="font-bold text-white text-3xl sm:text-4xl">1</p>
                                <p className="font-medium text-xs sm:text-sm text-neutral-200 mt-2 text-center leading-tight px-1">
                                    {t('hero_card1')}
                                </p>
                            </GlareCard>

                            <GlareCard
                                width="120px"
                                height="160px"
                                className="flex flex-col py-2 px-2 items-center justify-start"
                            >
                                <p className="font-bold text-white text-3xl sm:text-4xl">2</p>
                                <p className="font-medium text-xs sm:text-sm text-neutral-200 mt-2 text-center leading-tight px-1">
                                    {t('hero_card2')}
                                </p>
                            </GlareCard>
                        </div>
                        <div className="flex justify-center mt-3 sm:mt-4">
                            <GlareCard
                                width="240px"
                                height="120px"
                                className="flex flex-col py-2 px-2 items-center justify-start"
                            >
                                <p className="font-bold text-white text-3xl sm:text-4xl">3</p>
                                <p className="font-medium text-xs sm:text-sm text-neutral-200 mt-2 text-center leading-tight px-1">
                                    {t('hero_card3')}
                                </p>
                            </GlareCard>
                        </div>
                    </div>
                    {/* Карточки для планшетов */}
                    <div className="hidden md:flex lg:hidden flex-col gap-6 ml-4 mt-16">
                        <div className="flex flex-row gap-6">
                            <GlareCard
                                width="160px"
                                height="200px"
                                className="flex flex-col py-3 px-3 items-start justify-center"
                            >
                                <p className="font-bold text-white text-4xl lg:text-5xl">1</p>
                                <p className="font-medium text-sm lg:text-base text-neutral-200 mt-6 leading-tight">
                                    {t('hero_card1')}
                                </p>
                            </GlareCard>

                            <GlareCard
                                width="160px"
                                height="200px"
                                className="flex flex-col py-3 px-3 items-start justify-start"
                            >
                                <p className="font-bold text-white text-4xl lg:text-5xl">2</p>
                                <p className="font-medium text-sm lg:text-base text-neutral-200 mt-6 leading-tight">
                                    {t('hero_card2')}
                                </p>
                            </GlareCard>
                        </div>
                        <div className="flex justify-center mt-4">
                            <GlareCard
                                width="320px"
                                height="140px"
                                className="flex flex-col py-3 px-3 items-start justify-start"
                            >
                                <p className="font-bold text-white text-4xl lg:text-5xl">3</p>
                                <p className="font-medium text-sm lg:text-base text-neutral-200 mt-6 leading-tight">
                                    {t('hero_card3')}
                                </p>
                            </GlareCard>
                        </div>
                    </div>
                    {/* Карточки для больших экранов */}
                    <div className="hidden lg:flex flex-col gap-8 xl:gap-10 2xl:gap-12 ml-4 lg:ml-6 xl:ml-8 mt-16 lg:mt-20 xl:mt-24">
                        <div className="flex flex-row gap-8 xl:gap-10 2xl:gap-12">
                            <GlareCard
                                width="180px"
                                height="240px"
                                className="flex flex-col py-4 px-4 items-start justify-center"
                            >
                                <p className="font-bold text-white text-5xl xl:text-6xl 2xl:text-7xl">1</p>
                                <p className="font-medium text-base xl:text-lg 2xl:text-xl text-neutral-200 mt-8 xl:mt-10 leading-tight">
                                    {t('hero_card1')}
                                </p>
                            </GlareCard>

                            <GlareCard
                                width="180px"
                                height="240px"
                                className="flex flex-col py-4 px-4 items-start justify-start"
                            >
                                <p className="font-bold text-white text-5xl xl:text-6xl 2xl:text-7xl">2</p>
                                <p className="font-medium text-base xl:text-lg 2xl:text-xl text-neutral-200 mt-8 xl:mt-10 leading-tight">
                                    {t('hero_card2')}
                                </p>
                            </GlareCard>
                        </div>
                        <div className="flex justify-center mt-6 xl:mt-8">
                            <GlareCard
                                width="400px"
                                height="160px"
                                className="flex flex-col py-4 px-4 items-start justify-start"
                            >
                                <p className="font-bold text-white text-5xl xl:text-6xl 2xl:text-7xl">3</p>
                                <p className="font-medium text-base xl:text-lg 2xl:text-xl text-neutral-200 mt-8 xl:mt-10 leading-tight">
                                    {t('hero_card3')}
                                </p>
                            </GlareCard>
                        </div>
                    </div>
                </div>
            </section>
            <PartnerLogos />
            <ProjectsCards />
            <div className="relative -mt-40">
            <HeroScrollDemo />
            </div>
            <div className="relative -mt-40">
            <TypewriterEffectSmoothDemo />
            </div>
            <CardHoverEffectDemo />
            <AppleCardsCarouselDemo />
            <div className="relative z-50">
            <SocialContacts />
            </div>
        </main>
    );
}
