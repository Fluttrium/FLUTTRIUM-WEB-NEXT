import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "use-intl";

const logos = [
    { src: "/Gazprom_Neft_Logo.png", alt: "Газпром нефть", priority: true },
    { src: "/logo-vosvod.webp", alt: "ВОСВОД", priority: false },
    { src: "/petrozavodsk-removebg-preview.png", alt: "Петрозаводск", priority: false },
    { src: "/Logo-2.png", alt: "Сибур", priority: true },
    { src: "/ChatGPT Image 5 авг. 2025 г., 22_57_40.png", alt: "Яндекс", priority: false },
    { src: "/sleeplogo-removebg-preview.png", alt: "SleepTech", priority: false },
    { src: "/logo1-removebg-preview.png", alt: "SleepTech", priority: false },
];

const PartnerLogos = () => {
    const t = useTranslations('PartnerLogos');
    const [isVisible, setIsVisible] = useState(false);
    const [isReducedMotion, setIsReducedMotion] = useState(false);

    useEffect(() => {
        // Проверяем предпочтения пользователя по анимации
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setIsReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        // Intersection Observer для анимации появления
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('partner-logos');
        if (element) {
            observer.observe(element);
        }

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <section 
            id="partner-logos"
            className="w-full relative overflow-hidden"
            aria-label="Наши партнёры"
        >
            {/* Фоновый паттерн */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-60" />
            
            {/* Основной контент */}
            <div className="relative z-10 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
                {/* Заголовок */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                        {t('title')}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Горизонтальный свет по центру */}
                <div className="pointer-events-none absolute top-1/2 left-0 w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 -translate-y-1/2 z-10">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 blur-3xl" />
                </div>

                {/* Контейнер для логотипов */}
                <div className="relative z-20 overflow-hidden">
                    {/* Ряд логотипов */}
                    <div className={`flex animate-scroll-slow gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 ${
                        isReducedMotion ? 'animate-none' : ''
                    } ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                        {[...logos, ...logos].map((logo, index) => {
                            const isLarge = index % logos.length === 2 || index % logos.length === 4;
                            return (
                                <div
                                    key={`logo-${index}`}
                                    className="flex-shrink-0 group"
                                >
                                    <div className="relative">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={isLarge ? 128 : 96}
                                            height={isLarge ? 128 : 96}
                                            className={`object-contain transition-all duration-500 ${
                                                isLarge 
                                                    ? 'h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36' 
                                                    : 'h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32'
                                            } opacity-60 group-hover:opacity-100 group-hover:scale-110 drop-shadow-[0_4px_24px_rgba(0,155,255,0.3)] group-hover:drop-shadow-[0_8px_32px_rgba(0,155,255,0.6)]`}
                                            priority={logo.priority}
                                            loading={logo.priority ? 'eager' : 'lazy'}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Дополнительная информация */}
                <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 px-4">
                    <p className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-3xl mx-auto">
                        {t('description')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
