'use client';

import {useEffect} from "react";
import {useLanguage} from "@/store"; // Импортируйте хранилище
import {useRouter} from "next/navigation";

const LanguageSwitcher = () => {
    const {language, setLanguage} = useLanguage(); // Получаем текущий язык и функцию для его смены
    const router = useRouter();

    const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = event.target.value;
        setLanguage(newLanguage);
        router.refresh(); // Перезагрузка страницы для применения изменений
    };

    useEffect(() => {
        // Устанавливаем язык из localStorage при первом рендере
        const savedLanguage = localStorage.getItem('language') || 'en';
        setLanguage(savedLanguage);
    }, [setLanguage]);

    return (
        <select value={language} onChange={handleChangeLanguage} className="text-white bg-black rounded-md p-2">
            <option value="en">English</option>
            <option value="ru">Русский</option>
            {/* Добавьте другие языки при необходимости */}
        </select>
    );
};

export default LanguageSwitcher;
