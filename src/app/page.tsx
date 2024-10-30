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

    const renderGlareCard = (number: number, text: string) => (
        <GlareCard
            width="220px"
            height="280px"
            className="flex flex-col py-4 px-4 items-top  justify-start"
        >
            <p className="font-bold text-white text-6xl">{number}</p>
            <p className="font-medium text-2xl text-neutral-200 mt-8">{text}</p>
        </GlareCard>
    );

    return (
        <main className="overflow-hidden ">

            <Navbar/>
            <section
                className=" relative mp-10 h-auto md:h-screen w-full bg-neutral-950 !overflow-hidden  flex flex-row antialiased">
                <Spotlight
                    className="absolute z-50 top-0 right-50 "
                    fill="white"
                />

                <div className="absolute h-full w-full bg-slate-950">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                </div>

                <div className="relative z-50 flex flex-row items-center justify-between px-28 md:flex-row md:mx-10 w-full h-full">
                    <div
                        className="hidden basis-1/2 pl-14 md:block text-6xl z-50 font-normal text-neutral-600 dark:text-neutral-400 relative">
                        {t('hero_1')}&nbsp;{t('hero_2')}
                        <div className="absolute pl-14 max-h-20 left-0 w-full mt-4">
                            <FlipWords words={words2}/>
                        </div>
                    </div>
                    <div className="block md:hidden flex flex-col items-center text-center">
                        <div className="text-4xl z-50 font-normal text-neutral-600 dark:text-neutral-400">
                            {t('hero_1')}&nbsp;{t('hero_2')}
                        </div>
                        <div className="mt-4">
                            <FlipWords words={words2}/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-10 md:hidden">
                        <div className="flex flex-row justify-center  gap-2">
                            {renderGlareCard(1, t('hero_card1'))}
                            {renderGlareCard(2, t('hero_card2'))}
                        </div>
                        <div className="flex justify-center mt-4">
                            <GlareCard
                                width="260px"
                                height="140px"
                                className="flex flex-col py-2 px-2 items-center justify-start"
                            >
                                <p className="font-bold text-white text-4xl">3</p>
                                <p className="font-medium text-xl text-neutral-200 mt-2 ">
                                    {t('hero_card3')}
                                </p>
                            </GlareCard>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col gap-10 ml-6">
                        <div className="flex flex-row gap-10">
                            {renderGlareCard(1, t('hero_card1'))}
                            {renderGlareCard(2, t('hero_card2'))}
                        </div>
                        <div className="flex justify-center mt-6">
                            <GlareCard
                                width="480px"
                                height="180px"
                                className="flex flex-col py-4 px-4 items-start justify-start"
                            >
                                <p className="font-bold text-white text-6xl">3</p>
                                <p className="font-medium text-2xl text-neutral-200 mt-8">
                                    {t('hero_card3')}
                                </p>
                            </GlareCard>
                        </div>
                    </div>
                </div>

            </section>


            <div className="relative z-50 -mt-20">
                <ProjectsCards />
            </div>
            <div className="relative z-50 -mt-40">
                <HeroScrollDemo />
            </div>
            <div className="relative z-50 -mt-40">
                <TypewriterEffectSmoothDemo />
            </div>
            <div className="relative z-50 -mt-20">
                <CardHoverEffectDemo />
            </div>
            <AppleCardsCarouselDemo />
            <SocialContacts />


        </main>
    );
}
