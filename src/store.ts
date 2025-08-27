import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Cookies from 'js-cookie';

interface LanguageState {
    language: string;
    setLanguage: (language: string) => void;
    detectLanguageByRegion: () => string;
    detectLanguageByIP: () => Promise<string>;
}

// Функция для определения языка по региону (клиентская сторона)
const detectLanguageByRegion = (): string => {
    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') {
        return 'ru'; // По умолчанию для сервера
    }

    // 1. Проверяем сохраненный язык в localStorage/cookies
    const savedLanguage = Cookies.get('language');
    if (savedLanguage) {
        return savedLanguage;
    }

    // 2. Проверяем язык браузера
    const browserLanguage = navigator.language || navigator.languages?.[0] || 'ru';
    
    // 3. Определяем язык по коду страны/региона
    if (browserLanguage.startsWith('de') || browserLanguage.startsWith('de-')) {
        return 'de';
    } else if (browserLanguage.startsWith('en') || browserLanguage.startsWith('en-')) {
        return 'en';
    } else if (browserLanguage.startsWith('cz') || browserLanguage.startsWith('cs')) {
        return 'cz';
    } else if (browserLanguage.startsWith('ru') || browserLanguage.startsWith('ru-')) {
        return 'ru';
    }
    
    // 4. По умолчанию возвращаем русский
    return 'ru';
};

// Функция для определения языка по IP (серверная сторона)
const detectLanguageByIP = async (): Promise<string> => {
    try {
        const response = await fetch('/api/detect-language');
        const data = await response.json();
        
        if (data.language) {
            return data.language;
        }
        
        return 'ru'; // по умолчанию
    } catch (error) {
        console.error('Error detecting language by IP:', error);
        return 'ru'; // по умолчанию
    }
};

export const useLanguage = create<LanguageState>()(
    persist(
        (set, get) => ({
            language: detectLanguageByRegion(),
            setLanguage: (language: string) => {
                set({ language });
                Cookies.set('language', language, { expires: 365 }); // Сохраняем на год
            },
            detectLanguageByRegion: () => {
                const detectedLanguage = detectLanguageByRegion();
                set({ language: detectedLanguage });
                return detectedLanguage;
            },
            detectLanguageByIP: async () => {
                const detectedLanguage = await detectLanguageByIP();
                set({ language: detectedLanguage });
                return detectedLanguage;
            },
        }),
        {
            name: 'language-storage',
        }
    )
);
