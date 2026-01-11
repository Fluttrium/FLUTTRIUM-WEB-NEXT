"use client";

// components/Modal.tsx
import type React from "react";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const t = useTranslations("Modal");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(false);

  // Блокировка скролла при открытии модалки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/modal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, source }),
      });

      if (response.ok) {
        console.log("Форма успешно отправлена!");
        // Очищаем поля формы
        setName("");
        setPhone("");
        setEmail("");
        setSource("");
        // Закрываем модальное окно
        onClose();
        // Показываем уведомление об успехе
        alert(t("success"));
      } else {
        const errorData = await response.json();
        console.error("Ошибка отправки:", errorData);
        alert(t("error"));
      }
    } catch (error) {
      console.error("Ошибка сети:", error);
      alert(t("networkError"));
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex justify-center items-center pt-20 md:pt-24 lg:pt-28 pb-8">
      <div className="relative bg-black text-white rounded-2xl p-6 w-10/12 md:w-2/5 lg:w-1/3 border-2 border-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-3xl font-bold text-white hover:text-gray-300 focus:outline-none transition-colors duration-200 z-20 bg-black/80 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center border border-white/30 hover:bg-black/90 hover:border-white/50"
        >
          &times;
        </button>
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          {t("title")}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="name">
              {t("name")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-600 rounded-xl w-full p-3 bg-black text-white focus:border-white focus:outline-none transition-colors duration-200"
              placeholder={t("required")}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="phone">
              {t("phone")} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-2 border-gray-600 rounded-xl w-full p-3 bg-black text-white focus:border-white focus:outline-none transition-colors duration-200"
              placeholder={t("required")}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="email">
              {t("email")} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-600 rounded-xl w-full p-3 bg-black text-white focus:border-white focus:outline-none transition-colors duration-200"
              placeholder={t("required")}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="source">
              {t("source")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="source"
              name="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="border-2 border-gray-600 rounded-xl w-full p-3 bg-black text-white focus:border-white focus:outline-none transition-colors duration-200"
              placeholder={t("required")}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? t("submit") : t("submit")}
          </button>
          <p className="text-sm text-gray-400 mt-4 text-center leading-relaxed">
            {t("privacy")}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Modal;
