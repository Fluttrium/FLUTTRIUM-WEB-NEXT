"use client";

import { useEffect, useState, useRef } from "react";
import GradientBlinds from "@/components/GradientBlinds";

export default function BackgroundGradient() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Определяем мобильное устройство
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Проверяем при монтировании
    checkMobile();

    // Слушаем изменения размера окна
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const container = containerRef.current;

    // Глобальный слушатель движения мыши
    const handleMouseMove = (e: MouseEvent) => {
      // Игнорируем синтетические события, чтобы избежать бесконечного цикла
      if ((e as any).isSynthetic) return;

      // Создаем синтетическое событие для градиента
      const syntheticEvent = new MouseEvent('mousemove', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: false, // НЕ всплываем, чтобы избежать цикла
        cancelable: true,
      });

      // Добавляем флаг, чтобы отличить синтетическое событие
      (syntheticEvent as any).isSynthetic = true;

      // Отправляем событие в canvas градиента
      const canvas = container.querySelector('canvas');
      if (canvas) {
        canvas.dispatchEvent(syntheticEvent);
      }
    };

    // Слушаем на document, чтобы ловить все движения мыши
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
    >
      <GradientBlinds
        gradientColors={["#FF9FFC", "#5227FF"]}
        angle={204}
        noise={0.3}
        blindCount={64}
        blindMinWidth={200}
        mouseDampening={0.99}
        mirrorGradient={false}
        spotlightRadius={0.3}
        spotlightSoftness={1}
        spotlightOpacity={1}
        distortAmount={91}
        shineDirection="left"
      />
    </div>
  );
}