import { useLanguage } from '@/store';

// Импортируем все JSON файлы с переводами
import ruMessages from '../../messages/ru.json';
import enMessages from '../../messages/en.json';
import czMessages from '../../messages/cz.json';

const messages = {
  ru: ruMessages,
  en: enMessages,
  cz: czMessages,
};

export const useTranslations = () => {
  const { language } = useLanguage();
  
  const currentMessages = messages[language as keyof typeof messages] || messages.ru;
  
  return {
    messages: currentMessages,
    language,
  };
};
