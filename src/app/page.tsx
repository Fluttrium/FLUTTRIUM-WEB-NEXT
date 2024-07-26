import AppleCardsCarouselDemo from "@/components/AppleCards";
import { CardHoverEffectDemo } from "@/components/Cards";
import { HeroScrollDemo } from "@/components/ContainerScroll";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import { ThreeDCardDemo } from "@/components/Projects";
import { TypewriterEffectSmoothDemo } from "@/components/Tehnology";
import { FlipWords } from "@/components/ui/flip-words";
import { GlareCard } from "@/components/ui/glare-card";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  const words2 = [
    "мобильные приложения для среднего бизнеса",
    "веб приложения",
    "дизайн",
    "MVP для вашего стартапа",
  ];

  return (
    <main>
      <Navbar />

      <section className="h-screen w-screen bg-neutral-950 rounded-md !overflow-hidden relative flex antialiased">
        <Spotlight className="absolute z-50" />
        <div className="absolute h-screen w-screen bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        <div className="flex flex-col md:flex-row mx-10  z-50 px-9 w-screen  justify-between items-center h-full">
          <div
            className="relative text-7xl z-50 font-normal text-neutral-600 dark:text-neutral-400"
            style={{ top: "-15%", transform: "translateY(-55%)" }}
          >
            Мы&nbsp;разрабатываем
            <div className="absolute top-full left-0 w-full mt-4">
              <FlipWords words={words2} />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className=" flex flex-row gap-8">
              <GlareCard
                width="200px"
                height="250px"
                className="flex flex-col py-2 px-2 items-top justify-start "
              >
                <p className="font-bold text-white text-5xl">1</p>
                <p className="font-medium text-2xl text-neutral-200 mt-7 ">
                  Проведем интервью и составим ТЗ.
                </p>
              </GlareCard>

              <GlareCard
                width="200px"
                height="250px"
                className="flex flex-col py-2 px-2 items-top justify-start "
              >
                <p className="font-bold text-white text-5xl">2</p>
                <p className="font-medium text-2xl text-neutral-200 mt-7 ">
                  Разработаем ваш продукт.
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
                  Получим за это лавандос.
                </p>
              </GlareCard>
            </div>
          </div>
        </div>
      </section>
      <ThreeDCardDemo />
      <HeroScrollDemo/>
      <TypewriterEffectSmoothDemo/>
      <CardHoverEffectDemo />
      <AppleCardsCarouselDemo/>
      <Footer/>
    </main>
  );
}
