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
            <Navbar/>

            <section
                className="  mp-10 h-60p md:h-screen w-full bg-neutral-950 !overflow-hidden relative flex antialiased">
                <Spotlight className="absolute z-50"/>

                <div className="absolute h-full w-full bg-slate-950">
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                </div>

                <div
                    className=" flex items-start justify-center md:flex flex-row md:mx-10  z-50 px-9 w-screen  md:justify-between md:items-center h-full">

                    {/* Элемент для больших экранов */}
                    <div
                        className="hidden md:block text-6xl z-50 font-normal text-neutral-600 dark:text-neutral-400"
                        style={{top: "-30%", transform: "translateY(-100%)",}}
                    >
                        Мы&nbsp;разрабатываем
                        <div className="absolute top-full left-0 w-full mt-4">
                            <FlipWords words={words2}/>
                        </div>
                    </div>

                    {/* Элемент для маленьких экранов */}
                    <div
                        className="block md:hidden text-4xl z-50 font-normal text-neutral-600 dark:text-neutral-400"
                        style={{top: "15%", transform: "translateY(355%)"}}
                    >
                        Мы&nbsp;разрабатываем
                        <div className="absolute top-full left-0 w-full mt-4">
                            <FlipWords words={words2}/>
                        </div>
                    </div>
                    <div className="hidden  md:flex flex-col gap-8">
                        <div className=" flex flex-row gap-8">
                            <GlareCard
                                width="200px"
                                height="250px"
                                className="flex flex-col py-2 px-2 items-top justify-start "
                            >
                                <p className="font-bold text-white text-5xl">1</p>
                                <p className="font-medium text-2xl text-neutral-200 mt-7 ">
                                    Проведем интервью и составим ТЗ
                                </p>
                            </GlareCard>

                            <GlareCard
                                width="200px"
                                height="250px"
                                className="flex flex-col py-2 px-2 items-top justify-start "
                            >
                                <p className="font-bold text-white text-5xl">2</p>
                                <p className="font-medium text-2xl text-neutral-200 mt-7 ">
                                    Разработаем ваш продукт
                                </p>
                            </GlareCard>
                        </div>
                        <div className=" ">
                            <GlareCard
                                width="432px"
                                height="150px"
                                className="flex flex-col py-2 px-2 items-top justify-start "
                            >
                                <p className="font-bold text-white text-5xl">3</p>
                                <p className="font-medium text-2xl text-neutral-200 mt-7 ">
                                    Обеспечим поддержку и развитие
                                </p>
                            </GlareCard>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectsCards/>
            <HeroScrollDemo/>
            <TypewriterEffectSmoothDemo/>
            <CardHoverEffectDemo/>
            <AppleCardsCarouselDemo/>
            <SocialContacts/>
        </main>
    );
}
