"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Наши кейсы
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Сделали сайт для торгового центра "Добрыня"
              </span>{" "}
              Мы рады представить наш новый проект — современный и интерактивный сайт для торгового центра "Добрыня". В рамках этого проекта наша команда работала над созданием уникальной онлайн-платформы, которая не только отражает стиль и атмосферу торгового центра, но и предоставляет удобный интерфейс для его посетителей.
            </p>
            <Image
              src="/projects/case1.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Недвижимость",
    title: "Сайт для Торгового Центра",
    src: "/projects/case1.png",
    content: <DummyContent />,
  },
  {
    category: "Некомерческие организации",
    title: "Сайт для НКО СИНЕРГИЯ",
    src: "/projects/case2.png",
    content: <DummyContent />,
  },
  {
    category: "Приложения",
    title: "Корпоративное такси",
    src: "/fuzzieLogo.png",
    content: <DummyContent />,
  },
];
