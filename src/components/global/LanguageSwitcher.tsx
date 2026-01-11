"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLanguage } from "@/store"; // Импортируйте хранилище

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage(); // Получаем текущий язык и функцию для его смены
  const router = useRouter();

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    router.refresh(); // Перезагрузка страницы для применения изменений
  };

  useEffect(() => {
    // Устанавливаем язык из localStorage при первом рендере
    const savedLanguage = localStorage.getItem("language") || "ru";
    setLanguage(savedLanguage);
  }, [setLanguage]);

  return (
    <select
      value={language}
      onChange={handleChangeLanguage}
      className="text-white bg-black rounded-md p-2"
    >
      <option value="ru">Русский</option>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="cz">Čeština</option>
    </select>
  );
};

export default LanguageSwitcher;
