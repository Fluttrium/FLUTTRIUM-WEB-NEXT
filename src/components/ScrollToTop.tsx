"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Предотвращаем автоматическое восстановление позиции скролла
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Принудительно скроллим в начало
    window.scrollTo(0, 0);
  }, []);

  return null;
}