// src/components/FeedbackForm.tsx
"use client";
import type React from "react";
import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";

export function TextForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const { messages } = useTranslations();
  const t: any = (messages as any).Writeus;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, description }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setDescription("");
        setSuccess(true);
      } else {
        const data = await response.json();
        alert(data.error || "Ошибка отправки");
      }
    } catch {
      alert("Ошибка сети, попробуйте позже");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white leading-tight break-words">
        {t?.h2 || ""}
      </h2>
      <p className="text-base sm:text-lg mb-3 sm:mb-4 text-white leading-relaxed break-words">
        {t?.p || ""}
      </p>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <input
          type="text"
          placeholder={t?.name || "Имя"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white text-sm sm:text-base"
          required
        />
        <input
          type="email"
          placeholder={t?.email || "Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white text-sm sm:text-base"
          required
        />
        <input
          type="tel"
          placeholder={t?.phone || "+7"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white text-sm sm:text-base"
          required
        />
        <textarea
          placeholder={t?.description || "Описание проекта"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white text-sm sm:text-base"
          rows={4}
          required
        />
        <button
          type="submit"
          className="relative inline-flex items-center justify-center w-full px-6 sm:px-8 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Отправка..." : (t?.button || "Оставить заявку")}
        </button>
        {success && (
          <p className="mt-4 text-green-400 font-medium text-sm sm:text-base">
            Форма успешно отправлена!
          </p>
        )}
      </form>

      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white leading-relaxed break-words">
        {t?.p2 || ""}
      </p>
    </div>
  );
}
