import Navbar from "@/components/global/navbar";
import { GlareCard } from "@/components/ui/glare-card";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
  const words = [
    {
      text: "Создай",
    },
    {
      text: "новые",
    },
    {
      text: "возможности",
    },
    {
      text: "для",
    },
    {
      text: "своего",
    },
    {
      text: "бизнеса",
    },
    {
      text: "с",
    },
    {
      text: "FLUTTRIUM.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex  items-start justify-center antialiased">
        <div className="absolute h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="absolute flex left-0  z-30 px-9 ">
            <TypewriterEffect className="pt-40 h-2/3  " words={words} />
          </div>
          <div className="  z-20 pt-60 flex flex-row">
            <GlareCard className=" flex   flex-col items-center justify-center   py-2 px-2">
              <p className="font-bold text-white text-lg">The greatest trick</p>
              <p className="font-normal text-base text-neutral-200 mt-4">
                The greatest trick the devil ever pulled was to convince the
                world that he didn&apos;t exist.
              </p>
            </GlareCard>
            <GlareCard className=" flex   flex-col items-center justify-center   py-2 px-2">
              <p className="font-bold text-white text-lg">The greatest trick</p>
              <p className="font-normal text-base text-neutral-200 mt-4">
                The greatest trick the devil ever pulled was to convince the
                world that he didn&apos;t exist.
              </p>
            </GlareCard>
            <GlareCard className=" flex   flex-col items-center justify-center   py-2 px-2">
              <p className="font-bold text-white text-lg">The greatest trick</p>
              <p className="font-normal text-base text-neutral-200 mt-4">
                The greatest trick the devil ever pulled was to convince the
                world that he didn&apos;t exist.
              </p>
            </GlareCard>
          </div>
        </div>
      </section>
    </main>
  );
}
