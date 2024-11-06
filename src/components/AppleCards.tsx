"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useTranslations } from "use-intl";

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
                <div key={`dummy-content-${index}`} className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 shadow-md">
                    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700">{content.title}</span>{" "}
                        {content.description}
                    </p>
                    <Image
                        src={content.imageSrc}
                        alt={content.imageAlt}
                        height={500}
                        width={500}
                        className=" h-full w-full mx-auto object-cover "
                    />
                </div>
            ))}
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
                            title: t("case4.title"),
                            description: t("case4.description"),
                            imageSrc: "/projects/knifes.png",
                            imageAlt: t("case4.imageAlt"),
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
                            title: t("case3.title"),
                            description: t("case3.description"),
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
                            title: t("case2.title"),
                            description: t("case2.description"),
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
                            title: t("case1.title"),
                            description: t("case1.description"),
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
