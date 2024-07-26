import Navbar from "@/components/global/navbar";
import { FlipWords } from "@/components/ui/flip-words";
import { GlareCard } from "@/components/ui/glare-card";
import { Spotlight } from "@/components/ui/spotlight";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

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

      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex    antialiased">
        <Spotlight className=" -top-10 -left-20  z-30" />
        <div className="absolute h-full w-screen bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        <div className="flex flex-row w-screen">
          <div className="absolute w-1/3 z-50 px-9  ">
            <div className=" pt-40 text-5xl z-50 mx-auto font-normal text-neutral-600 dark:text-neutral-400">
              Мы&nbsp;разрабатываем
              <FlipWords words={words2} />
            </div>
          </div>

          <div className="absolute w-2/5 z-40 right-0 top-24">
            <div className=" space-y-4 flex flex-col col w-3/4 justify-stretch">
              <div className=" ">
                <GlareCard
                  width="400px"
                  height="150px"
                  className="flex flex-col py-2 px-2 items-top justify-start "
                >
                  <p className="font-bold text-white text-5xl">1</p>
                  <p className="font-medium text-2xl text-neutral-200 mt-7 ">
                    Проведем интервью и составим ТЗ.
                  </p>
                </GlareCard>
              </div>
              <div className=" ">
                <GlareCard
                  width="400px"
                  height="150px"
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
                  width="400px"
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
        </div>
      </section>
    </main>
  );
}
