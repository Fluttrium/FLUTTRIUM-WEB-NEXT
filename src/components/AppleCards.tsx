"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// Define interfaces for the content data and props
interface ContentData {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface DummyContentProps {
  contentData: ContentData[];
}

const DummyContent: React.FC<DummyContentProps> = ({ contentData }) => {
  return (
    <div className="container mx-auto">
      {contentData.map((content, index) => (
        <div key={"dummy-content" + index} className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">{content.title}</span>{" "}
            {content.description}
          </p>
          <Image
            src={content.imageSrc}
            alt={content.imageAlt}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div id="portfolio" className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Наши кейсы
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// Define the data array with proper typing
const data: {
  category: string;
  title: string;
  src: string;
  content: JSX.Element;
}[] = [
  {
    category: "Недвижимость",
    title: "Сайт для Торгового Центра",
    src: "/projects/case1.png",
    content: (
      <DummyContent
        contentData={[
          {
            title: 'Сделали сайт для торгового центра "Добрыня"',
            description:
              "Мы рады представить наш новый проект — современный и интерактивный сайт для торгового центра 'Добрыня'. В рамках этого проекта наша команда работала над созданием уникальной онлайн-платформы, которая не только отражает стиль и атмосферу торгового центра, но и предоставляет удобный интерфейс для его посетителей.",
            imageSrc: "/projects/case1.png",
            imageAlt: "Macbook mockup from Aceternity UI",
          },
        ]}
      />
    ),
  },
  {
    category: "Некомерческие организации",
    title: "Сайт для НКО СИНЕРГИЯ",
    src: "/projects/case2.png",
    content: (
      <DummyContent
        contentData={[
          {
            title: "Сайт для НКО СИНЕРГИЯ",
            description:
              "Мы рады представить наш новый проект — сайт для НКО СИНЕРГИЯ. Этот проект направлен на улучшение взаимодействия между организацией и ее участниками.",
            imageSrc: "/projects/case2.png",
            imageAlt: "Project mockup for Synergy NGO",
          },
        ]}
      />
    ),
  },
  {
    category: "Приложения",
    title: "Корпоративное такси",
    src: "/fuzzieLogo.png",
    content: (
      <DummyContent
        contentData={[
          {
            title: "Корпоративное такси",
            description:
              "Наш новый проект — корпоративное такси, разработанное для улучшения внутренней логистики компании. Удобный интерфейс и высокая функциональность.",
            imageSrc: "/fuzzieLogo.png",
            imageAlt: "Corporate taxi app mockup",
          },
        ]}
      />
    ),
  },
];

export default AppleCardsCarouselDemo;
