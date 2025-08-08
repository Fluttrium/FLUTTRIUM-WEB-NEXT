import React from "react";

const logos = [
    { src: "/Gazprom_Neft_Logo.png", alt: "Газпром нефть" },
    { src: "logo-vosvod.webp", alt: "ВОСВОД" },
    { src: "/petrozavodsk-removebg-preview.png", alt: "Петрозаводск" },
    { src: "/Logo-2.png", alt: "Сибур" },
    { src: "ChatGPT Image 5 авг. 2025 г., 22_57_40.png", alt: "Яндекс" },
    { src: "sleeplogo-removebg-preview.png", alt: "SleepTech" },
    { src: "logo1-removebg-preview.png", alt: "SleepTech" },
];

const PartnerLogos = () => {
    return (
        <div className="w-full">
            {/* Заголовок вне полоски */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Наши партнёры
                </h2>
            </div>

            {/* Блок со светом и логотипами */}
            <div
                className="relative bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
                                 linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
                     bg-[size:14px_24px] overflow-hidden py-10"
            >
                {/* Горизонтальный свет по центру */}
                <div className="pointer-events-none absolute top-1/2 left-0 w-full h-28 -translate-y-1/2 z-10">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-35 blur-3xl" />
                </div>

                <div className="relative z-20 w-max flex animate-scroll-slow gap-16 px-8">
                    {[...logos, ...logos].map((logo, index) => {
                        const isLarge = index % logos.length === 2 || index % logos.length === 4;
                        return (
                            <div
                                key={index}
                                className="flex-shrink-0 opacity-70 hover:opacity-100 transition duration-300 hover:scale-105"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={`object-contain w-auto ${
                                        isLarge ? "h-32" : "h-24"
                                    } drop-shadow-[0_4px_24px_rgba(0,155,255,0.5)]`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PartnerLogos;
