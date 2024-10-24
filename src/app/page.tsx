import AppleCardsCarouselDemo from "@/components/AppleCards";
import { CardHoverEffectDemo } from "@/components/Cards";
import SocialContacts from "@/components/Contacs";
import { HeroScrollDemo } from "@/components/ContainerScroll";
import Navbar from "@/components/global/navbar";
import { ProjectsCards } from "@/components/Projects";
import { TypewriterEffectSmoothDemo } from "@/components/Tehnology";
import { FlipWords } from "@/components/ui/flip-words";
import { GlareCard } from "@/components/ui/glare-card";
import { Spotlight } from "@/components/ui/spotlight";
import "@/app/globals.css";
import { FreeAudit } from "@/components/ui/audit";

export default function Home() {
    const words2 = [
        "мобильные приложения для вашего бизнеса",
        "веб приложения",
        "профессиональные сайты",
        "уникальный дизайн",
        "MVP для вашего стартапа",
    ];

    return (
        <main className="overflow-hidden">
            <Navbar />
            <section className="mp-10 h-auto md:h-screen w-full bg-neutral-950 !overflow-hidden relative flex antialiased">
                <Spotlight className="absolute" />

                <div className="absolute h-full w-full bg-slate-950">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                </div>

                <div className="flex flex-col items-center justify-center md:flex-row md:mx-10 z-50 px-4 w-full h-full">
                    {/* Элемент для больших экранов */}
                    <div className="hidden md:block text-6xl z-50 font-normal text-neutral-600 dark:text-neutral-400 relative">
                        Мы&nbsp;разрабатываем
                        <div className="absolute top-full left-0 w-full mt-4">
                            <FlipWords words={words2} />
                        </div>
                    </div>

                    {/* Элемент для маленьких экранов */}
                    <div className="block md:hidden flex flex-col items-center text-center">
                        <div className="text-4xl z-50 font-normal text-neutral-600 dark:text-neutral-400">
                            Мы&nbsp;разрабатываем
                        </div>
                        <div className="mt-4">
                            <FlipWords words={words2} />
                        </div>
                    </div>

                    {/* Карточки для мобильных экранов */}
                    <div className="flex flex-col justify-center gap-2 mt-10 md:hidden">
                        <div className="flex flex-row justify-center gap-2">
                            <GlareCard
                                width="140px"
                                height="180px"
                                className="flex flex-col py-2 px-2 items-center justify-start"
                            >
                                <p className="font-bold text-white text-4xl">1</p>
                                <p className="font-medium text-xl text-neutral-200 mt-2 ">
                                    Проведем интервью и составим ТЗ
                                </p>
                            </GlareCard>

                            <GlareCard
                                width="140px"
                                height="180px"
                                className="flex flex-col py-2 px-2 items-center justify-start"
                            >
                                <p className="font-bold text-white text-4xl">2</p>
                                <p className="font-medium text-xl text-neutral-200 mt-2 ">
                                    Разработаем ваш продукт
                                </p>
                            </GlareCard>
                        </div>

                        <div className="flex justify-center mt-4">
                            <GlareCard
                                width="260px"
                                height="140px"
                                className="flex flex-col py-2 px-2 items-center justify-start"
                            >
                                <p className="font-bold text-white text-4xl">3</p>
                                <p className="font-medium text-xl text-neutral-200 mt-2 ">
                                    Обеспечим поддержку и развитие
                                </p>
                            </GlareCard>
                        </div>
                    </div>

                    {/* Карточки для больших экранов */}
                    <div className="hidden md:flex flex-col gap-10 ml-6">
                        <div className="flex flex-row gap-10">
                            <GlareCard
                                width="220px"
                                height="280px"
                                className="flex flex-col py-4 px-4 items-start justify-center"
                            >
                                <p className="font-bold text-white text-6xl">1</p>
                                <p className="font-medium text-2xl text-neutral-200 mt-8">
                                    Проведем интервью и составим ТЗ
                                </p>
                            </GlareCard>

                            <GlareCard
                                width="220px"
                                height="280px"
                                className="flex flex-col py-4 px-4 items-start justify-start"
                            >
                                <p className="font-bold text-white text-6xl">2</p>
                                <p className="font-medium text-2xl text-neutral-200 mt-8">
                                    Разработаем ваш продукт
                                </p>
                            </GlareCard>
                        </div>
                        <div className="flex justify-center mt-6">
                            <GlareCard
                                width="480px"
                                height="180px"
                                className="flex flex-col py-4 px-4 items-start justify-start"
                            >
                                <p className="font-bold text-white text-6xl">3</p>
                                <p className="font-medium text-2xl text-neutral-200 mt-8">
                                    Обеспечим поддержку и развитие
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
