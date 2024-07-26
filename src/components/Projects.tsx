"use client";

import Image from "next/image";
import React from "react";

import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function ThreeDCardDemo() {
    const words = [
        {
          text: "Реализуйте",
        },
        {
          text: "любую",
        },
        {
          text: "вашу",
        },
        {
          text: "идею",
        },
        {
          text: "вместе",
        },
        {
          text: "с",
        },
        {
          text: "компанией",
        },
        {
          text: "FLUTTRIUM",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
      return (
        <div className="px-9">
          <TypewriterEffect className="pt-5 h-2/3" words={words} />
      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-3 sm:mx-0">
            <CardContainer className="inter-var r mb-6 md:mb-0">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Сайты для некоммерческих организаций
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Мы поддерживаем некоммерческие организации в их стремлении делать мир лучше.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/projects/case1.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-4 md:mt-20">
                  <CardItem translateZ={20} as={Link} href="https://twitter.com/mannupaaji" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Try now →
                  </CardItem>
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
      
            <CardContainer className="inter-var r mb-6 md:mb-0">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Сайты для бизнеса
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Нужен профессиональный сайт, который выделит ваш бизнес среди конкурентов и привлечет клиентов?
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/projects/case2.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-4 md:mt-20">
                  <CardItem translateZ={20} as={Link} href="https://twitter.com/mannupaaji" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Try now →
                  </CardItem>
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
      
            <CardContainer className="inter-var r">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Сайты для творческих деятелей
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Мы предлагаем вдохновляющие идеи, ресурсы и возможности для развития вашего творчества.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/projects/case2.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-4 md:mt-20">
                  <CardItem translateZ={20} as={Link} href="https://twitter.com/mannupaaji" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Try now →
                  </CardItem>
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      );      
       }
