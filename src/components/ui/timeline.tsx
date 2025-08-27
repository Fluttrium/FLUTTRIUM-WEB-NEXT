"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";
import { useTranslations } from "@/hooks/useTranslations";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({data}: { data: TimelineEntry[] }) => {
    const { messages } = useTranslations();
    const t: any = (messages as any).RetailTimeline;
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 80%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [1, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="m-1 font-sans md:px-10"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto pb-6 px-4 sm:px-6 md:px-10 lg:px-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6 text-black dark:text-white max-w-full">
                    {t?.title || ""}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl dark:text-300 leading-relaxed">
                    {t?.subtitle || ""}
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-10 md:pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-6 sm:pt-8 md:pt-10 lg:pt-20 xl:pt-40 md:gap-6 lg:gap-10"
                    >
                        <div
                            className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-24 md:top-32 lg:top-40 self-start max-w-full md:max-w-xs lg:max-w-sm md:w-full">
                            <div
                                className="h-8 sm:h-10 absolute left-2 sm:left-3 md:left-3 w-8 sm:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div
                                    className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1.5 sm:p-2"/>
                            </div>
                            <h3 className="hidden md:block text-lg md:pl-16 lg:pl-20 md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white dark:text-white leading-tight">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-16 sm:pl-20 pr-2 sm:pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-left font-bold text-white dark:text-white leading-tight">
                                {item.title}
                            </h3>
                            <div className="max-w-full overflow-hidden">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
                {/* vertical timeline line removed by request */}
            </div>
        </div>
    );
};