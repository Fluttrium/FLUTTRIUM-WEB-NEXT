import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

const logos = [
  { src: "/Gazprom_Neft_Logo.png", alt: "Газпром нефть", priority: true },
  { src: "/logo-vosvod.webp", alt: "ВОСВОД", priority: false },
  {
    src: "/petrozavodsk-removebg-preview.png",
    alt: "Петрозаводск",
    priority: false,
  },
  { src: "/Logo-2.png", alt: "ГПН", priority: true },
  {
    src: "/chatgpt-image-aug5.png",
    alt: "Добрыня",
    priority: false,
  },
  { src: "/sleeplogo-removebg-preview.png", alt: "SleepTech", priority: false },
  { src: "/logo1-removebg-preview.png", alt: "SleepTech", priority: false },
];

const PartnerLogos = () => {
  const t = useTranslations("PartnerLogos");
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Проверяем предпочтения пользователя по анимации
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) =>
      setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Intersection Observer для анимации появления
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("partner-logos");
    if (element) {
      observer.observe(element);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
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
      {/*/!* Фоновый паттерн *!/*/}
      {/*<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-60" />*/}

      {/* Основной контент */}
      <div className="relative z-10 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        {/* Заголовок */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Горизонтальный свет по центру */}
        <div className="pointer-events-none absolute top-1/2 left-0 w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 -translate-y-1/2 z-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 blur-3xl" />
        </div>

        {/* Контейнер для логотипов */}
        <div className="relative z-20 overflow-hidden">
          {/* Ряд логотипов */}
          <div
            className={`flex animate-scroll-slow gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 ${
              isReducedMotion ? "animate-none" : ""
            } ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
          >
            {[...logos, ...logos].map((logo, index) => (
                <div key={`logo-${index}`} className="flex-shrink-0 group">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-2xl bg-white/90 backdrop-blur-sm p-4 sm:p-5 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-white/10">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={128}
                      height={128}
                      className="object-contain w-full h-full"
                      priority={logo.priority}
                      loading={logo.priority ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 px-4">
          <p className="text-xs sm:text-sm md:text-base text-white max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
