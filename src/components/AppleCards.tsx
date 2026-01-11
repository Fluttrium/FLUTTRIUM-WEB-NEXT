"use client";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { useTranslations } from "use-intl";
import Modal from "@/components/Modal";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

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
  const [isModalOpen, setModalOpen] = useState(false);

  const _handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="container mx-auto">
      {contentData.map((content, index) => (
        <div
          key={`dummy-content-${index}`}
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 shadow-md"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              {content.title}
            </span>{" "}
          </p>
          <span className="text-neutral-700">{content.description}</span>
          <Image
            src={content.imageSrc}
            alt={content.imageAlt}
            height={300}
            width={300}
            className="mx-auto object-cover mt-4"
          />
        </div>
      ))}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export function AppleCardsCarouselDemo() {
  const t = useTranslations("Projects");
  const data = [
    {
      category: t("case4.category"),
      title: t("case4.title"),
      src: "/projects/knifes.png",
      content: (
        <DummyContent
          contentData={[
            {
              title: t("case41.title"),
              description: t("case41.description"),
              imageSrc: "/projects/knifes.png",
              imageAlt: t("case4.imageAlt"),
            },
            {
              title: t("case42.title"),
              description: t("case42.description"),
              imageSrc: "/Midnight2.png",
              imageAlt: t("case42.imageAlt"),
            },
            {
              title: t("case43.title"),
              description: t("case43.description"),
              imageSrc: "/Midnight3.png",
              imageAlt: t("case4.imageAlt"),
            },
          ]}
        />
      ),
    },
    {
      category: t("case5.category"),
      title: t("case5.title"),
      src: "/Black.png",
      content: (
        <DummyContent
          contentData={[
            {
              title: t("case51.title"),
              description: t("case51.description"),
              imageSrc: "/Black.png",
              imageAlt: t("case5.imageAlt"),
            },
            {
              title: t("case52.title"),
              description: t("case52.description"),
              imageSrc: "/White.png",
              imageAlt: t("case52.imageAlt"),
            },
            {
              title: t("case53.title"),
              description: t("case53.description"),
              imageSrc: "/White.png",
              imageAlt: t("case53.imageAlt"),
            },
          ]}
        />
      ),
    },
    {
      category: t("case6.category"),
      title: t("case6.title"),
      src: "/Graphite.png",
      content: (
        <DummyContent
          contentData={[
            {
              title: t("case61.title"),
              description: t("case61.description"),
              imageSrc: "/Graphite.png",
              imageAlt: t("case1.imageAlt"),
            },
            {
              title: t("case62.title"),
              description: t("case62.description"),
              imageSrc: "/Direct.png",
              imageAlt: t("case1.imageAlt"),
            },
            {
              title: t("case63.title"),
              description: t("case63.description"),
              imageSrc: "/Graphite2.png",
              imageAlt: t("case1.imageAlt"),
            },
          ]}
        />
      ),
    },
    {
      category: t("case7.category"),
      title: t("case7.title"),
      src: "/Silver-12.png",
      content: (
        <DummyContent
          contentData={[
            {
              title: t("case71.title"),
              description: t("case11.description"),
              imageSrc: "/Silver-12.png",
              imageAlt: t("case1.imageAlt"),
            },
            {
              title: t("case72.title"),
              description: t("case72.description"),
              imageSrc: "/Studio-Display.png",
              imageAlt: t("case1.imageAlt"),
            },
            {
              title: t("case73.title"),
              description: t("case73.description"),
              imageSrc: "/Silver-24.png",
              imageAlt: t("case1.imageAlt"),
            },
          ]}
        />
      ),
    },
    {
      category: t("case3.category"),
      title: t("case3.title"),
      src: "/projects/case6.png",
      content: (
        <DummyContent
          contentData={[
            {
              title: t("case31.title"),
              description: t("case31.description"),
              imageSrc: "/projects/case7.png",
              imageAlt: t("case3.imageAlt"),
            },
          ]}
        />
      ),
    },

    {
      category: t("case2.category"),
      title: t("case2.title"),
      src: "/projects/Realistic.png",
      content: (
        <DummyContent
          contentData={[
            {
              title: t("case21.title"),
              description: t("case21.description"),
              imageSrc: "/projects/case3.png",
              imageAlt: t("case2.imageAlt"),
            },
            {
              title: t("case22.title"),
              description: t("case22.description"),
              imageSrc: "/projects/case3.png",
              imageAlt: t("case2.imageAlt"),
            },
            {
              title: t("case23.title"),
              description: t("case23.description"),
              imageSrc: "/projects/case3.png",
              imageAlt: t("case2.imageAlt"),
            },
          ]}
        />
      ),
    },
    {
      category: t("case1.category"),
      title: t("case1.title"),
      src: "/dobrmock/CartoonLaptop.png",
      content: (
        <DummyContent
          contentData={[
            {
              title: t("case11.title"),
              description: t("case11.description"),
              imageSrc: "/projects/Foto1.jpg",
              imageAlt: t("case1.imageAlt"),
            },
            {
              title: t("case12.title"),
              description: t("case12.description"),
              imageSrc: "/projects/Foto1.jpg",
              imageAlt: t("case1.imageAlt"),
            },
            {
              title: t("case13.title"),
              description: t("case13.description"),
              imageSrc: "/projects/Foto1.jpg",
              imageAlt: t("case1.imageAlt"),
            },
          ]}
        />
      ),
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={`card-${index}`} card={card} index={index} layout={true} />
  ));

  return (
    <div id="portfolio" className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {t("casesTitle")}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

export default AppleCardsCarouselDemo;
