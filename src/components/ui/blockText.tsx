"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

const FlutterInfo = () => {
    const { messages } = useTranslations();
    const m: any = (messages as any).FlutterPage;
    return (
        <div className="w-full mx-4 sm:mx-20 rounded-lg shadow-md flex flex-col sm:flex-row items-center z-50"> {/* Flex для выравнивания на мобильных и десктопных экранах */}
            <div className="flex-1 text-center sm:text-left sm:px-20 mb-8 sm:mb-0"> {/* Текстовая часть с отступами */}
                <h2 className="text-4xl sm:text-6xl font-bold mb-4">{m?.blockText?.title}</h2>
                <p className="text-xl text-white-700 mb-4">{m?.blockText?.p1}</p>
                <p className="text-xl text-white-700">{m?.blockText?.p2}</p>
            </div>
            <Image
                src="/flutter_icon.png" // Путь к вашему SVG изображению
                alt="Flutter Logo"
                className="w-3/4 sm:w-1/3 h-auto object-contain"
                width={1000}
                height={1000}
            /> 
        </div>
    );
};

export default FlutterInfo;
