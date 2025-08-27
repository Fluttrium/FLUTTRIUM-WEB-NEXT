'use client';
import { useLanguage } from '@/store';
import { useEffect, useState } from 'react';

// Импортируем все JSON файлы с переводами
import ruMessages from '../../messages/ru.json';
import enMessages from '../../messages/en.json';
import czMessages from '../../messages/cz.json';
import deMessages from '../../messages/de.json';

const messages = {
  ru: ruMessages,
  en: enMessages,
  cz: czMessages,
  de: deMessages,
};

export const useTranslations = () => {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // На первом рендере возвращаем RU, чтобы совпасть с SSR и избежать hydration ошибки
  // После монтирования компонента переключаемся на определенный язык
  const effectiveLang = mounted ? (language as keyof typeof messages) : 'ru';
  const currentMessages = messages[effectiveLang] || messages.ru;

  return {
    messages: currentMessages,
    language: effectiveLang,
    mounted,
  };
};
