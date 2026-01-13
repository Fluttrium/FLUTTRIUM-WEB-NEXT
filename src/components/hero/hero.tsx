"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "use-intl";
import CardSwap, { Card } from "@/components/CardSwap";
import { FlipWords } from "@/components/ui/flip-words";
import { CTAButton } from "./CTAbutton";
import { Logo } from "./logo";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const t = useTranslations("HomePage");

  const words2 = [
    t("words1"),
    t("words2"), // Убедитесь, что у вас есть другие ключи перевода
    t("words3"),
    t("words4"),
    t("words5"),
  ];

  const heroSectionRef = useRef<HTMLElement>(null);
  const navbarLogoRef = useRef<HTMLDivElement>(null);
  const navbarButtonRef = useRef<HTMLDivElement>(null);

  const flipTextRef = useRef<HTMLDivElement>(null);

  const flipCardRef = useRef<HTMLDivElement>(null);

  const [portalReady, setPortalReady] = useState(false);

  const animationCreated = useRef(false);

  // Принудительный скролл в начало при загрузке
  useEffect(() => {
    // Скролл в начало при монтировании компонента
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Обновляем ScrollTrigger после полной загрузки страницы
    const handleLoad = () => {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Проверка порталов
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 100;

    const checkPortal = setInterval(() => {
      attempts++;
      const buttonPortal = document.getElementById("navbar-button-portal");
      const logoPortal = document.getElementById("navbar-logo-portal");

      if (buttonPortal && logoPortal) {
        setPortalReady(true);
        clearInterval(checkPortal);
      } else if (attempts >= maxAttempts) {
        clearInterval(checkPortal);
      }
    }, 50);

    return () => clearInterval(checkPortal);
  }, []);

  // Создание анимации
  useEffect(() => {
    if (!portalReady || animationCreated.current) return;

    if (!navbarLogoRef.current || !navbarButtonRef.current) {
      return;
    }

    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        createAnimation();
        animationCreated.current = true;
      });
    });

    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portalReady]);

  const createAnimation = () => {
    if (!navbarLogoRef.current || !navbarButtonRef.current) return;

    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Принудительно обновляем позицию скролла перед созданием анимации
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // === ИЗМЕРЯЕМ ПОЗИЦИИ === //

      const flipTextRect = flipTextRef.current!.getBoundingClientRect();
      const flipCardRect = flipCardRef.current!.getBoundingClientRect();
      const navbarLogoRect = navbarLogoRef.current!.getBoundingClientRect();
      const navbarButtonRect = navbarButtonRef.current!.getBoundingClientRect();

      // === HERO ПОЗИЦИИ === //

      // Logo и Button в центре слева
      const heroLogoX = window.innerWidth / 4 - navbarLogoRect.width / 2;
      const heroLogoY = window.innerHeight / 2 - navbarLogoRect.height / 2;
      const heroButtonX = window.innerWidth / 4 - navbarButtonRect.width / 2;
      const heroButtonY = window.innerHeight / 2 + navbarButtonRect.height * 2;

      // FlipCard: справа за экраном → центр
      const flipCardStartX = window.innerWidth + 200;
      const flipCardStartY = window.innerHeight * 0.4 - flipCardRect.height / 2;
      const flipCardCenterX = window.innerWidth * 0.75 - flipCardRect.width / 2;
      const flipCardCenterY =
        window.innerHeight * 0.4 - flipCardRect.height / 2;

      // FlipText: слева за экраном → центр
      const flipTextStartX = -flipTextRect.width - 200;
      const flipTextStartY = window.innerHeight / 2 - flipTextRect.height / 2;
      const flipTextCenterX = window.innerWidth * 0.2 - flipTextRect.width / 2;
      const flipTextCenterY = window.innerHeight / 2 - flipTextRect.height / 2;

      // === ДЕЛЬТЫ === //

      const logoDeltaX = heroLogoX - navbarLogoRect.left;
      const logoDeltaY = heroLogoY - navbarLogoRect.top;
      const logoScale = isMobile ? 2.5 : 3.5;

      const buttonDeltaX = heroButtonX - navbarButtonRect.left;
      const buttonDeltaY = heroButtonY - navbarButtonRect.top;
      const buttonScale = isMobile ? 1.5 : 2;

      const flipCardDeltaX = flipCardStartX - flipCardRect.left;
      const flipCardDeltaY = flipCardStartY - flipCardRect.top;

      const flipTextDeltaX = flipTextStartX - flipTextRect.left;
      const flipTextDeltaY = flipTextStartY - flipTextRect.top;

      // === НАЧАЛЬНЫЕ СОСТОЯНИЯ === //

      // Logo и Button ВИДИМЫ в Hero с самого начала
      gsap.set(navbarLogoRef.current, {
        x: logoDeltaX,
        y: logoDeltaY,
        scale: logoScale,
        opacity: 1, // ← ВИДИМЫ
        transformOrigin: "center center",
        pointerEvents: "auto",
        visibility: "visible",
      });

      gsap.set(navbarButtonRef.current, {
        x: buttonDeltaX,
        y: buttonDeltaY,
        scale: buttonScale,
        opacity: 1, // ← ВИДИМЫ
        transformOrigin: "center center",
        pointerEvents: "auto",
        visibility: "visible",
      });

      // Cards: справа за экраном, невидимы
      gsap.set(flipCardRef.current, {
        x: flipCardDeltaX,
        y: flipCardDeltaY,
        opacity: 0,
        transformOrigin: "center center",
        pointerEvents: "none",
        visibility: "visible",
      });

      // Text: слева за экраном, невидим
      gsap.set(flipTextRef.current, {
        x: flipTextDeltaX,
        y: flipTextDeltaY,
        opacity: 0,
        transformOrigin: "center center",
        pointerEvents: "none",
        visibility: "visible",
      });

      // === TIMELINE === //

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "bottom bottom",
          end: isMobile ? "+=3000" : "+=5000",
          scrub: true,
          pin: heroSectionRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // === ПОСЛЕДОВАТЕЛЬНОСТЬ === //

      // === 1. CARDS ПОЯВЛЯЮТСЯ (0 - 0.15) === //
      tl.addLabel("cardsEnter", 0);

      tl.to(
        flipCardRef.current,
        {
          x: flipCardCenterX - flipCardRect.left,
          y: flipCardCenterY - flipCardRect.top,
          opacity: 1,
          duration: 0.15,
          ease: "power2.out",
          onStart: () => {
            if (flipCardRef.current) {
              flipCardRef.current.style.pointerEvents = "auto";
            }
          },
        },
        "cardsEnter",
      );

      // === 2. CARDS ПОКАЗЫВАЮТСЯ (0.15 - 0.35) === //
      tl.addLabel("cardsDisplay", 0.15);
      // Пауза - cards стоят в центре

      // === 3. LOGO И BUTTON УХОДЯТ В NAVBAR (0.35 - 0.55) === //
      tl.addLabel("logoExit", 0.35);

      tl.to(
        navbarLogoRef.current,
        {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power1.inOut",
        },
        "logoExit",
      );

      tl.to(
        navbarButtonRef.current,
        {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power1.inOut",
        },
        "logoExit",
      );

      // === 4. CARDS УХОДЯТ ВЛЕВО (0.55 - 0.70) === //
      tl.addLabel("cardsExit", 0.55);

      tl.to(
        flipCardRef.current,
        {
          x: flipCardRect.width + flipCardRect.left,
          opacity: 0,
          duration: 0.15,
          ease: "power2.in",
          onComplete: () => {
            if (flipCardRef.current) {
              flipCardRef.current.style.pointerEvents = "none";
            }
          },
        },
        "cardsExit",
      );

      // === 5. TEXT ПОЯВЛЯЕТСЯ СЛЕВА (0.65 - 0.85) === //
      tl.addLabel("textEnter", 0.65);

      tl.to(
        flipTextRef.current,
        {
          x: flipTextCenterX - flipTextRect.left,
          y: flipTextCenterY - flipTextRect.top,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
          onStart: () => {
            if (flipTextRef.current) {
              flipTextRef.current.style.pointerEvents = "auto";
            }
          },
        },
        "textEnter",
      );

      // === 6. TEXT ПОКАЗЫВАЕТСЯ (0.85 - 1.0) === //
      tl.addLabel("textDisplay", 0.85);
      // Финальная пауза - text остается
    }, heroSectionRef);

    // Обновляем ScrollTrigger после создания анимации
    ScrollTrigger.refresh();

    return () => ctx.revert();
  };

  // Resize handler
  useEffect(() => {
    if (!animationCreated.current) return;

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        animationCreated.current = false;
        createAnimation();
        animationCreated.current = true;
      }, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buttonPortal = portalReady
    ? document.getElementById("navbar-button-portal")
    : null;
  const logoPortal = portalReady
    ? document.getElementById("navbar-logo-portal")
    : null;

  return (
    <section
      ref={heroSectionRef}
      className="w-full min-h-screen relative"
    >
      {/* Пустой квсеонтейнер для Hero - элементы теперь в Portal */}
      <div className="relative z-10 pointer-events-none max-w-7xl mx-auto px-4 md:px-10 min-h-screen grid grid-cols-2 md:grid-cols-2 items-center gap-6 md:gap-8 py-20 md:py-0">
        {/* Пусто - элементы рендерятся только через Portal */}
        <div
          ref={flipTextRef}
          className="hidden md:block basis-1/2 pl-4 lg:pl-8 xl:pl-14 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl z-50 font-normal text-neutral-600 dark:text-neutral-400"
        >
          {t("hero_1")}&nbsp;{t("hero_2")}
          <div className="flex w-full mt-4">
            <FlipWords words={words2} />
          </div>
        </div>
        <div>
          <div
            ref={flipCardRef}
            style={{ height: "600px", position: "relative" }}
          >
            <CardSwap
              cardDistance={80}
              verticalDistance={100}
              delay={3000}
              pauseOnHover={false}
              width={600}
              height={300}
            >
              <Card className="flex flex-col py-4 px-4 items-start justify-start">
                <p className="font-bold text-white text-5xl xl:text-6xl 2xl:text-7xl">
                  1
                </p>
                <p className="font-medium text-base xl:text-lg 2xl:text-xl text-neutral-200 mt-8 xl:mt-10 leading-tight">
                  {t("hero_card1")}
                </p>
              </Card>
              <Card className="flex flex-col py-4 px-4 items-start justify-start">
                <p className="font-bold text-white text-5xl xl:text-6xl 2xl:text-7xl">
                  2
                </p>
                <p className="font-medium text-base xl:text-2xl 2xl:text-xl text-neutral-200 mt-8 xl:mt-10 leading-tight">
                  {t("hero_card2")}
                </p>
              </Card>
              <Card className="flex flex-col py-4 px-4 items-start justify-start">
                <p className="font-bold text-white text-5xl xl:text-6xl 2xl:text-7xl">
                  3
                </p>
                <p className="font-medium text-base xl:text-lg 2xl:text-xl text-neutral-200 mt-8 xl:mt-10 leading-tight">
                  {t("hero_card3")}
                </p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>

      {/* ОДИН лого - анимируется из Hero в Navbar */}
      {logoPortal &&
        createPortal(
          <div ref={navbarLogoRef} className="relative z-[9999]">
            <Logo />
          </div>,
          logoPortal,
        )}

      {/* ОДНА кнопка - анимируется из Hero в Navbar */}
      {buttonPortal &&
        createPortal(
          <div ref={navbarButtonRef} className="relative z-[9999]">
            <CTAButton text={t("button") || "Заполнить бриф"} />
          </div>,
          buttonPortal,
        )}
    </section>
  );
};
