import { create } from 'zustand';
import Cookies from 'js-cookie';

interface LanguageStore {
    language: string;
    setLanguage: (lang: string) => void;
}

export const useLanguage = create<LanguageStore>((set) => ({
    language: Cookies.get('language') || 'ru', // Получаем язык из куки
    setLanguage: (lang: string) => {
        set({ language: lang });
        Cookies.set('language', lang); // Сохраняем язык в куки
    },
}));
