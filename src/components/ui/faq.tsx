"use client";

import React, {useState} from "react";
import { useTranslations } from "@/hooks/useTranslations";

// SVG-иконка
const PlusIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
    </svg>
);

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { messages } = useTranslations();
    const t: any = (messages as any).FAQ;
    const items: any[] = Array.isArray(t?.items) ? t.items : [];

    const toggleStage = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-5 text-center leading-tight break-words">{t?.title || ""}</h2>
            <div className="space-y-3 sm:space-y-4">
                {items.map((stage, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                        <button
                            className="flex items-center w-full text-left p-4 sm:p-6 md:p-8 rounded-lg transition-colors duration-200 ease-in-out hover:text-blue-600"
                            onClick={() => toggleStage(index)}
                        >
                            <PlusIcon />
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight break-words">{stage.question}</h3>
                        </button>
                        {openIndex === index && (
                            <div className="p-4 sm:p-6 md:p-8 border-t border-gray-300">
                                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">{stage.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
