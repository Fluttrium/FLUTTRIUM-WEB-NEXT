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
    t("words2"),
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

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

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
  }, [portalReady]);

  const createAnimation = () => {
    if (!navbarLogoRef.current || !navbarButtonRef.current) return;

    ScrollTrigger.getAll().forEach((st) => st.kill());
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      const navbarLogoRect = navbarLogoRef.current!.getBoundingClientRect();
      const navbarButtonRect = navbarButtonRef.current!.getBoundingClientRect();

      let heroLogoX, heroLogoY, heroButtonX, heroButtonY;
      let logoScale, buttonScale;

      if (isMobile) {
        // МОБИЛЬНАЯ ВЕРСИЯ: По центру друг под другом
        heroLogoX = window.innerWidth / 2 - navbarLogoRect.width / 2;
        heroLogoY = window.innerHeight / 2 - navbarLogoRect.height - 60;
        heroButtonX = window.innerWidth / 2 - navbarButtonRect.width / 2;
        heroButtonY = window.innerHeight / 2 + 40;
        logoScale = 2;
        buttonScale = 1.2;
      } else {
        // ДЕСКТОПНАЯ ВЕРСИЯ: Слева
        heroLogoX = window.innerWidth / 4 - navbarLogoRect.width / 2;
        heroLogoY = window.innerHeight / 2 - navbarLogoRect.height / 2;
        heroButtonX = window.innerWidth / 4 - navbarButtonRect.width / 2;
        heroButtonY = window.innerHeight / 2 + navbarButtonRect.height * 2;
        logoScale = 3.5;
        buttonScale = 2;
      }

      const logoDeltaX = heroLogoX - navbarLogoRect.left;
      const logoDeltaY = heroLogoY - navbarLogoRect.top;
      const buttonDeltaX = heroButtonX - navbarButtonRect.left;
      const buttonDeltaY = heroButtonY - navbarButtonRect.top;

      gsap.set(navbarLogoRef.current, {
        x: logoDeltaX,
        y: logoDeltaY,
        scale: logoScale,
        opacity: 1,
        transformOrigin: "center center",
        pointerEvents: "auto",
        visibility: "visible",
      });

      gsap.set(navbarButtonRef.current, {
        x: buttonDeltaX,
        y: buttonDeltaY,
        scale: buttonScale,
        opacity: 1,
        transformOrigin: "center center",
        pointerEvents: "auto",
        visibility: "visible",
      });

      // ДЕСКТОПНАЯ ВЕРСИЯ: Настройка карточек и текста
      if (!isMobile && flipCardRef.current && flipTextRef.current) {
        const flipTextRect = flipTextRef.current.getBoundingClientRect();
        const flipCardRect = flipCardRef.current.getBoundingClientRect();

        const flipCardStartX = window.innerWidth + 200;
        const flipCardStartY = window.innerHeight * 0.4 - flipCardRect.height / 2;
        const flipCardCenterX = window.innerWidth * 0.75 - flipCardRect.width / 2;
        const flipCardCenterY = window.innerHeight * 0.4 - flipCardRect.height / 2;

        const flipTextStartX = -flipTextRect.width - 200;
        const flipTextStartY = window.innerHeight / 2 - flipTextRect.height / 2;
        const flipTextCenterX = window.innerWidth * 0.2 - flipTextRect.width / 2;
        const flipTextCenterY = window.innerHeight / 2 - flipTextRect.height / 2;

        const flipCardDeltaX = flipCardStartX - flipCardRect.left;
        const flipCardDeltaY = flipCardStartY - flipCardRect.top;
        const flipTextDeltaX = flipTextStartX - flipTextRect.left;
        const flipTextDeltaY = flipTextStartY - flipTextRect.top;

        gsap.set(flipCardRef.current, {
          x: flipCardDeltaX,
          y: flipCardDeltaY,
          opacity: 0,
          transformOrigin: "center center",
          pointerEvents: "none",
          visibility: "visible",
        });

        gsap.set(flipTextRef.current, {
          x: flipTextDeltaX,
          y: flipTextDeltaY,
          opacity: 0,
          transformOrigin: "center center",
          pointerEvents: "none",
          visibility: "visible",
        });

        // ДЕСКТОПНАЯ TIMELINE с карточками и текстом
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "bottom bottom",
            end: "+=5000",
            scrub: true,
            pin: heroSectionRef.current,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

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

        tl.addLabel("cardsDisplay", 0.15);

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

        tl.addLabel("textDisplay", 0.85);
      } else {
        // МОБИЛЬНАЯ TIMELINE: только лого и кнопка
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "bottom bottom",
            end: "+=3000",
            scrub: true,
            pin: heroSectionRef.current,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
            navbarLogoRef.current,
            {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: "power1.inOut",
            },
            0,
        );

        tl.to(
            navbarButtonRef.current,
            {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: "power1.inOut",
            },
            0,
        );
      }
    }, heroSectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  };

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
  }, []);

  const buttonPortal = portalReady
      ? document.getElementById("navbar-button-portal")
      : null;
  const logoPortal = portalReady
      ? document.getElementById("navbar-logo-portal")
      : null;

  return (
      <section ref={heroSectionRef} className="w-full min-h-screen relative">
        <div className="relative z-10 pointer-events-none max-w-7xl mx-auto px-4 md:px-10 min-h-screen grid grid-cols-2 md:grid-cols-2 items-center gap-6 md:gap-8 py-20 md:py-0">
          <div
              ref={flipTextRef}
              className="hidden md:block basis-1/2 pl-4 lg:pl-8 xl:pl-14 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl z-50 font-normal text-neutral-600 dark:text-neutral-400"
          >
            {t("hero_1")}&nbsp;{t("hero_2")}
            <div className="flex w-full mt-4">
              <FlipWords words={words2} />
            </div>
          </div>
          <div className="hidden md:block">
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

        {logoPortal &&
            createPortal(
                <div ref={navbarLogoRef} className="relative" style={{ zIndex: 1 }}>
                  <Logo />
                </div>,
                logoPortal,
            )}

        {buttonPortal &&
            createPortal(
                <div ref={navbarButtonRef} className="relative" style={{ zIndex: 1 }}>
                  <CTAButton text={t("button") || "Заполнить бриф"} />
                </div>,
                buttonPortal,
            )}
      </section>
  );
};